import * as React from "react";
// import { Link } from "gatsby";
// import LocomotiveScroll from "locomotive-scroll";

import Nav from "../nav/nav";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import "../../styles/variables.css";

const Layout = ({ pageTitle, children }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    // console.log(containerRef);
    // const scroll = new locomotiveScroll();
    // console.log(scroll)
  }, []);
  return (
    <main ref={containerRef} className={container} id="container">
      <title>{pageTitle}</title>
      <Nav />
      {children}
    </main>
  );
};
export default Layout;
