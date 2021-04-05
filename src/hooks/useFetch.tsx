import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { NoteType } from "../app/containers/types";
import axiosIntance from "../services/base";

type AxiosOptions = Omit<AxiosRequestConfig, "baseURL" | "url">;

function useFetch(url: string, options?: AxiosOptions) {
  const [response, setResponse] = useState<NoteType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const res = await axiosIntance.request({
          url,
          cancelToken: source.token,
          ...options,
        });

        setResponse(res.data);
      } catch (e) {
        if (axios.isCancel(e)) {
        } else {
          setError(e.message);
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

  const updateResponse = (newNote: NoteType[]) => {
    setResponse(newNote);
  };

  return { response, updateResponse, error };
}

export default useFetch;
