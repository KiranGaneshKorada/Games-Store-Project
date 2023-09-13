import { useState } from "react";
import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";
import { Genre } from "../hooks/useGenres";

function MainComponent() {

    const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null)
    

  return (
    <>
      <Sidebar
        onHandlingClick={(genre) => setSelectedGenre(genre)}
        genreProp={selectedGenre}
      />
      <Mainbar genre={selectedGenre}  />
    </>
  );
}


export default MainComponent
