import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import DataContext from "../../Context/dataContext";

function Navbar() {
  const { loading } = useContext(DataContext);

  return (
    <div className="Navbar">
      <a href="/" className="Navbar_a">
        Podcaster
      </a>
      {loading && <span className="loader"></span>}
    </div>
  );
}

export default Navbar;
