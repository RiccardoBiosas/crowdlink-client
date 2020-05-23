import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url, otpions);
        setResponse(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchData()
  });

  return {response, error}
};
