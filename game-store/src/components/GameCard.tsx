import { Game } from "../hooks/useGames";
import IconPlatform from "./IconPlatform";


interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div className="card">
      <img
        src={game.background_image}
        className="card-img-top "
        alt={game.name}
      />
      <div className="card-body bg-secondary bg-opacity-75">
        <h5 className="card-title mb-2">{game.name}</h5>
        <IconPlatform platforms={game.parent_platforms} />
      </div>
    </div>
  );
}

export default GameCard;
