import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import GetUser from "./GetUser";
import "./Profil.css";
import { useState } from "react";
import GetUserId from "./GetUserId";

function ProfilPage() {
  console.log(localStorage.getItem("@TokenUser"));
  return (
    <div className="Background">
      <NavBar />
      <GetUser />
      <GetUserId />
      <Footer />
    </div>
  );
}

export default ProfilPage;
