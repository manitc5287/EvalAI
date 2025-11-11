'use client';

import { useEffect, useState } from 'react';
import { authApi } from '../api/auth-api';
import { authHelpers } from '../lib/auth-helpers';
import type { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const storedUser = authHelpers.getUser();
    const token = authHelpers.getToken();
    
    if (storedUser && token) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } finally {
      authHelpers.clearAuth();
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    logout,
    checkAuth,
  };
};
