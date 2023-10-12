import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PlayStation from "./components/saloon/PLaystation";
import Home from "./components/home/Home";
import Xbox from "./components/saloon/Xbox";
import Switch from "./components/saloon/Switch";
import Computer from "./components/saloon/Computer";
import POSTPosts from "./components/posts/POSTPosts";
import Footer from "./components/layouts/Footer";

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
         path: "/POSTPosts",
         element: <POSTPosts />,
      },
   ]);
   return (
      <>
         <RouterProvider router={router} />
         <Footer />
      </>
   );
}

export default App;
