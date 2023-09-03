import useGenres from "../hooks/useGenres";
import imageResize from "../services/image-resize";

function GenreGrid() {
  const { genres, error } = useGenres();

  return (
    <div className="py-5">
      {error && <h1>{error}</h1>}
      {genres.map((genre) => (
        <div className="d-flex flex-row mb-2 px-1 mx-3 ">
          <div className="w-25 h-25 px-3 ">
            <img
              src={imageResize(genre.image_background)}
              className="img-fluid rounded-start rounded-end"
              alt="..."
            ></img>
          </div>
          <div className="pt-1">
            <h6>{genre.name}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreGrid;
