import { redirect } from 'next/navigation';

export default function ProfilePage() {
  redirect('/auth/profile/overview');
}
