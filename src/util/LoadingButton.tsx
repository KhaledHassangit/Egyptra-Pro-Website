import { Button } from '@/components/ui/button';
import { LoadingButtonProps, SpinnerProps } from '@/constants/types';
import React from 'react';

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color = 'white' }) => {
  const sizeClasses = {
    sm: 'w-3 h-3 border-t',
    md: 'w-4 h-4 border-t',
    lg: 'w-5 h-5 border-t-2'
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
      className={`w-full h-10 sm:h-12 text-sm sm:text-base rounded-[8px] relative transition-all duration-200 ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner  color="white" />
          <span className="ml-2 text-xs sm:text-sm">{loadingText}</span>
        </div>
      ) : (
        <span className="text-sm sm:text-base">{children}</span>
      )}
    </Button>
  );
};

export default LoadingButton;