"use client"
import React from 'react';
import { cn } from '@/lib/utils';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useAuth } from '@/hooks/useAuth';
import Container from '@/util/Container';
import Logo from '@/util/Logo';

export const AuthFormContainer: React.FC = () => {
  const {
    // Shared state
    isLogin, toggleView, showPassword, showConfirmPassword, setShowPassword, setShowConfirmPassword,
    // Login props
    loginEmail, loginPassword, loginErrors, isLoginLoading, setLoginEmail, setLoginPassword,
    handleLoginSubmit, clearLoginError,
    // Register props
    registerName, registerEmail, registerPassword, registerConfirmPassword, registerErrors, isRegisterLoading,
    setRegisterName, setRegisterEmail, setRegisterPassword, setRegisterConfirmPassword,
    handleRegisterSubmit, clearRegisterError,
  } = useAuth();

  return (
    <Container >
      <div className="w-full max-w-md sm:max-w-lg mx-auto space-y-6 sm:space-y-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-4">
            <Logo width={12} height={12} />
            <span className="ml-2 text-primary" style={{ fontWeight: '500', fontSize: 'clamp(18px, 4vw, 24px)' }}>
              Welcome to Egyptra
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2" style={{ fontWeight: '400', color: '#101828' }}>
            Start Your Egyptian Journey
          </h2>
          <p className="mt-2 text-sm sm:text-base" style={{ color: '#282828', lineHeight: '1.5', fontWeight: '400' }}>
            Join thousands of travelers discovering authentic Egyptian experiences
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex p-1 rounded-lg mb-6 sm:mb-8" style={{ backgroundColor: '#F9FAFB' }}>
          <button
            onClick={() => toggleView('login')}
            className={cn(
              "flex-1 py-2.5 px-2 sm:px-4 text-sm font-medium rounded-md transition-all duration-200",
              isLogin ? "bg-white text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
            style={{
              height: '44px sm:h-50px',
              border: isLogin ? '0.8px solid #E5E7EB' : '0.8px solid transparent',
              borderRadius: '10px',
              backgroundColor: isLogin ? '#FFFFFF' : 'transparent'
            }}
          >
            Login
          </button>
          <button
            onClick={() => toggleView('register')}
            className={cn(
              "flex-1 py-2.5 px-2 sm:px-4 text-sm font-medium rounded-md transition-all duration-200",
              !isLogin ? "bg-white text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
            style={{
              height: '44px sm:h-50px',
              border: !isLogin ? '0.8px solid #E5E7EB' : '0.8px solid transparent',
              borderRadius: '10px',
              backgroundColor: !isLogin ? '#FFFFFF' : 'transparent'
            }}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <LoginForm
            email={loginEmail}
            password={loginPassword}
            errors={loginErrors}
            showPassword={showPassword}
            isLoading={isLoginLoading}
            onEmailChange={setLoginEmail}
            onPasswordChange={setLoginPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
            onSubmit={handleLoginSubmit}
            onClearError={clearLoginError}
          />
        ) : (
          <RegisterForm
            name={registerName}
            email={registerEmail}
            password={registerPassword}
            confirmPassword={registerConfirmPassword}
            errors={registerErrors}
            showPassword={showPassword}
            showConfirmPassword={showConfirmPassword}
            isLoading={isRegisterLoading}
            onNameChange={setRegisterName}
            onEmailChange={setRegisterEmail}
            onPasswordChange={setRegisterPassword}
            onConfirmPasswordChange={setRegisterConfirmPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
            onToggleConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
            onSubmit={handleRegisterSubmit}
            onClearError={clearRegisterError}
          />
        )}
      </div>
    </Container>
  );
};