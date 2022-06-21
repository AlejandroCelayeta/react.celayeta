import React from "react";
import { Link } from "react-router-dom";
import "./subnavbar.css";

const SubNavbar = () => {
  return (
    <nav>
      <div className="menu-navbar">
        <ul id="nav">
          <li>
            <Link  to="/home"  className="lnk">
              Inicio
            </Link>
          </li>
          <li>
            <Link to='/categoria/actionscript' categoria={"actionscript"} className="lnk">
              ActionScript
            </Link>
          </li>
          <li>
            <Link  to="/categoria/apache"  className="lnk">
              Apache
            </Link>
          </li>
          <li>
            <Link to="/categoria/devapps" className="lnk">
              DevApps
            </Link>
          </li>
          <li>
            <Link to="/categoria/java" className="lnk">
              Java
            </Link>
          </li>
          <li>
            <Link to="/categoria/php" className="lnk">
              PHP
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SubNavbar;
