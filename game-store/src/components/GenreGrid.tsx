import useGenres from "../hooks/useGenres";

function GenreGrid() {

    const {genres,error}=useGenres()
  
  return<>
    {error && <h1>{error}</h1>}
    {genres.map((genre) => 
      <h5>{genre.name}</h5>
    )}
  </>
}

export default GenreGrid;
