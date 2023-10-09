import { useParams } from "react-router-dom";
import useGameDeatails from "../hooks/useGameDetails";
import TextShowMoreLess from "./TextShow";
import TrailerCumSS from "./TrailerShot";
import useGameMedia from "../hooks/useGameMedia";

function GameDetails() {
  const params = useParams();
  const { game, error:error1, isLoading:loading1 } = useGameDeatails(params.slug!);
  const {
    gameMedia,
    error: error2,
    isLoading: loading2,
  } = useGameMedia(params.slug!);

  if (error1||error2) {
    throw new Error("Data not found");
  }

  if (loading2 || loading1)
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
      <div className="container text-center my-2 px-2 py-2 bg-secondary bg-opacity-25">
        <div className="row mx-0 my-2">
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col">
                  <img height={200} 
                    src={game?.background_image}
                    className="rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">{game?.name}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <h1></h1> <h4>Rating : {game?.rating}</h4>
            <TextShowMoreLess>{game?.description_raw}</TextShowMoreLess>
            <h5>MetaScore:{game?.metacritic}</h5>
            <h5>Released:{game?.released}</h5>
            <h5>
              <a target="_blank" href={game?.website}>
                Visit official website
              </a>
            </h5>
            <h5>playtime:{game?.playtime} hrs</h5>
          </div>
          <div className="col">
            <TrailerCumSS slug={params.slug!}></TrailerCumSS>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDetails;
