import React from "react";
import { Link } from "gatsby";
import "./index.css";
import Header from "../components/header";
import Cover from "../components/cover";
import Container from "../components/container";
import Tools from "../components/tools";
import Button from "@material-ui/core/Button";
import SNSButtons from "../components/SNSButtons";

export default function Home() {
  const buttonStyle = {
    position:"fixed",
    bottom: "0",
    zIndex: 5,
    right: "0",
    paddingRight: "0.8rem",
    paddingBottom: "1rem",
    color: "#0075FF"
  }

  return (
    <div>
      <Header />
      <Cover />
      <svg className="home__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
        <polygon class="svg--lg" fill="white" points="0,65 10,100 15,100 35,40 72,100 85,100 100,35 100,100 0,100" />
      </svg>

      <SNSButtons buttonStyle={buttonStyle}/>

      <div style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative"}}>
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

              <div className="index__buttons">
                <Button
                  className="resume_button"
                  variant="contained"
                  disableElevation
                  onClick={() => { alert('clicked') }}>Resume</Button>
                <Button
                  className="more_button"
                  variant="outlined"
                  disableElevation
                  onClick={() => { alert('clicked') }}>More About Me</Button>
              </div>

            </div>
          </div>
        </Container>
      </div>

      <div style={{background: "#F8F8F8", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative"}}>
        <Container header="Projects">
          Some Content
        </Container>
      </div>

      <div style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative"}}>
        <Container header="Contact">
          <p>Contact me for inquiries, personal websites, illustrations, designs, or for anything!</p>
          <a href="mailto: eureynoguchi@gmail.com" target="_blank">
            <p className="contact__email">eureynoguchi@gmail.com</p>
          </a>
        </Container>
        <p className="copyright">&copy; Eurey Noguchi 2020</p>
      </div>

    </div>
  )
}
