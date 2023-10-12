import React from "react";
import RenderHome from "./RenderHome";
import "./Home.css";
import NavBar from "../layouts/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="main-post-title">ACTUS CROSSPLATEFORM</div>

      <RenderHome />
    </>
  );
}

export default Home;
