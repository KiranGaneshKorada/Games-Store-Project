import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainComponent from "./components/MainComponent";
import GameDetails from "./components/GameDetails";

const router = createBrowserRouter([
  {
    path: "/games",
    element: <App />,
    children: [
      { path: "", element: <MainComponent /> },
      { path: ":id", element: <GameDetails /> },
    ],
  },
]);

export default router;
