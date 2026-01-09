import React from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

// Defines the props the LoginForm component will receive
interface LoginFormProps {
  email: string;
  password: string;
  errors: Record<string, string>;
  showPassword: boolean;
  isLoading: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTogglePassword: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onClearError: (field: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  errors,
  showPassword,
  isLoading,
  onEmailChange,
  onPasswordChange,
  onTogglePassword,
  onSubmit,
  onClearError,
}) => {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Email Address</Label>
        <div className="relative" style={{ height: '48px' }}>
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
          <Input
            id="email"
            placeholder="Mohamedahmed@gmail.com"
            className="pl-10 h-11"
            style={{
              width: '100%',
              maxWidth: '448px',
              height: '48px',
              backgroundColor: '#F9FAFB',
              border: errors.email ? '1px solid #ef4444' : '1px solid #E5E7EB',
              borderRadius: '8px',
              paddingLeft: '44px',
              color: '#717182',
              fontSize: '12px'
            }}
            value={email}
            onChange={(e) => { onEmailChange(e.target.value); onClearError('email'); }}
            onFocus={() => onClearError('email')}
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Password</Label>
        <div className="relative" style={{ height: '48px' }}>
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="pl-10 pr-10 h-11"
            style={{
              width: '100%',
              maxWidth: '448px',
              height: '48px',
              backgroundColor: '#F9FAFB',
              border: errors.password ? '1px solid #ef4444' : '1px solid #E5E7EB',
              borderRadius: '8px',
              paddingLeft: '44px',
              paddingRight: '44px',
              color: '#717182',
              fontSize: '12px'
            }}
            value={password}
            onChange={(e) => { onPasswordChange(e.target.value); onClearError('password'); }}
            onFocus={() => onClearError('password')}
          />
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
            style={{ color: '#717182' }}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{errors.password}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm font-medium text-primary hover:underline">
          Forgot password?
        </a>
      </div>

      <Button type="submit" className="w-full h-11 text-base" disabled={isLoading}>
        {isLoading ? 'Signing In...' : 'Sign In to Your Account'}
      </Button>
    </form>
  );
};