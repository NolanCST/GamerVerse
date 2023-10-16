import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PlayStation from "./components/saloon/Playstation";
import Home from "./components/Home/Home";
import Xbox from "./components/saloon/Xbox";
import Switch from "./components/saloon/Switch";
import Computer from "./components/saloon/Computer";
import Login from "./components/Login/Login";
import ProfilPage from "./components/Profile/Profil";
import CreatePosts from "./components/Posts/CreatePosts";
import Register from "./components/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/PlayStation",
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
    {
      path: "/ProfilPage",
      element: <ProfilPage />,
    },

    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/CreatePosts",
      element: <CreatePosts />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
