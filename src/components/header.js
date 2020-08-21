import React, { useEffect } from "react";
import { Link } from "gatsby";

import "./header.css";

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
        <Link to="/" className="header__logo">
          EN
        </Link>
        <ul className="header__nav">
          <ListLink to="/">About</ListLink>
          <ListLink to="/more/">Projects</ListLink>
          <ListLink to="/about-css-modules/">Contact</ListLink>
          <ListLink to="/about-css-modules/">
            <div class="hamburger">
              <span class="hamburger_line hamburger_line1"></span>
              <span class="hamburger_line hamburger_line2"></span>
              <span class="hamburger_line hamburger_line3"></span>
            </div>
          </ListLink>
        </ul>
      </header>
    </div>

  )
}