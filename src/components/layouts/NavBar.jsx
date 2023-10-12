import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Aller à l'accueil</Link>
        </nav>
        <nav>
          <Link to="/PlaySation">PlaySation</Link>
        </nav>
        <nav>
          <Link to="/Xbox">Xbox</Link>
        </nav>
        <nav>
          <Link to="/Switch">Switch</Link>
        </nav>
        <nav>
          <Link to="/Computer">Computer</Link>
        </nav>
        <nav>
          <Link to="/Register">Sign Up</Link>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
