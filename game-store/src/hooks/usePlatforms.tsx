import { useQuery } from "@tanstack/react-query";
import useGenericData, { ListOfData } from "./useGenericData";
import clientApi from "../services/client-api";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}


function usePlatforms() {
  const { data: platforms, error,isLoading } = useQuery<ListOfData<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      clientApi
        .get<ListOfData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
  });


  return { platforms, error, isLoading };
}

export default usePlatforms;
