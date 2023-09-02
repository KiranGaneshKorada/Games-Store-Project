import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GamesGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <h1>{error}</h1>}

        <div className="row mx-2 my-2">
      {games.map((game) => (
          <div className="col-sm-3 my-2  ">
            <GameCard key={game.id} game={game} />
          </div>
            ))}
        </div>
    </>
  );
}

export default GamesGrid;
