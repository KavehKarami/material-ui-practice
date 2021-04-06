import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import axiosIntance from "../services/base";

type AxiosOptions = Omit<AxiosRequestConfig, "baseURL" | "url">;

function useFetch(url: string, options?: AxiosOptions) {
  const [res, setRes] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axiosIntance.request({
          url,
          cancelToken: source.token,
          ...options,
        });

        setRes(response.data);
      } catch (e) {
        if (axios.isCancel(e)) {
        } else {
          setErr(e.message);
        }
      }
    };
    fetchData();

    // unmount
    return () => {
      source.cancel();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateRes = (newNote: any) => {
    setRes(newNote);
  };

  return { res, updateRes, err };
}

export default useFetch;
