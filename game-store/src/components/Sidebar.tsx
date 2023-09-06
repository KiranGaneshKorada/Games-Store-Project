import { Genre } from "../hooks/useGenres";
import GenreGrid from "./GenreGrid";

interface Props {
  onHandlingClick: (genre: Genre) => void;
}

function Sidebar({onHandlingClick}:Props) {
  return (
    <>
      <div className="bg-secondary col-3  bg-opacity-75 my-0 mx-0 py-0 px-0 ">
        <GenreGrid onHandlingClick={onHandlingClick} />
      </div>
    </>
  );
}

export default Sidebar;
