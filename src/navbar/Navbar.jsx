import "./navbar.css";
import starFill from "../assets/icons/star-fill.svg";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Pet Adoption
          </a>
          <Link to="adoptions"> <img
            className="nav-icon"
            alt="site logo"
            width="25px"
            src={starFill}
          /></Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
