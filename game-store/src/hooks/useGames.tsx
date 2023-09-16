import useGenericData from "./useGenericData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

function useGames(genre: Genre | null, platform: Platform | null,ordering:string,searchData:string) {
  const { data, error } = useGenericData<Game>(
    "/games",
    { params: { genres: genre?.id, parent_platforms: platform?.id ,ordering:ordering,search:searchData} },
    [genre?.id, platform?.id,ordering,searchData]
  );

  const games = data;

  return { games, error };
}

export default useGames;
