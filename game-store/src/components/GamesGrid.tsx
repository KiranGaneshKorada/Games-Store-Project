import { Button } from "react-bootstrap";
import useGames from "../hooks/useGames";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import { useState } from "react";

interface Props {
  ordering: string;
}

function GamesGrid({  ordering }: Props) {

  const [pageNo,setPageNo]=useState(1)
  const { games, error } = useGames(pageNo,8, ordering );



  return (
    <>
      {error && <h1>{error.message}</h1>}

      <div className="row mx-2 my-2 ">
        {games?.results.map((game) => (
          <div className="col-sm-3 my-2  " key={game.id}>
            <GameCard key={game.id} game={game} />
          </div>
        ))}
      </div>
      <Button disabled={!games?.next} onClick={()=>setPageNo(pageNo+1)} className="mx-2 my-4">
        next
      </Button>
      <Button disabled={!games?.previous} onClick={()=>setPageNo(pageNo-1)} className="mx-2 my-4">
        prev
      </Button>
    </>
  );
}

export default GamesGrid;
