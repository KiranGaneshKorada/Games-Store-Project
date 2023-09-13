import { Genre } from "../hooks/useGenres";
import GamesGrid from "./GamesGrid";
import PlatformDropDown from "./PlatformDropDown";

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
        <div className="my-4 mx-4"><PlatformDropDown/></div>
        <GamesGrid genre={genre}/>
      </div>
    </>
  );
}

export default Mainbar;
