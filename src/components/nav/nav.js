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
  open,
  noOpen,
  spanStyleNav,
  parentIconClose,
  parentIconOpen
} from "./nav.module.css";
import NavIcon from "../../assets/nav-bar-icon.inline.svg";
import NavIconClose from "../../assets/nav-bar-close.inline.svg";

const Nav = () => {
  let state = false;
  const menuStyle = React.useRef(null);
  const iconOpenRef = React.useRef(null);
  const iconCloseRef = React.useRef(null);
  React.useEffect(() => {
    return () => {};
  }, []);

  const handleClick = (e) => {
    state = !state;
    if (state) {
      menuStyle.current.classList.add(show);
      iconOpenRef.current.firstChild.classList.add(noOpen)
      iconCloseRef.current.firstChild.classList.add(open)
    } else {
      menuStyle.current.classList.remove(show);
      iconOpenRef.current.firstChild.classList.remove(noOpen)
      iconCloseRef.current.firstChild.classList.remove(open)
    }
  };

  return (
    <header id="nav-hidden" className={appContentNav}>
      <span id="nav-show" className={spanStyleNav}></span>
      <nav className={appNav}>
        <div className="app-content-nav-logo">
          <div className="app-nav-logo">
            <Link className={logoName} to="/">
              Alfredo Moscoso
            </Link>
          </div>
        </div>
        <div onClick={handleClick} className={iconNav}>
          <div ref={iconOpenRef} className={parentIconOpen}>
            <NavIcon
              className={iconClickOpen}
              
            />
          </div>
          <div ref={iconCloseRef} className={parentIconClose}>
            <NavIconClose className={iconClickClose} />
          </div>
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
