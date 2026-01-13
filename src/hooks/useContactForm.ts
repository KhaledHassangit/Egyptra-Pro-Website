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
    inquiry: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  
  const [submitContactForm, { isLoading, isSuccess, isError, error }] = useSubmitContactFormMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiry: value }));
    // Clear error for inquiry field
    if (errors.inquiry) {
      setErrors(prev => ({ ...prev, inquiry: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = validateContactForm(formData);
    
    if (result.success) {
      try {
        await submitContactForm(result.data).unwrap();
        // Reset form on successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          inquiry: '',
          message: ''
        });
        setErrors({});
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      // Set errors from validation
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach(issue => {
        const field = issue.path[0] as keyof ContactFormData;
        newErrors[field] = issue.message;
      });
      setErrors(newErrors);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    isSuccess,
    isError,
    error,
    handleInputChange,
    handleSelectChange,
    handleSubmit
  };
};