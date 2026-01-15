// features/contact/components/ContactForm.tsx
"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import LoadingButton from '@/util/LoadingButton'
import { useState, useEffect } from 'react'
import { notify } from '@/util/notify'
import { useContactForm } from '@/hooks/useContactForm'

interface ContactFormProps {
  onSubmit?: (data: any) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const {
    formData,
    errors,
    isLoading,
    isSuccess,
    isError,
    error,
    handleInputChange,
    handleSelectChange,
    handleSubmit
  } = useContactForm();

  useEffect(() => {
    if (isSuccess) {
      notify('Thank you for your message! We will get back to you soon.', 'success');

      if (onSubmit) {
        onSubmit(formData);
      }
    }
  }, [isSuccess, formData, onSubmit]);

  useEffect(() => {
    if (isError && error) {
      notify(error, 'error');
    }
  }, [isError, error]);

  return (
    <div className="w-full lg:w-[600px] h-[auto] bg-white rounded-[10px] shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6 overflow-y-auto">
      <div className="relative mb-6">
        <h2 className="text-[24px] leading-[32px] font-medium text-2nd-primary">
          Send us a Message
        </h2>
        <span className="absolute bottom-[-12px] left-0 w-[60px] h-[4px] bg-primary rounded-[2px]"></span>
      </div>

      {/* Use a div with form element inside to ensure proper event handling */}
      <div>
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-[#717182] text-sm font-medium">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`h-[40px] p-2 bg-[#F9FAFB] border-[#D1D5DC] rounded-[4px] focus:border-[#0373DE] focus:ring-[#0373DE] focus:ring-opacity-25 mt-1 ${errors.firstName ? 'border-red-500' : ''}`}
                required
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-[#717182] text-sm font-medium">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`h-[40px] p-2 bg-[#F9FAFB] border-[#D1D5DC] rounded-[4px] focus:border-[#0373DE] focus:ring-[#0373DE] focus:ring-opacity-25 mt-1 ${errors.lastName ? 'border-red-500' : ''}`}
                required
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-[#717182] text-sm font-medium">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className={`h-[40px] p-2 bg-[#F9FAFB] border-[#D1D5DC] rounded-[4px] focus:border-[#0373DE] focus:ring-[#0373DE] focus:ring-opacity-25 mt-1 ${errors.email ? 'border-red-500' : ''}`}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone" className="text-[#717182] text-sm font-medium">Phone Number (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleInputChange}
              className="h-[40px] p-2 bg-[#F9FAFB] border-[#D1D5DC] rounded-[4px] focus:border-[#0373DE] focus:ring-[#0373DE] focus:ring-opacity-25 mt-1"
            />
          </div>

          <div>
            <Label htmlFor="inquiryType" className="text-[#717182] text-sm font-medium">General Inquiry</Label>
            <Select onValueChange={handleSelectChange} value={formData.inquiryType}>
              <SelectTrigger className={`h-[40px] p-2 bg-[#F9FAFB] border-[#D1D5DC] rounded-[4px] w-full focus:border-[#0373DE] focus:ring-[#0373DE] focus:ring-opacity-25 mt-1 ${errors.inquiryType ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Select Inquiry Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general information">General Information</SelectItem>
                <SelectItem value="tour booking">Tour Booking</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="customer support">Customer Support</SelectItem>
              </SelectContent>
            </Select>
            {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
          </div>

          <div>
            <Label htmlFor="message" className="text-[#717182] text-sm font-medium">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className={`p-2 bg-[#F9FAFB] border-[#D1D5DC] rounded-[4px] min-h-[120px] focus:border-[#0373DE] focus:ring-[#0373DE] focus:ring-opacity-25 mt-1 ${errors.message ? 'border-red-500' : ''}`}
              required
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* 
          {isError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )} */}

          <LoadingButton
            type="submit"
            className="h-[40px] bg-primary rounded-[4px]"
            isLoading={isLoading}
            loadingText="Sending..."
          >
            Send Message
          </LoadingButton>
        </form>
      </div>
    </div>
  )
}

export default ContactForm;