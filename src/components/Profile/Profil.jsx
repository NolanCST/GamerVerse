import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import PutUser from "./PutUser";
import GetUser from "./GetUser";
import './Profil.css'
import { useState } from "react";

function ProfilPage (){

return(
    <div className="Background">
        <NavBar/>
            <GetUser/>
        <Footer/>
    </div>
)
}

export default ProfilPage;
