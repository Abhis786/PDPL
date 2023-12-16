// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoCard from "./components/VideoCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <VideoCard />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
