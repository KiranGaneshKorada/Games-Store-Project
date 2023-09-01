import Mainbar from "./components/Mainbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function MainApp() {
  return (
    <>
      <div className="container-fluid text-center my-0 mx-0 py-0 px-0">
        <div className="row my-0 mx-0 py-0 px-0">
          <Navbar />
        </div>
        <div className="row my-0 mx-0 py-0 px-0">
          <Sidebar />
          <Mainbar />
        </div>
      </div>
    </>
  );
}

export default MainApp;
