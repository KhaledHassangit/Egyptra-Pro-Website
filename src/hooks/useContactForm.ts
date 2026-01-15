// features/contact/hooks/useContactForm.ts
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

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [submitContactForm, { isLoading, isSuccess, isError, error }] = useSubmitContactFormMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    // Clear submission error when user starts typing
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
    // Clear error for inquiry field
    if (errors.inquiryType) {
      setErrors(prev => ({ ...prev, inquiryType: undefined }));
    }
    // Clear submission error when user makes a selection
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission immediately
    e.preventDefault();
    e.stopPropagation();

    console.log("Form submission process started");

    try {
      const result = validateContactForm(formData);

      if (result.success) {
        try {
          console.log("Validation successful, submitting data...", result.data);
          await submitContactForm(result.data).unwrap();

          console.log("Submission successful");

          // Reset form on successful submission
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
          console.error('Error submitting form full object:', error);

          // Extract error message from the error object
          let errorMessage = 'An error occurred while submitting your message. Please try again.';

          if (error?.data?.message) {
            errorMessage = error.data.message;
          } else if (error?.message) {
            errorMessage = error.message;
          } else if (typeof error === 'string') {
            errorMessage = error;
          } else {
            // Try to stringify if it's an object
            try {
              const str = JSON.stringify(error);
              if (str !== '{}') errorMessage = `Error: ${str}`;
            } catch (e) { /* ignore */ }
          }

          setSubmitError(errorMessage);
        }
      } else {
        console.log("Validation failed", result.error);
        // Set errors from validation
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        result.error.issues.forEach(issue => {
          const field = issue.path[0] as keyof ContactFormData;
          newErrors[field] = issue.message;
        });
        setErrors(newErrors);
      }
    } catch (error) {
      console.error('Unexpected error in form submission:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
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