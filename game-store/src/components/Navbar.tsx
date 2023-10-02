import SearchComponent from "./SearchComponent";



function Navbar() {
  return (
    <>
      <div className="navbar bg-secondary bg-opacity-25 my-0 mx-0 py-0 px-0">
        <a className="navbar-brand   mx-5">Game-Store</a>
        <div className="col  text-white my-0 mx-0 py-0 px-0 my-1 ">
          <SearchComponent />
        </div>
      </div>
    </>
  );
}

export default Navbar;
