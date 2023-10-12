import { useState } from "react";
import "./Register.css";

function Register() {
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChangeLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleInputChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleInputChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    const options = {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      Body: JSON.stringify({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      }),
    };
    console.log("TEST");
    const response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/gamer-verse/register`,
      options
    );
    console.log(response);
    let data = await response.json();
    alert("Vous avez bien créé votre compte");
    console.log(data);
  };

  return (
    <div className="mainRegister">
      <img
        src="https://media.discordapp.net/attachments/1154418633741709372/1162003370727460864/soldat.png?ex=653a5af8&is=6527e5f8&hm=8613018b16e6c80345fb2d5eb26c832bd4d048249468887cbc63932bff9dfc84&=&width=918&height=516"
        alt=""
        id="soldier"
      />
      <div className="subRegister">
        <div className="cont"></div>
        <div className="registerForm">
          <form method="POST" id="form">
            <h2>S'INSCRIRE</h2>
            <br />
            <div className="section">
              <input
                onChange={handleInputChangeLastname}
                type="text"
                className="input"
                name="lastname"
                id="lastname"
                placeholder="Nom"
              />
            </div>
            <div className="section">
              <input
                onChange={handleInputChangeFirstname}
                type="text"
                className="input"
                name="firstname"
                id="firstname"
                placeholder="Prénom"
              />
            </div>
            <div className="section">
              <input
                onChange={handleInputChangeEmail}
                type="email"
                className="input"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="section">
              <input
                onChange={handleInputChangePassword}
                type="password"
                className="input"
                name="password"
                id="password"
                placeholder="Mot de passe"
              />
            </div>
            <div className="section">
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
  );
}

export default Register;
