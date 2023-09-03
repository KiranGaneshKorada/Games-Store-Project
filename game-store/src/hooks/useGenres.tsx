import { useEffect, useState } from "react";
import clientApi from "../services/client-api";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}

export interface ListOfGenres {
  results: Genre[];
}

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    clientApi
      .get<ListOfGenres>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setError("");
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
          return () => controller.abort();

  }, []);

  return { genres, error };
}

export default useGenres;
