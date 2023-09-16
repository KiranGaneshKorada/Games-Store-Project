import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";

interface Props {
  genre: Genre|null;
  platform:Platform|null
  ordering:string
}

function GamesGrid({genre,platform,ordering}:Props) {
  const { games, error } = useGames(genre,platform,ordering);

  return (
    <>
      {error && <h1>{error}</h1>}

        <div className="row mx-2 my-2">
      {games.map((game) => (
          <div className="col-sm-3 my-2  "key={game.id}>
            <GameCard key={game.id} game={game} />
          </div>
            ))}
        </div>
    </>
  );
}

export default GamesGrid;
