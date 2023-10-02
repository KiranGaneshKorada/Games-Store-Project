import { useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import usePlatformState from "../zustandStates/platformState";





function PlatformDropDown() {

  const [showPlatform, setShowPlatform] = useState("select platform");

  const { onClickingOnPlatform } = usePlatformState();

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

        <ul className="dropdown-menu dropdown-menu-platform">
          <li key='none'>
            <button
              type="button"
              onClick={() => {
                onClickingOnPlatform(null);
                setShowPlatform('all');
              }}
              className="dropdown-item"
            >
              All
            </button>
          </li>
          {platforms?.results.map((platform) => (
            <li key={platform.id}>
              <button
                type="button"
                onClick={() => {
                  onClickingOnPlatform(platform.id);
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


