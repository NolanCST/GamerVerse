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

    <div className="profilInput">

        <h1 className="title">Profil</h1>

        <div className="choise">
            <select name="Plateforme" className="platform">
                <option value="Plateforme">Plateforme</option>
                <option value="playstation">Playstation</option>
                <option value="Xbox">Xbox</option>
                <option value="switch">Switch</option>
                <option value="Pc">PC</option>
            </select>
        </div>

        <div className="identity">
            <input type="text" name="firstName" className="firstName" placeholder="Nom"/>
            <input type="text" name="lastName" className="lastName" placeholder="Prénom"/>
            <input type="number" name="age" className="age" placeholder="Âge" />
        </div>
    
        <div className="mailInput">
            <input type="text" name="email" className="email" placeholder="E-mail"/>
            <input type="password" name="passewordChange" className="Mdp" placeholder="Mot de passe"/>
        </div>
        
        <button className="switchMdp">Modifier Profil</button>
    </div>

    <Footer/>
    </div>
)
}

export default ProfilPage;
