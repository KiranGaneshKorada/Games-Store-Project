import { useParams } from "react-router-dom";
import useGameDeatails from "../hooks/useGameDetails";


function GameDetails(){
    const params=useParams()
    const{game,error,isLoading}=useGameDeatails(params.slug!);  

    if (error||!game){
        throw new Error("Data not found")
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
        <h1>{game?.name}</h1>
        {game?.description_raw}
      </>
    );
}

export default GameDetails;