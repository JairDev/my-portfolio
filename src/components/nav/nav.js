import * as React from "react";
import { Link } from "gatsby";
import {
  appContentNav,
  appContentNavLinks,
} from "./nav.module.css"

const Nav = () => {
  return (
    <header className={appContentNav}>
      <nav className="app-nav">
        <div className="app-content-nav-logo">
          <div className="app-nav-logo">
            <Link to="/">Alfredo Moscoso</Link>
          </div>
        </div>
        <div className={appContentNavLinks}>
          <ul className="ul-content-links">
            <li className="nav-link">
              <Link to="desafios">Desafios Frontend</Link>
            </li>
            <li className="nav-link">
              <Link to="trabajos">Trabajos Personales</Link>
            </li>
            <li className="nav-link">Contacto</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
