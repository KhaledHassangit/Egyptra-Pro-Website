import { Button } from '@/components/ui/button';
import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color = 'white' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-t',
    md: 'w-5 h-5 border-t-2',
    lg: 'w-6 h-6 border-t-2'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full border-r-2 border-transparent animate-spin`}
         style={{ borderTopColor: color }}></div>
  );
};

interface LoadingButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  type = 'button',
  className = '',
  disabled = false,
  isLoading = false,
  loadingText = 'Loading...',
  children,
  onClick,
}) => {
  return (
    <Button
      type={type}
      className={`w-full h-12 text-base rounded-[8px] relative ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner size="md" color="white" />
          <span className="ml-2">{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;