import GenreGrid from "./GenreGrid";

function Sidebar() {
  return (
    <>
      <div className="d-flex flex-col align-items-stretch bg-secondary col-3  bg-opacity-75 my-0 mx-0 py-0 px-0">
        <GenreGrid />
      </div>
    </>
  );
}

export default Sidebar;
