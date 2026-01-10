import { Button } from '@/components/ui/button';
import { LoadingButtonProps, SpinnerProps } from '@/constants/types';
import React from 'react';


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