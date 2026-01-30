"use client"
import React from 'react';
import { Mail, ArrowLeft, Lock } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import LoadingButton from '@/util/LoadingButton';
import Link from '../shared/link';
import Container from '@/util/Container';
import { useForgotPasswordMutation } from '@/features/auth/authApi';

export const ForgetPassword = () => {
    const [email, setEmail] = React.useState('');
    const [errors, setErrors] = React.useState<Record<string, string | undefined>>({});

    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

    // const [isLoading, setIsLoading] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleEmailChange = (value: string) => {
        setEmail(value);
        // Clear email error when user starts typing
        if (errors.email) {
            handleClearError('email');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic email validation
        if (!email) {
            setErrors({ email: 'Email is required' });
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors({ email: 'Please enter a valid email address' });
            return;
        }


  
        try {
            await forgotPassword({ email }).unwrap();
            setIsSubmitted(true);
            console.log('Password reset link sent to:', email);
        } catch (err: any) {
            console.log(err);
            if (err.data?.message) {
                setErrors({ email: err.data.message });
            } else {
                setErrors({ email: 'Something went wrong. Please try again.' });
            }
        }
        // setisLoading is handled by the hook
    };

    const handleClearError = (field: string) => {
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleTryAgain = () => {
        // Reset state to show the form again
        setIsSubmitted(false);
        setEmail('');
        setErrors({});
    };

    return (
        <Container>
            <div className="w-full max-w-md sm:max-w-lg mx-auto space-y-6 sm:space-y-8">
                <div className="flex justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isSubmitted ? 'bg-green-600' : 'bg-primary'}`}>
                        {isSubmitted ? (
                            <Mail className="h-6 w-6 text-white" />
                        ) : (
                            <Lock className="h-6 w-6 text-white " />
                        )}
                    </div>
                </div>

                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mt-2" style={{ fontWeight: '400', color: '#101828' }}>
                        {isSubmitted ? 'Check Your Email' : 'Forgot Password?'}
                    </h2>
                    <p className="mt-2 text-sm " style={{ color: '#282828', lineHeight: '1.5', fontWeight: '400' }}>
                        {isSubmitted
                            ? 'We\'ve sent password reset instructions to your email.'
                            : 'Enter your email address and we\'ll send you a link to reset your password'
                        }
                    </p>
                </div>

                {isSubmitted ? (
                    <div className="text-center">

                        <div className="mb-6 text-left bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-sm mb-3" style={{ color: '#364153' }}>Helpful Tips</h3>
                            <ul className="space-y-2 text-xs" style={{ color: '#6B7280' }}>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Check your spam/junk folder if you don't see the email
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    The reset link will expire in 1 hour for security
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Add noreply@egyptra.pro to your contacts
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={handleTryAgain}
                                className="w-full py-3 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Didn't receive? Try again
                            </button>

                            <Link href="/customer_login" className="block w-full">
                                <button className="w-full py-3 px-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Back to Login
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <Label htmlFor="email" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Email Address</Label>
                                <div className="relative" style={{ height: '44px' }}>
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
                                    <Input
                                        id="email"
                                        placeholder="you@example.com"
                                        className="pl-10 h-11 w-full placeholder:text-xs sm:placeholder:text-sm"
                                        style={{
                                            height: '44px',
                                            backgroundColor: '#F9FAFB',
                                            border: errors.email ? '1px solid #ef4444' : '1px solid #E5E7EB',
                                            borderRadius: '8px',
                                            paddingLeft: '44px',
                                            color: '#717182',
                                            fontSize: '14px'
                                        }}
                                        value={email}
                                        onChange={(e) => handleEmailChange(e.target.value)}
                                        onFocus={() => handleClearError('email')}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{errors.email}</p>
                                )}
                                <p className="mt-2 text-xs" style={{ color: '#6B7280' }}>
                                    We'll send password reset instructions to this email.
                                </p>
                            </div>

                            <LoadingButton
                                type="submit"
                                isLoading={isLoading}
                                loadingText="Sending..."
                                className="w-full h-12 bg-[#2563EB]"
                            >
                                Send Reset Link
                            </LoadingButton>
                        </form>

                        <div className="mt-6 flex items-center justify-center">
                            <Link href="/customer_login" className="flex items-center text-sm font-medium text-primary hover:underline">
                                <ArrowLeft className="h-4 w-4 mr-1" />
                                Back to Login
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default ForgetPassword;
