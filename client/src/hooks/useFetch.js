import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(url, options);
      setResponse(res);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  });

  return { response, error };
};

export default useFetch;
