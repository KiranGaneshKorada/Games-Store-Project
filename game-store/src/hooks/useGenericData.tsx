import { AxiosRequestConfig, CanceledError } from "axios";
import clientApi from "../services/client-api";
import { useState, useEffect } from "react";

export interface ListOfData<Generic> {
  results: Generic[];
}

function useGenericData<Generic>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,dependencies?:any[]
) {
  const [data, setData] = useState<Generic[]>([]);
  const [error, setError] = useState("");

  useEffect(
    () => {
      const controller = new AbortController();

      clientApi
        .get<ListOfData<Generic>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results), setError("");
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
        });
      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error };
}

export default useGenericData;
