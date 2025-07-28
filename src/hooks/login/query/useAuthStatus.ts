import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const checkAuthStatus = async (): Promise<AuthStatusResponse> => {
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