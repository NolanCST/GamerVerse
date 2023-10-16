import { useState } from "react";

function PutUser() {

   const [user,setUser] = useState([]);
   const [newInfo,setNewInfo] = useState('');
    
   const handleInputChange = (e) => {
      setNewInfo(e.target.value)
   }

   const editInfo = (updatedInfo, index) =>{
      
      const updateInfo = [...user];

      updateInfo[index] = updatedInfo;

      setNewInfo(updateInfo);
   }

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
            
                const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/gamer-verse/profil?limit=20", options);
                
                   const data = await response.json();

                   console.log(data);

                   setUser(data);

          }

          return (
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
            </div>

            <div className="password">
                <input type="password" name="passewordChange" className="Mdp" placeholder="Mot de passe"/>
                <label htmlFor="checkbox">
                <input type="checkbox" className="checkbox" />
                Afficher le mot de passe
                </label>
            </div>

            <button className="switchMdp">Valider</button>
        </div>
          )
         }


export default PutUser;