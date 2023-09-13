import useGenericData from "./useGenericData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}


function usePlatforms() {
  const { data, error } = useGenericData<Platform>("/platforms/lists/parents");

  const platforms = data;

  return { platforms, error };
}

export default usePlatforms;
