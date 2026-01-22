"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Eye, EyeOff,  ArrowLeft, Key } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import LoadingButton from '@/util/LoadingButton';
import Link from '../shared/link';
import Container from '@/util/Container';
import { useResetPasswordMutation } from '@/features/auth/authApi';
import { notify } from '@/util/notify';

const ResetPassword = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string; general?: string }>({});

    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    useEffect(() => {
        if (!token) {
            setErrors(prev => ({ ...prev, general: 'Invalid or missing reset token.' }));
        }
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        if (!token) {
            setErrors({ general: 'Missing reset token.' });
            return;
        }

        if (password.length < 8) {
            setErrors(prev => ({ ...prev, password: 'Password must be at least 8 characters' }));
            return;
        }

        if (password !== confirmPassword) {
            setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
            return;
        }

        try {
            await resetPassword({ token, password, confirmPassword }).unwrap();
            notify('Password reset successfully', 'success');
            router.push('/customer_login');
        } catch (err: any) {
            if (err.data?.message) {
                setErrors(prev => ({ ...prev, general: err.data.message }));
            } else {
                setErrors(prev => ({ ...prev, general: 'Something went wrong. Please try again.' }));
            }
        }
    };

    return (
        <Container>
            <div className="w-full max-w-md sm:max-w-lg mx-auto space-y-6 sm:space-y-8">
                {/* Icon */}
                <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary">
                        <Key className="h-6 w-6 text-white" />
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mt-2" style={{ fontWeight: '400', color: '#101828' }}>
                        Create New Password
                    </h2>
                    <p className="mt-2 text-sm " style={{ color: '#282828', lineHeight: '1.5', fontWeight: '400' }}>
                        Enter your new password below.
                    </p>
                </div>

                {errors.general && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm text-center">
                        {errors.general}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                    {/* New Password */}
                    <div className="space-y-2">
                        <Label htmlFor="password" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>New Password</Label>
                        <div className="relative" style={{ height: '44px' }}>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter new password"
                                className="pr-10 h-11 w-full placeholder:text-xs sm:placeholder:text-sm"
                                style={{
                                    height: '44px',
                                    backgroundColor: '#F9FAFB',
                                    border: errors.password ? '1px solid #ef4444' : '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    color: '#717182',
                                    fontSize: '14px'
                                }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{errors.password}</p>
                        )}
                        <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Confirm Password</Label>
                        <div className="relative" style={{ height: '44px' }}>
                            <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm new password"
                                className="pr-10 h-11 w-full placeholder:text-xs sm:placeholder:text-sm"
                                style={{
                                    height: '44px',
                                    backgroundColor: '#F9FAFB',
                                    border: errors.confirmPassword ? '1px solid #ef4444' : '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    color: '#717182',
                                    fontSize: '14px'
                                }}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{errors.confirmPassword}</p>
                        )}
                    </div>

                    <LoadingButton
                        type="submit"
                        isLoading={isLoading}
                        loadingText="Resetting..."
                        className="w-full h-12 bg-[#1e40af]"
                        disabled={!token}
                    >
                        Reset Password
                    </LoadingButton>
                </form>

                <div className="mt-6 flex items-center justify-center">
                    <Link href="/customer_login" className="flex items-center text-sm font-medium text-primary hover:underline">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Login
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default ResetPassword;