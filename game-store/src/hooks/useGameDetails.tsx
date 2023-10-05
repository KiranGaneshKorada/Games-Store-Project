import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../services/client-api";
import { AxiosRequestConfig } from "axios";


export interface GameDetails {
  id: number;
  name: string;
  description_raw: string;
  background_image:string
  website:string
}

function useGameDeatails(slug:string|undefined){
    const endPoint=`/games/${slug}`
    const {
      data: game,
      error,
      isLoading,
    } = useQuery<GameDetails, Error>({
      queryKey: ["gameDetails",slug],
      queryFn: (filters: AxiosRequestConfig) =>
        apiClient.get<GameDetails>(endPoint, filters).then((res) => res.data),
    });
return {game,error,isLoading}
}

export default useGameDeatails