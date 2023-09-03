import useGenericData from "./useGenericData";


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



function useGames() {

  const { data, error } = useGenericData<Game>("/games");

  const games=data

  return { games, error };
}

export default useGames;
