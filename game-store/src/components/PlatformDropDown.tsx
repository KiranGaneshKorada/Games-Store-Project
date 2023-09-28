import { useState } from "react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props{
  onHandlingClick:(platform:Platform)=>void;
}



function PlatformDropDown({ onHandlingClick }: Props) {

  const [showPlatform, setShowPlatform] = useState("select platform");

  const { platforms, error } = usePlatforms();
  return (
    <>
      {error && <h1>{error.message}</h1>}
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {showPlatform}
        </button>

        <ul className="dropdown-menu">
          {platforms?.results.map((platform) => (
            <li key={platform.id}>
              <button
                type="button"
                onClick={() => {
                  onHandlingClick(platform);
                  setShowPlatform(platform.name);
                }}
                className="dropdown-item"
              >
                {platform.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PlatformDropDown;


