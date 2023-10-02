import { useQuery } from "@tanstack/react-query";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

import ClientApi, { ListOfData } from "../services/client-api";
import useSearch from "../zustandStates/searchState";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const apiObject = new ClientApi<Game>("games");

function useGames(pageNo:number,page_size:number,genre: Genre | null, platform: Platform | null,ordering:string) {

  const { searchWord } = useSearch();


  const { data: games, error } = useQuery<ListOfData<Game>, Error>({
    queryKey: [
      "games",
      pageNo,
      page_size,
      genre,
      platform,
      ordering,
      searchWord,
    ],
    queryFn: () =>
      apiObject.getData({
        params: {
          page: pageNo,
          page_size: page_size,
          genres: genre?.id,
          parent_platforms: platform?.id,
          ordering: ordering,
          search: searchWord,
        },
      }),
  });




  return { games, error };
}

export default useGames;
