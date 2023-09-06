import { Genre } from "../hooks/useGenres";
import GamesGrid from "./GamesGrid";

interface Props{
  genre:Genre|null
}

function Mainbar({genre}:Props) {
  return (
    <>
      <div
        className="bg-secondary col bg-opacity-50
      my-0 mx-0 py-0 px-0  "
      >
        <GamesGrid genre={genre}/>
      </div>
    </>
  );
}

export default Mainbar;
