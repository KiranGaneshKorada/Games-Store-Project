import { useState } from "react";
import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";
import { Genre } from "../hooks/useGenres";

interface Props{
  searchData:string
}

function MainComponent({searchData}:Props) {

    const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null)
    

  return (
    <>
      <Sidebar
        onHandlingClick={(genre) => setSelectedGenre(genre)}
        genreProp={selectedGenre}
      />
      <Mainbar genre={selectedGenre} searchData={searchData} />
    </>
  );
}


export default MainComponent
