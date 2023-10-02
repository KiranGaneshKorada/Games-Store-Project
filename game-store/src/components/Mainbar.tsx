import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import GamesGrid from "./GamesGrid";
import PlatformDropDown from "./PlatformDropDown";
import { Platform } from "../hooks/usePlatforms";
import OrderByDropdown from "./OrderByDropdown";


interface Props {
  genre: Genre | null;
}

function Mainbar({genre}:Props) {

  const [selectedPlatform,setSelectedPlatform]=useState<Platform|null>(null)
  const [selectedOrder, setSelectedOrder] = useState<string>('');


  return (
    <>
      <div
        className="bg-secondary col bg-opacity-50
      my-0 mx-0 py-0 px-0  "
      >
        <div className="d-flex flex-row">
          <div className="my-4 mx-2">
            <PlatformDropDown
              onHandlingClick={(platform) => setSelectedPlatform(platform)}
            />
          </div>
          <div className="my-4 mx-2">
            <OrderByDropdown
              onHandlingClick={(order) => setSelectedOrder(order)}
            />
          </div>
        </div>

        <GamesGrid
          genre={genre}
          platform={selectedPlatform}
          ordering={selectedOrder}
        />
      </div>
    </>
  );
}

export default Mainbar;
