import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PlayStation from "./components/saloon/PLaystation";
import Home from "./components/home/Home";
import Xbox from "./components/saloon/Xbox";
import Switch from "./components/saloon/Switch";
import Computer from "./components/saloon/Computer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/PlaySation",
      element: <PlayStation />,
    },
    {
      path: "/Xbox",
      element: <Xbox />,
    },
    {
      path: "/Switch",
      element: <Switch />,
    },
    {
      path: "/Computer",
      element: <Computer />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
