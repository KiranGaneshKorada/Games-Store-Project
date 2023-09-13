import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import GamesGrid from "./GamesGrid";
import PlatformDropDown from "./PlatformDropDown";
import { Platform } from "../hooks/usePlatforms";

interface Props{
  genre:Genre|null
}

function Mainbar({genre}:Props) {

  const [selectedPlatform,setSelectedPlatform]=useState<Platform|null>(null)

  return (
    <>
      <div
        className="bg-secondary col bg-opacity-50
      my-0 mx-0 py-0 px-0  "
      >
        <div className="my-4 mx-4"><PlatformDropDown onHandlingClick={(platform)=>setSelectedPlatform(platform)}/></div>
        <GamesGrid genre={genre} platform={selectedPlatform}/>
      </div>
    </>
  );
}

export default Mainbar;
