import { AuthFormContainer } from '@/components/auth/AuthFormContainer';
import { AuthLayout } from '@/components/auth/AuthLayout';

export default function CustomerLoginPage() {
  return (
    <AuthLayout>
      <AuthFormContainer />
    </AuthLayout>
  );
}