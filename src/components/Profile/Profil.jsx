import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import GetUser from "./GetUser";
import "./Profil.css";
import { useState } from "react";

function ProfilPage() {
  console.log(localStorage.getItem("@TokenUser"));
  return (
    <div className="Background">
      <NavBar />
        <GetUser/>
      <Footer />
    </div>
  );
}

export default ProfilPage;
