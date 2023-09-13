import usePlatforms from "../hooks/usePlatforms";



function PlatformDropDown(){
    const { platforms, error } = usePlatforms();
    return (
      <>
        {error && <h1>{error}</h1>}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            select platform
          </button>
          
          
            <ul className="dropdown-menu">
              {platforms.map((platform) => (
                <li>
                  <button
                    key={platform.id}
                    className="dropdown-item"
                    type="button"
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


