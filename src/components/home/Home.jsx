import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "../layouts/NavBar";
import RenderHome from "./RenderHome";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <RenderHome />
    </>
  );
}

export default Home;
