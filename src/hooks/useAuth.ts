"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { z } from 'zod';

import { useLoginMutation, useRegisterMutation } from '@/features/auth/authApi';
import { setCredentials } from '@/features/auth/authSlice';
import { notify } from '@/util/notify';
import { loginSchema, registerSchema, type LoginFormData, type RegisterFormData } from '@/lib/validation';

export const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // UI State
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({});

  // Register Form State
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [registerErrors, setRegisterErrors] = useState<Record<string, string>>({});

  // API Mutations
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  // --- Handlers ---
  const toggleView = (view: 'login' | 'register') => {
    setIsLogin(view === 'login');
    setLoginErrors({});
    setRegisterErrors({});
  };

  const clearLoginError = (field: string) => {
    if (loginErrors[field]) {
      setLoginErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const clearRegisterError = (field: string) => {
    if (registerErrors[field]) {
      setRegisterErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // --- Validation ---
  const validateLoginForm = () => {
    try {
      const formData: LoginFormData = { email: loginEmail, password: loginPassword };
      loginSchema.parse(formData);
      setLoginErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.issues.forEach((err) => {
          errors[err.path[0]] = err.message;
        });
        setLoginErrors(errors);
      }
      return false;
    }
  };

  const validateRegisterForm = () => {
    try {
      const formData: RegisterFormData = {
        username: registerName,
        email: registerEmail,
        password: registerPassword,
        confirmPassword: registerConfirmPassword,
      };
      registerSchema.parse(formData);
      setRegisterErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.issues.forEach((err) => {
          errors[err.path[0]] = err.message;
        });
        setRegisterErrors(errors);
      }
      return false;
    }
  };

  // --- Submission ---
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateLoginForm()) {
      try {
        const userData = await login({ email: loginEmail, password: loginPassword }).unwrap();
        dispatch(setCredentials({ user: userData.user, token: userData.access_token }));
        notify('Login successful', 'success');
        router.push('/');
      } catch (err: any) {
        const errorMessage = err?.data?.message || 'Login failed';
        notify(errorMessage, 'error');
      }
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateRegisterForm()) {
      try {
        const userData = await register({
          email: registerEmail,
          password: registerPassword,
          username: registerName,
        }).unwrap();
        dispatch(setCredentials({ user: userData.user, token: userData.access_token }));
        notify('Registration successful', 'success');
        router.push('/');
      } catch (err: any) {
        const errorMessage = err?.data?.message || 'Registration failed';
        notify(errorMessage, 'error');
      }
    }
  };

  return {
    // State
    isLogin,
    showPassword,
    showConfirmPassword,
    loginEmail,
    loginPassword,
    loginErrors,
    registerName,
    registerEmail,
    registerPassword,
    registerConfirmPassword,
    registerErrors,
    isLoginLoading,
    isRegisterLoading,

    // Setters
    setLoginEmail,
    setLoginPassword,
    setRegisterName,
    setRegisterEmail,
    setRegisterPassword,
    setRegisterConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,

    // Handlers
    toggleView,
    handleLoginSubmit,
    handleRegisterSubmit,
    clearLoginError,
    clearRegisterError,
  };
};