'use client';

import { useEffect } from 'react';
import { hydrateAuth } from '@/features/auth/authSlice';
import Cookies from 'universal-cookie';
import { useAppDispatch } from '@/hooks/hooks';

export function useAuthHydration() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Run only on client, after hydration
    const cookies = new Cookies();
    const token = cookies.get('accessToken');
    
    if (token) {
      dispatch(hydrateAuth({ token, user: null }));
    }
  }, [dispatch]);
}
