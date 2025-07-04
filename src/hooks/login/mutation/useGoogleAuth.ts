import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const googleLogin = async (code: string) => {
  const response = await axios.post(
    "YOUR_BACKEND_API_URL/auth/google", 
    { code },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true 
    }
  );
  
  return response.data;
};

export interface GoogleAuthResponse {
  user: {
    id: string;
    email: string;
    name?: string;
  };
  token?: string;
}

export const useGoogleAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  return useMutation({
    mutationFn: (code: string) => googleLogin(code),
    onSuccess: (data: GoogleAuthResponse) => {
      queryClient.setQueryData(['user'], data.user);
      
      queryClient.invalidateQueries({ queryKey: ['auth'] });
      
      navigate('/home');
    },
    onError: (error) => {
      console.error('Google 로그인 오류:', error);
    }
  });
}; 