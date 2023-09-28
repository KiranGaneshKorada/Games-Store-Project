import clientApi from "../services/client-api";
import useGenericData, { ListOfData } from "./useGenericData";
import { useQuery } from "@tanstack/react-query";



export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background:string;
}



function useGenres() {

    // const {data:genres,error}=useGenericData<Genre>("/genres")

     const { data: genres, error,isLoading } = useQuery<ListOfData<Genre>, Error>({
       queryKey: ["genres"],
       queryFn: () => clientApi.get<ListOfData<Genre>>("/genres").then((res)=>res.data)
     });
  

  return { genres, error ,isLoading};
}

export default useGenres;
