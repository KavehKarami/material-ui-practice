import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import axiosIntance from "../services/base";

type AxiosOptions = Omit<AxiosRequestConfig, "baseURL" | "url">;

function useFetch(url: string, options?: AxiosOptions) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosIntance.request({
          url,
          ...options,
        });
        setResponse(res.data);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error };
}

export default useFetch;
