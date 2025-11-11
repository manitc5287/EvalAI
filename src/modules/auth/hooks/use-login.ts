'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '../api/auth-api';
import { authHelpers } from '../lib/auth-helpers';
import { AUTH_ROUTES } from '../constants';
import type { LoginCredentials } from '../types';

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const { user, token } = await authApi.login(credentials);
      authHelpers.setToken(token);
      authHelpers.setUser(user);
      router.push(AUTH_ROUTES.DASHBOARD);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
