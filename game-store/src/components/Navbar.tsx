import SearchComponent from "./SearchComponent";

interface Props{
  onSubmission:(searchText:string)=>void;
}

function Navbar({onSubmission}:Props) {
  return (
    <>
      <div className="navbar bg-secondary bg-opacity-25 my-0 mx-0 py-0 px-0">
        <a className="navbar-brand   mx-5">Game-Store</a>
        <div className="col  text-white my-0 mx-0 py-0 px-0 my-1 ">
          <SearchComponent onSubmission={(searchText)=>onSubmission(searchText)}/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
