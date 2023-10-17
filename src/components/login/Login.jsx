// import { Password, RepartitionRounded } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//icon mui
import LockIcon from "@mui/icons-material/Lock";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Login.css";
import SuccessAlert from "../Alerts/SuccesAlert";
import ErrorAlert from "../Alerts/ErrorAlert";
import { Box, TextField, styled, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { teal } from "@mui/material/colors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  // Appelez l'API du serveur pour vérifier si l'identifiant de messagerie donné existe déjà
  const getLogin = async (e) => {
    e.preventDefault();
  // Appelez l'API du serveur pour vérifier si l'identifiant de messagerie donné existe déjà
  const getLogin = async (e) => {
    e.preventDefault();

    // définir les valeurs d'erreur
    setEmailError("");
    setPasswordError("");
    // définir les valeurs d'erreur
    setEmailError("");
    setPasswordError("");

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

    //Appel Api
    try {
      const response = await fetch(
        `https://social-network-api.osc-fr1.scalingo.io/gamer-verse/login`,
        options
      );
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("@TokenUser", data.token);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
          navigate("/");
        }, 2000);
      } else {
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 5000);
        setError(data.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      setError("Une erreur s'est produite lors de la connexion.");
    } // Utilise les données renvoyées par l'API
  };
    //Appel Api
    try {
      const response = await fetch(
        `https://social-network-api.osc-fr1.scalingo.io/gamer-verse/login`,
        options
      );
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("@TokenUser", data.token);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
          navigate("/");
        }, 2000);
      } else {
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 5000);
        setError(data.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      setError("Une erreur s'est produite lors de la connexion.");
    } // Utilise les données renvoyées par l'API
  };

  // Connectez-l'utilisateur en utilisant l'e-mail et le mdp
  // Connectez-l'utilisateur en utilisant l'e-mail et le mdp


  //Couleur button matérial
  const ColorButton = styled(Button)(({ theme }) => ({
   color: theme.palette.getContrastText(teal[500]),
   backgroundColor: teal[500],
   '&:hover': {
     backgroundColor: teal[700],
   },
 }));

  return (
    <>
      <NavBar />
      <SuccessAlert showSuccessAlert={showSuccessAlert} />
      <ErrorAlert showErrorAlert={showErrorAlert} />
      <div className="bigContainer">
        <div className="mainContainer">
          <div className="mario">
            <img src="images\pixel-connectbubble (1).gif" alt="" id="bubble" />
            <img
              src="https://i.pinimg.com/originals/46/53/d8/4653d885a6dd4bff3b6bcea47a8f8d5a.png"
              alt=""
            />
          </div>
          <Box>
            <div className="titleContainer">
              <div>Connexion à votre compte</div>
            </div>
            <div className="inputContainer">
              <PersonOutlineIcon
                fontSize="large"
                sx={{ color: "#ffffff" }}
                className="iconInput"
              />
              <TextField
                type="text"
                onChange={handleInputEmail}
                required
                id="outlined-required"
                label="Pas d'email..pas de connexion!"
                defaultValue=""
                value={email}
                //   sx={{bgcolor: "#90a4ae"}}
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
                type={showPassword ? "text" : "password"}
                onChange={handleInputPassword}
                className="inputBox inputClass"
                placeholder="Par ici ton mdp...!"
              />
              <label className="showPassword">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={() => setShowPassword(!showPassword)}
                />
                Afficher le mot de passe
              </label>

              <label className="errorLabel">{passwordError}</label>
            </div>
            <div className="forgetContainer">
              <div>Mot de passe oublié ?</div>
            </div>
            <div className={"inputContainer"}>
              {/* <input
              className={"inputButton"}
              type="button"
              onClick={getLogin}
              value={"Connexion"}
              id="loginButton"
            /> */}
              <ColorButton
                className={"inputButton"}
                type="button"
                onClick={getLogin}
                value={"Connexion"}
                id="loginButton"
              >
                CONNEXION
              </ColorButton>
            </div>
            <div className="noAccountContainer">
              <div>
                Vous n'avez pas encore de compte ?
                <Link to="/Register">S'inscrire</Link>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
