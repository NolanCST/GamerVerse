import { useState } from "react";
import PutUser from "./PutUser";

function GetUser() {
    
    const [user,setUser] = useState([]);

    const getUser = async () => {
        let options = {
            method : "GET",
           Headers: {
            "Content-Type": "application/json", 
            "Authorization": "bearer " + localStorage.getItem("@TokenUser"),
           },
        };
           const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/gamer-verse/profil?limit=20", options);
              const data = await response.json();

              console.log(data);

              setUser(data);
     };

     return(
        <>
        <div className="profilInput">

            <h1 className="title">Profil</h1>

            <div className="choix">
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
        </>
     )
}

export default GetUser;