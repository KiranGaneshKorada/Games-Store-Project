import { useParams } from "react-router-dom";
import useGameDeatails from "../hooks/useGameDetails";
import TextShowMoreLess from "./TextShow";

function GameDetails() {
  const params = useParams();
  const { game, error, isLoading } = useGameDeatails(params.slug!);

  if (error) {
    throw new Error("Data not found");
  }

  if (isLoading)
    return (
      <div>
        <h5>Loading....</h5>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <>
      <h1>{game?.name}</h1> <h4>Rating : {game?.rating}</h4>
      <TextShowMoreLess>{game?.description_raw}</TextShowMoreLess>
      <h5>MetaScore:{game?.metacritic}</h5>
      <h5>Released:{game?.released}</h5>
      <h5>
        <a target="_blank" href={game?.website}>
          Visit official website
        </a>
      </h5>
      <h5>playtime:{game?.playtime} hrs</h5>
    </>
  );
}

export default GameDetails;
