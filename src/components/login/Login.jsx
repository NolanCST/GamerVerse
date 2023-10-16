// import { Password, RepartitionRounded } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//icon mui
import LockIcon from "@mui/icons-material/Lock";
import NavBar from "../layouts/NavBar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Login.css";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const [error, setError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const handleInputEmail = (e) => {
      setEmail(e.target.value);
   };

   const handleInputPassword = (e) => {
      setPassword(e.target.value);
   };

   // Appelez l'API du serveur pour vérifier si l'identifiant de messagerie donné existe déjà
   const getLogin = async (e) => {
      e.preventDefault();

      // définir les valeurs d'erreur
      setEmailError("");
      setPasswordError("");

      //vérifier si l'utilisateur a correctement saisi les 2 champs
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

      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email: email,
            password: password,
         }),
      };
      console.log("option", options);

      //Appel Api
      try {
         const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/login`, options);
         console.log("response:", response);
         const data = await response.json();
         console.log(data);
         if (data.success) {
            localStorage.setItem("@TokenUser", data.token);
            navigate("/"); // Rediriger l'utilisateur vers la page d'accueil après la connexion réussie
         } else {
            setError(data.message || "Une erreur s'est produite.");
         }
      } catch (error) {
         setError("Une erreur s'est produite lors de la connexion.");
      } // Utilise les données renvoyées par l'API
   };

   // Connectez-l'utilisateur en utilisant l'e-mail et le mdp

   return (
      <>
         <NavBar />
         <div className="mainContainer">
            <div className="titleContainer">
               <div>Connexion à votre compte</div>
            </div>
            <div className="inputContainer">
               <PersonOutlineIcon fontSize="large" sx={{ color: "#ffffff" }} className="iconInput" />
               <input value={email} type="text" onChange={handleInputEmail} className="inputBox inputClass" placeholder="Pas d'email..pas de connexion!" />
               <label className="errorLabel">{emailError}</label>
            </div>
            <div className="inputContainer">
               <LockIcon fontSize="large" sx={{ color: "#ffffff" }} className="iconInput" />
               <input id="loginPassword" value={password} type={showPassword ? "text": "password"} onChange={handleInputPassword} className="inputBox inputClass" placeholder="Par ici ton mdp...!" />
               <label htmlFor="checkbox">
               <input type="checkbox" className="checkbox" onClick={() => setShowPassword(!showPassword)} />
               Afficher le mot de passe
               </label>
               <label className="errorLabel">{passwordError}</label>
            </div>
            <div className="forgetContainer">
               <div>Mot de passe oublié ?</div>
            </div>
            <div className={"inputContainer"}>
               <input className={"inputButton"} type="button" onClick={getLogin} value={"Connexion"} id="loginButton" />
            </div>
            <div className="noAccountContainer">
               <div>
                  Vous n'avez pas encore de compte ?<Link to="/Register">S'inscrire</Link>
               </div>
            </div>
         </div>
      </>
   );
}
