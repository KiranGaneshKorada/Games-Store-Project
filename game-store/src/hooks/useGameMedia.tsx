import { useQuery } from "@tanstack/react-query";
import ClientApi from "../services/client-api";
import { Platform } from "./usePlatforms";

export interface GameMedia {
  id: number;
  name: string;
  description_raw: string;
  released: string;
  background_image: string;
  website: string;
  rating: number;
  parent_platforms:{platform:Platform}[];
  genres:{id:number,name:string}[]
  publishers:{name:string}[]
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
