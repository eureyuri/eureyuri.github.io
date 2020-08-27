import React, { useEffect } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./header.css";

const AnchorListLink = ({link, title}) => (
  <li className="header__links">
    <AnchorLink to={`/#${link}`} title={title} />
  </li>
)

const ListLink = props => (
  <li className="header__links">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header({ headerText }) {
  useEffect(() => {
    function resizeHeaderOnScroll() {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 10;
      const headerLogo = document.getElementsByClassName("header__logo")[0];
      const headerContainer = document.getElementsByClassName("header__container")[0];
      const header = document.querySelector("header");
      const hamburgers = document.querySelectorAll(".hamburger_line");

      if (distanceY > shrinkOn) {
        headerLogo.classList.add("scrolled");
        headerContainer.classList.add("scrolled");
        header.classList.add("scrolled");
        hamburgers.forEach(hamburger => hamburger.classList.add("scrolled"));
      } else {
        headerLogo.classList.remove("scrolled");
        headerContainer.classList.remove("scrolled");
        header.classList.remove("scrolled");
        hamburgers.forEach(hamburger => hamburger.classList.remove("scrolled"));
      }
    }

    window.addEventListener("scroll", resizeHeaderOnScroll);
  }, []);

  return (
    <div className="header__container">
      <header>
        <AnchorLink to="/" title="EN" className="header__logo">
          EN
        </AnchorLink>
        <ul className="header__nav">
          <AnchorListLink link="about" title="About" />
          <AnchorListLink link="projects" title="Projects" />
          <AnchorListLink link="contact" title="Contact" />
          <ListLink to="/about-css-modules/">
            <div className="hamburger">
              <span className="hamburger_line hamburger_line1"></span>
              <span className="hamburger_line hamburger_line2"></span>
              <span className="hamburger_line hamburger_line3"></span>
            </div>
          </ListLink>
        </ul>
      </header>
    </div>

  )
}