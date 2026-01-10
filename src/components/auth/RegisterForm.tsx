import React from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import LoadingButton from '@/util/LoadingButton';

// Defines the props the RegisterForm component will receive
interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors: Record<string, string>;
  showPassword: boolean;
  showConfirmPassword: boolean;
  isLoading: boolean;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onTogglePassword: () => void;
  onToggleConfirmPassword: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onClearError: (field: string) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  name,
  email,
  password,
  confirmPassword,
  errors,
  showPassword,
  showConfirmPassword,
  isLoading,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onTogglePassword,
  onToggleConfirmPassword,
  onSubmit,
  onClearError,
}) => {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-y-2">
        <Label htmlFor="username" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>User Name</Label>
        <div className="relative" style={{ height: '48px' }}>
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
          <Input
            id="username"
            placeholder="Khaled Hassan"
            className="pl-10 h-11"
            style={{
              width: '100%', maxWidth: '448px', height: '48px', backgroundColor: '#F9FAFB',
              border: errors.username ? '1px solid #ef4444' : '1px solid #E5E7EB', borderRadius: '8px',
              paddingLeft: '44px', color: '#717182', fontSize: '12px'
            }}
            value={name}
            onChange={(e) => { onNameChange(e.target.value); onClearError('username'); }}
            onFocus={() => onClearError('username')}
          />
        </div>
        {errors.username && <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{errors.username}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="reg-email" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Email Address</Label>
        <div className="relative" style={{ height: '48px' }}>
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
          <Input
            id="reg-email" placeholder="you@example.com" className="pl-10 h-11"
            style={{
              width: '100%', maxWidth: '448px', height: '48px', backgroundColor: '#F9FAFB',
              border: errors.email ? '1px solid #ef4444' : '1px solid #E5E7EB', borderRadius: '8px',
              paddingLeft: '44px', color: '#717182', fontSize: '12px'
            }}
            value={email}
            onChange={(e) => { onEmailChange(e.target.value); onClearError('email'); }}
            onFocus={() => onClearError('email')}
          />
        </div>
        {errors.email && <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="reg-password" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Password</Label>
        <div className="relative" style={{ height: '48px' }}>
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
          <Input
            id="reg-password" type={showPassword ? "text" : "password"} placeholder="Create a strong password"
            className="pl-10 pr-10 h-11"
            style={{
              width: '100%', maxWidth: '448px', height: '48px', backgroundColor: '#F9FAFB',
              border: errors.password ? '1px solid #ef4444' : '1px solid #E5E7EB', borderRadius: '8px',
              paddingLeft: '44px', paddingRight: '44px', color: '#717182', fontSize: '12px'
            }}
            value={password}
            onChange={(e) => { onPasswordChange(e.target.value); onClearError('password'); }}
            onFocus={() => onClearError('password')}
          />
          <button type="button" onClick={onTogglePassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10" style={{ color: '#717182' }}>
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.password && <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{errors.password}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password" style={{ color: '#364153', fontWeight: '500', fontSize: '14px', lineHeight: '14px' }}>Confirm Password</Label>
        <div className="relative" style={{ height: '48px' }}>
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10" style={{ color: '#717182' }} />
          <Input
            id="confirm-password" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password"
            className="pl-10 pr-10 h-11"
            style={{
              width: '100%', maxWidth: '448px', height: '48px', backgroundColor: '#F9FAFB',
              border: errors.confirmPassword ? '1px solid #ef4444' : '1px solid #E5E7EB', borderRadius: '8px',
              paddingLeft: '44px', paddingRight: '44px', color: '#717182', fontSize: '12px'
            }}
            value={confirmPassword}
            onChange={(e) => { onConfirmPasswordChange(e.target.value); onClearError('confirmPassword'); }}
            onFocus={() => onClearError('confirmPassword')}
          />
          <button type="button" onClick={onToggleConfirmPassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10" style={{ color: '#717182' }}>
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.confirmPassword && <p className="mt-1 text-xs" style={{ color: '#ef4444' }}>{errors.confirmPassword}</p>}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label htmlFor="terms" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground">
          I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
        </label>
      </div>
      <LoadingButton
        type="submit"
        isLoading={isLoading}
        loadingText="Creating Account..."
      >
        Create Your Account
      </LoadingButton>
    </form>
  );
};