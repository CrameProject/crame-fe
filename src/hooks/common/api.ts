import { useState, useEffect, useCallback } from 'react';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';


axios.defaults.baseURL = '';

type UseAxiosResult<T> = {
  response: AxiosResponse<T> | null;
  error: AxiosError | null;
  loading: boolean;
  refetch: () => void;
};

const useAxios = <T>(
  axiosParams: AxiosRequestConfig
): UseAxiosResult<T> => {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.request<T>(axiosParams);
      setResponse(res);
      setError(null);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  }, [axiosParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    response,
    error,
    loading,
    refetch: fetchData,
  };
};

export default useAxios;