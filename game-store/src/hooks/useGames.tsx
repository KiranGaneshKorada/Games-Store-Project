import useGenericData from "./useGenericData";
import { Genre } from "./useGenres";

export interface platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
}

function useGames(genre: Genre | null) {
  const { data, error } = useGenericData<Game>(
    "/games",
    { params: { genres: genre?.id } },
    [genre?.id]
  );

  const games = data;

  return { games, error };
}

export default useGames;
