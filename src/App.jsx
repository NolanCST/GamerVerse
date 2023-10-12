import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PlayStation from "./components/saloon/PLaystation";
import Home from "./components/home/Home";
import Xbox from "./components/saloon/Xbox";
import Switch from "./components/saloon/Switch";
import Computer from "./components/saloon/Computer";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import ProfilPage from "./components/Profile/Profil";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
