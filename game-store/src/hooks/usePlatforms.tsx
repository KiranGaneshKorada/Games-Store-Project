import useGenericData from "./useGenericData";

export interface platform {
  id: number;
  name: string;
  slug: string;
}


function usePlatforms() {
  const { data, error } = useGenericData<platform>("/platforms/lists/parents");

  const platforms = data;

  return { platforms, error };
}

export default usePlatforms;
