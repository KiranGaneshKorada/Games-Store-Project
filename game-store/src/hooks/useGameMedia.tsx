import { useQuery } from "@tanstack/react-query";
import ClientApi from "../services/client-api";

export interface GameMedia {
  id: number;
  name: string;
  preview:string
  data:{}
}

function useGameMedia(slug: string) {
  const endPoint = `/games/${slug}/movies`;

  const apiObject = new ClientApi<GameMedia>(endPoint);

  const {
    data: gameMedia,
    error,
    isLoading,
  } = useQuery<GameMedia, Error>({
    queryKey: ["gameDetails", slug],
    queryFn: apiObject.getSingleData,
    staleTime: 60 * 60 * 1000, //1hr
  });
  return { gameMedia, error, isLoading };
}

export default useGameMedia;
