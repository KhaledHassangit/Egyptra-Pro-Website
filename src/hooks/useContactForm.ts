import { useState } from 'react';
import { validateContactForm } from '@/lib/validation';
import { ContactFormData } from '@/constants/types';
import { useSubmitContactFormMutation } from '@/features/contact/contactApi';

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [
    submitContactForm,
    { isLoading, isSuccess, isError }
  ] = useSubmitContactFormMutation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));

    if (errors.inquiryType) {
      setErrors(prev => ({ ...prev, inquiryType: undefined }));
    }

    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const result = validateContactForm(formData);

      if (!result.success) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        result.error.issues.forEach(issue => {
          const field = issue.path[0] as keyof ContactFormData;
          newErrors[field] = issue.message;
        });
        setErrors(newErrors);
        return;
      }

      /** ===============================
       *  BUILD CLEAN PAYLOAD
       *  phone NOT sent if empty
       * =============================== */
      const payload: any = {
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email,
        inquiryType: result.data.inquiryType,
        message: result.data.message,
      };

      if (result.data.phone?.trim()) {
        payload.phone = result.data.phone.trim();
      }

      await submitContactForm(payload).unwrap();

      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });

      setErrors({});
      setSubmitError(null);
    } catch (error: any) {
      console.error('Error submitting form:', error);

      let errorMessage =
        'An error occurred while submitting your message. Please try again.';

      if (error?.data?.message) {
        errorMessage = error.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      setSubmitError(errorMessage);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    isSuccess,
    isError,
    error: submitError,
    handleInputChange,
    handleSelectChange,
    handleSubmit
  };
};
