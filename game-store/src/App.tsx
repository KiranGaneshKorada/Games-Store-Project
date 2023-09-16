import { useState } from "react";
import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";



function MainApp() {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <div className="container-fluid text-center my-0 mx-0 py-0 px-0">
        <div className="row my-0 mx-0 py-0 px-0">
          <Navbar onSubmission={(searchText)=>setSearch(searchText)} />
        </div>
        <div className="row my-0 mx-0 py-0 px-0">
         <MainComponent searchData={search}/>
        </div>
      </div>
    </>
  );
}

export default MainApp;
