import { Link } from "gatsby";
import * as React from "react";
import Nav from "../nav/nav";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import "../../styles/variables.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <Nav/>
      {children}
    </main>
  );
};
export default Layout;
