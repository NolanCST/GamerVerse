import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

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
      await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/register`, options)
         .then((response) => response.json()) // Récupère la réponse au format JSON
         .then((data) => {
            if (data.success) {
               navigate("/");
            } else {
               alert(data.message);
            }
         }); // Utilise les données renvoyées par l'API
   };

   //  const handleRegister = async (e) => {
   // try {
   //    const options = {
   //       method: "POST",
   //       headers: {
   //          "Content-Type": "application/json",
   //       },
   //       body: JSON.stringify({
   //          email,
   //          password,
   //          firstname,
   //          lastname,
   //       }),
   //    };

   //    const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/register`, options);

   //    if (response.ok) {
   //       const data = await response.json();
   //       // Affichez un message de succès ou redirigez l'utilisateur vers une page de confirmation.
   //       console.log(data);
   //    } else {
   //       // Gérez les erreurs de manière appropriée, par exemple, affichez un message d'erreur à l'utilisateur.
   //       console.error("Échec de l'inscription");
   //    }
   // } catch (error) {
   //    console.error("Une erreur inattendue s'est produite :", error);
   // }
   //  };

   return (
      <div className="main">
         <img
            src="https://media.discordapp.net/attachments/1154418633741709372/1161959191959842937/306cf9b308a4e88f022b2cc0180197ad.png?ex=653a31d3&is=6527bcd3&hm=78c8c85dd4e94bfc8c04d2835e3031478248a3b7c0a199a89c53f2f7e6fd5435&=&width=918&height=516"
            alt=""
            className="soldier"
         />
         <div className="container">
            <div className="cont"></div>
            <div className="form">
               <form method="POST" id="form">
                  <h2>S'INSCRIRE</h2>
                  <br />
                  <div className="section">
                     <input onChange={(e) => setLastname(e.target.value)} type="text" className="inputRegister" name="lastname" id="lastname" placeholder="Nom" />
                  </div>
                  <div className="section">
                     <input onChange={(e) => setFirstname(e.target.value)} type="text" className="inputRegister" name="firstname" id="firstname" placeholder="Prénom" />
                  </div>
                  <div className="section">
                     <input onChange={(e) => setEmail(e.target.value)} type="email" className="inputRegister" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="section">
                     <input onChange={(e) => setPassword(e.target.value)} type="password" className="inputRegister" name="password" id="password" placeholder="Mot de passe" />
                  </div>
                  <div className="section">
                     <label className="checkbox">
                        <input type="checkbox" name="terms" id="terms" />
                        <span className="checkmark"></span>
                     </label>
                     <label htmlFor="agree-term" className="labelTerms">
                        J'accepte les
                        <a href="#" className="termLink">
                           Termes et Conditions
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
   );
}

export default Register;
