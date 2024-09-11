import "./navbar.css";
import starFill from "../assets/icons/star-fill.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Pet Adoption
        </a>
        <a href="myPets.html">
          <img
            className="nav-icon"
            alt="site logo"
            width="25px"
            src={starFill}
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
