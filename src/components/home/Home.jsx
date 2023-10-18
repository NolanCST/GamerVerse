import React from "react";
import RenderHome from "./RenderHome";
import "./Home.css";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <div className="main-post-title">

      <RenderHome />
      </div>
    </>
  );
}

export default Home;
