import { useQuery } from "@tanstack/react-query";
import useGenericData, { ListOfData } from "./useGenericData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import clientApi from "../services/client-api";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

function useGames(genre: Genre | null, platform: Platform | null,ordering:string,searchData:string) {

  // const { data: games, error } = useGenericData<Game>(
  //   "/games",
  //   {
  //     params: {
  //       genres: genre?.id,
  //       parent_platforms: platform?.id,
  //       ordering: ordering,
  //       search: searchData,
  //     },
  //   },
  //   [genre?.id, platform?.id, ordering, searchData]
  // );

  const { data: games, error } = useQuery<ListOfData<Game>, Error>({
    queryKey: ["games",genre,platform,ordering,searchData],
    queryFn: () =>
      clientApi.get<ListOfData<Game>>("/games",{
      params: {
        genres: genre?.id,
        parent_platforms: platform?.id,
        ordering: ordering,
        search: searchData,
      },
    }).then((res) => res.data),
  });




  return { games, error };
}

export default useGames;
