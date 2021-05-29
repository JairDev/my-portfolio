import * as React from "react";
import { Link } from "gatsby";
import {
  appContentNav,
  appContentNavLinks,
  logoName,
  appNav,
  iconNav,
  backMenuStyle,
  ulContentLinks,
  itemLink,
  liLink,
  show,
  iconClickOpen,
  iconClickClose,
  open
} from "./nav.module.css";
import NavIcon from "../../assets/nav-bar-icon.inline.svg";
import NavIconClose from "../../assets/nav-bar-close.inline.svg";

const Nav = () => {

  let state = false
  const menuStyle = React.useRef(null)
  const iconNavStyle = React.useRef(null)
  const iconClose = React.useRef(null)
  React.useState(() => {
    // console.log(iconClose)
  }, [])

  const handleClick = (e) => {
    state = !state
    if(state) {
      menuStyle.current.classList.add(show)
      // iconClose.current.classList.add(open)
    }else {
      menuStyle.current.classList.remove(show)
    }
    // console.log(state)
    // console.log(spanMenuStyle.current)
  } 

  return (
    <header className={appContentNav}>
      <nav className={appNav}>
        <div className="app-content-nav-logo">
          <div className="app-nav-logo">
            <Link className={logoName} to="/">
              Alfredo Moscoso
            </Link>
          </div>
        </div>
        <div  className={iconNav}>
          <NavIcon className={iconClickOpen} onClick={handleClick}/>
          <NavIconClose className={iconClickClose}/>
        </div>
        <div ref={menuStyle} className={appContentNavLinks}>
          <ul className={ulContentLinks}>
            <li className={liLink}>
              <Link className={itemLink} to="desafios">
                Desafios Frontend
              </Link>
            </li>
            <li className={liLink}>
              <Link className={itemLink} to="trabajos">
                Trabajos Personales
              </Link>
            </li>
            <li className={liLink}>
              <a className={itemLink}>Contacto</a>
            </li>
          </ul>
          <span className={backMenuStyle}></span>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
