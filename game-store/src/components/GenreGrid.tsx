import useGenres from "../hooks/useGenres";
import imageResize from "../services/image-resize";
import useGenreState from "../zustandStates/genreState";



function GenreGrid() {
  const { genres, error } = useGenres();
  const {genreId,onClickingOnGenre}=useGenreState();

  return (
    <div className="py-3 px-3 box-genres ">
      {error && <h1>{error.message}</h1>}
      <h4 className="my-2">Genres</h4>
      {genres?.results.map((genre) => (
        <button
          type="button"
          onClick={() => onClickingOnGenre(genre.id)}
          className={
            genre.id === genreId
              ? "btn btn-secondary my-1 active "
              : "btn btn-secondary my-1 "
          }
          key={genre.id}
        >
          <div className="d-flex flex-row  justify-content-start ">
            <div className="px-1 py-1">
              <img
                src={imageResize(genre.image_background)}
                className="object-fit-cover  rounded h-50 w-25"
                alt="..."
              ></img>
            </div>
            <div className="pt-1">
              <h6 className="text-dark">{genre.name}</h6>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default GenreGrid;
