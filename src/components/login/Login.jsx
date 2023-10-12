import { Password, RepartitionRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//icon mui
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const onButtonClick = () => {
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

    if (password.length < 7) {
      setPasswordError("Le mot de passe doit comporter 8 caractères ou plus");
    }
  };

  // Vérifier si l'email à un compte associé à celui-ci

  // // Dans l'affirmative, connectez-le
  // if (condition) {
  //   Login();
  // } else {
  //   //sinon, demandez à l'utilisateur s'il souhaite créer un nouveau compte et si oui, connectez-le
  //   if (
  //     window.confirm(
  //       `Un compte n'existe pas avec cette adresse e-mail : ${email}. \n Voulez-vous créer un nouveau compte ?`
  //     )
  //   ) {
  //     Login();
  //   }
  // }

  // Appelez l'API du serveur pour vérifier si l'identifiant de messagerie donné existe déjà

  // Connectez-l'utilisateur en utilisant l'e-mail et le mdp

  return (
    <>
      <div className="mainContainer">
        <div className="titleContainer">
          <div>Connexion à votre compte</div>
        </div>
        <div className="inputContainer">
          <PersonOutlineIcon
            fontSize="large"
            sx={{ color: "#ffffff" }}
            className="iconInput"
          />
          <input
            value={email}
            type="text"
            onChange={handleInputEmail}
            className="inputBox inputClass"
            placeholder="Pas d'email..pas de connexion!"
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <div className="inputContainer">
          <LockIcon
            fontSize="large"
            sx={{ color: "#ffffff" }}
            className="iconInput"
          />
          <input
            id="loginPassword"
            value={password}
            type="password"
            onChange={handleInputPassword}
            className="inputBox inputClass"
            placeholder="Par ici ton mdp...!"
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <div className="forgetContainer">
          <div>Mot de passe oublié ?</div>
        </div>
        <div className={"inputContainer"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Connexion"}
            id="loginButton"
          />
        </div>
        <div className="noAccountContainer">
          <div>
            Vous n'avez pas encore de compte ? <span>S'inscrire</span>
          </div>
        </div>
      </div>
    </>
  );
}
