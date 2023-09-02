import { Game } from "../hooks/useGames";

interface Props{
  game:Game
}


function GameCard({game}:Props) {
  return (
    <div className="card">
      <img src={game.background_image} className="card-img-top " alt={game.name} />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
      </div>
    </div>
  );
}

export default GameCard;
