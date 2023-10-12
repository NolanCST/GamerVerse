import "./Register.css";

function Register(props) {
  return (
    <div className="main">
      <div className="container">
        <div className="cont"></div>
        <div className="form">
          <form method="POST" id="form">
            <h2>S'INSCRIRE</h2>
            <br />
            <div className="section">
              <input
                type="text"
                className="input"
                name="lastname"
                id="name"
                placeholder="Nom"
              />
            </div>
            <div className="section">
              <input
                type="text"
                className="input"
                name="firstname"
                id="name"
                placeholder="Prénom"
              />
            </div>
            <div className="section">
              <input
                type="email"
                className="input"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="section">
              <input
                type="password"
                className="input"
                name="password"
                id="password"
                placeholder="Mot de passe"
              />
            </div>
            <div className="section">
              <input type="checkbox" name="terms" id="terms" />
              <label for="agree-term" className="labelTerms">
                <span>
                  <span></span>
                </span>
                J'accepte les{" "}
                <a href="#" className="termLink">
                  termes et conditions
                </a>
                d'utilisation générales
              </label>
            </div>
            <br />
            <div className="section">
              <button className="submit">S'INSCRIRE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
