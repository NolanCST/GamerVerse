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
    alert("Vous avez bien créer votre compte");
    console.log(data);
  };

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
