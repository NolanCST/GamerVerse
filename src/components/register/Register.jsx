import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";

function Register() {
   const [password, setPassword] = useState("");
   const [lastname, setLastname] = useState("");
   const [firstname, setFirstname] = useState("");
   const [email, setEmail] = useState("");
   const navigate = useNavigate();

   const handleRegister = async (e) => {
      e.preventDefault();

      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
         }),
      };
      console.log("option", options);

      //Appel Api
      await fetch(`https://social-network-api.osc-fr1.scalingo.io/serial-viewer/register`, options)
         .then((response) => response.json()) // Récupère la réponse au format JSON
         .then((data) => {
            if (data.success) {
               navigate("/");
            } else {
               alert(data.message);
            }
         }); // Utilise les données renvoyées par l'API
   };

   return (
      <>
         <NavBar />
         <div className="mainRegister">
            <img
               src="https://media.discordapp.net/attachments/1154418633741709372/1162003370727460864/soldat.png?ex=653a5af8&is=6527e5f8&hm=8613018b16e6c80345fb2d5eb26c832bd4d048249468887cbc63932bff9dfc84&=&width=918&height=516"
               alt=""
               id="soldier"
            />
            <div className="subRegister">
               <div className="cont"></div>
               <div className="registerForm">
                  <form method="POST" id="registerForm">
                     <h2 id="registerH2">S'INSCRIRE</h2>
                     <br />
                     <div className="registerSection">
                        <input onChange={(e) => setLastname(e.target.value)} type="text" className="registerInput" name="lastname" id="lastname" placeholder="Nom" />
                     </div>
                     <div className="registerSection">
                        <input onChange={(e) => setFirstname(e.target.value)} type="text" className="registerInput" name="firstname" id="firstname" placeholder="Prénom" />
                     </div>
                     <div className="registerSection">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="registerInput" name="email" id="email" placeholder="Email" />
                     </div>
                     <div className="registerSection">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="registerInput" name="password" id="password" placeholder="Mot de passe" />
                     </div>
                     <div className="registerSection">
                        <label className="checkbox">
                           <input type="checkbox" name="terms" id="terms" />
                           <span className="checkmark"></span>
                        </label>
                        <label htmlFor="agree-term" className="labelTerms">
                           J'accepte les{" "}
                           <a href="#" className="termLink">
                              Termes et Conditions {""}
                           </a>
                           d'utilisation générales
                        </label>
                     </div>
                     <br />
                     <div className="section">
                        <button onClick={handleRegister} className="submit">
                           S'INSCRIRE
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}

export default Register;
