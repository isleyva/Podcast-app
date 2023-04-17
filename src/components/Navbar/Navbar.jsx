import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import DataContext from "../../Context/dataContext";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/" className="Navbar_a">
        Podcaster
      </a>
    </div>
  );
}

export default Navbar;
