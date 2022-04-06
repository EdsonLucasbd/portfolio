import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch(url) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, {
          signal: controller.signal,
        });
        setResult(res.data.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          setError(error);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort()
    }
  }, [url]);
  return { result, error, loading };
}