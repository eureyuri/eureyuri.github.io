import React from "react";
import { Link } from "gatsby";
import "./index.css";
import Header from "../components/header";
import Cover from "../components/cover";
import Container from "../components/container";
import Tools from "../components/tools";

export default function Home() {
  return (
    <div>
      <Header />
      <Cover />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
        <polygon class="svg--lg" fill="white" points="0,65 10,100 15,100 35,40 72,100 85,100 100,35 100,100 0,100" />
      </svg>

      <div style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center"}}>
        <Container header="About Me">
          <div className="index__container">
            <div className="index__left">Image will go here</div>
            <div className="index__right">
              <p className="index__text">
                I am a senior at Columbia University majoring in Computer Engineering seeking opportunities to work in the U.S.
              </p>
              <p className="index__text">
                I am a full stack developer with a passion for <span className="highlight">web development</span> and <span className="highlight">design</span>. Recently, I have been working on the front-end with React.
              </p>
              <p className="index__text">
                My life is all about app development for social impact, design, video, and music!
              </p>

              <Tools />

            </div>
          </div>
        </Container>
      </div>

      <div style={{background: "#F8F8F8", display: "flex", flexDirection:"column", justifyContent: "center"}}>
        <Container header="Projects">
          Some Content
        </Container>
      </div>

      <div style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center"}}>
        <Container header="Contact">
          Contact Me
        </Container>
      </div>

    </div>
  )
}
