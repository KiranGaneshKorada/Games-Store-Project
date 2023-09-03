import { CanceledError } from "axios";
import clientApi from "../services/client-api";
import { useState, useEffect } from "react";


export interface platform{

  id:number;
  slug:string;
  name:string;

}
export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:platform}[]
}

interface ListOfGames {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    clientApi
      .get<ListOfGames>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results), setError("");
      })
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;
