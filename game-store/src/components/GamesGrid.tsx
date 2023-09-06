import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";

interface Props {
  genre: Genre|null;
}

function GamesGrid({genre}:Props) {
  const { games, error } = useGames(genre);

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
