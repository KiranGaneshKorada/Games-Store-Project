import { Genre } from "../hooks/useGenres";
import GenreGrid from "./GenreGrid";

interface Props {
  onHandlingClick: (genre: Genre) => void;
  genreProp: Genre | null;
}

function Sidebar({ onHandlingClick, genreProp }: Props) {
  return (
    <>
      <div className="bg-secondary col-3  bg-opacity-75 my-0 mx-0 py-0 px-0 ">
        <GenreGrid onHandlingClick={onHandlingClick} genreProp={genreProp} />
      </div>
    </>
  );
}

export default Sidebar;
