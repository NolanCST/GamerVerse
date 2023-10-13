import { useState } from "react";

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
        try {
           const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/gamer-verse/Profil?limit=20", options);
           if (response.ok) {
              const data = await response.json();
              console.log(data);
              setUser(data);
           } else {
              console.error("Échec de la requête HTTP");
           }
        } catch (error) {
           console.error("Erreur lors de la requête : ", error);
        }
     };
}

export default GetUser;