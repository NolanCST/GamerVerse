import { useState } from "react";

function PutUser() {

   const [user,setUser] = useState([]);
    
   const ModifProfil = async () => {
            let options = {
    
                method : "PUT",
    
                Headers: {
                    "Content-Type": "application/json", 
                    "Authorization": "bearer " + localStorage.getItem("@TokenUser"),
                },
                
                    Body: JSON.stringify({
                        firstname: String, 
                        lastname: String, 
                        email: String,
                        age: Number, 
                        occupation: String, 
                    })
                
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
          }

          return <PutUser/>
         }


export default PutUser;