import { CanceledError } from "axios";
import clientApi from "../services/client-api";
import { useState, useEffect } from "react";



interface ListOfData<Generic> {
  results: Generic[];
}

function useGenericData<Generic>(endPoint:string) {
  const [data, setData] = useState<Generic[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    clientApi
      .get<ListOfData<Generic>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results), setError("");
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { data, error };
}

export default useGenericData;
