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
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  // Constante erreur
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [ageError, setAgeError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if ("" === email) {
      setEmailError("Veuillez entrer votre email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Veuillez entrer un email valide");
      return;
    }

    if ("" === password) {
      setPasswordError("Veuillez entrer un mot de passe");
      return;
    }

    if ("" === firstname) {
      setFirstnameError("Veuillez entrer un prénom");
      return;
    }

    if ("" === lastname) {
      setLastnameError("Veuillez entrer un nom");
      return;
    }

    if ("" === age) {
      setAgeError("Veuillez entrer un âge");
      return;
    }

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
        age: age,
      }),
    };

    //Appel Api
    await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/gamer-verse/register`,
      options
    )
      .then((response) => response.json()) // Récupère la réponse au format JSON
      .then((data) => {
        if (data.success) {
          navigate("/login");
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
                     <h2 id="registerH2">INSCRIPTION</h2>
                     <br />
                     <div className="registerSection">
                        <input onChange={(e) => setLastname(e.target.value)} type="text" className="registerInput" name="lastname" id="lastname" placeholder="Nom" />
                        <label className="errorLabel">{lastnameError}</label>
                     </div>
                     <div className="registerSection">
                        <input onChange={(e) => setFirstname(e.target.value)} type="text" className="registerInput" name="firstname" id="firstname" placeholder="Prénom" />
                        <label className="errorLabel">{firstnameError}</label>
                     </div>
                     <div className="registerSection">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="registerInput" name="email" id="email" placeholder="Email" />
                        <label className="errorLabel">{emailError}</label>
                     </div>
                     <div className="registerSection">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="registerInput" name="password" id="password" placeholder="Mot de passe" />
                        <label className="errorLabel">{passwordError}</label>
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
