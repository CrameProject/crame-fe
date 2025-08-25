import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const checkAuthStatus = async (): Promise<AuthStatusResponse> => {
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  const enableLocalAuto = (import.meta as any)?.env?.VITE_ENABLE_LOCAL_AUTOLOGIN !== 'false';

  if (isLocalhost && enableLocalAuto) {
    const mockUser = {
      id: 'local-dev-user',
      email: 'dev@local.test',
      name: 'Local Developer',
    };
    return { isAuthenticated: true, user: mockUser };
  }

  try {
    const response = await axios.get('YOUR_BACKEND_API_URL/auth/status', {
      withCredentials: true
    });
    return response.data;
  } catch {
    return { isAuthenticated: false };
  }
};

export interface AuthStatusResponse {
  isAuthenticated: boolean;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

export const useAuthStatus = () => {
  return useQuery<AuthStatusResponse>({
    queryKey: ['auth'],
    queryFn: checkAuthStatus,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}; 