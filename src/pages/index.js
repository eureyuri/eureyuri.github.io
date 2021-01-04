import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import "./index.css";
import Cover from "../components/cover";
import Container from "../components/container";
import Tools from "../components/tools";
import Button from "@material-ui/core/Button";
import ContainedTabs from "../components/ContainedTabs";
import { ThemeProvider } from "@material-ui/core";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { materialFontTheme } from "../utils/materialTheme";
import Head from "../utils/Head";
import CustomizedTimeline from "../components/CustomizedTimeline";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home({ data }) {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  })

  return (
    <div>
      <Head />

      <Layout>
        <Cover coverImage={data.coverImage.childImageSharp.fluid} />

        <svg className="home__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon className="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
          <polygon className="svg--lg" fill="white" points="0,65 10,100 15,100 35,40 72,100 85,100 100,35 100,100 0,100" />
        </svg>

        <div id="about" style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative", marginTop: "-0.5rem"}}>
          <Container header="About Me">
            <div className="index__container">
              <div className="index__left" data-aos="fade-right">
                <Img
                  fluid={data.aboutImage.childImageSharp.fluid}
                />
              </div>
              <div className="index__right">
                <p className="index__text index__text__first">
                  I am a senior at Columbia University majoring in Computer Engineering seeking opportunities to work in the U.S.
                </p>
                <p className="index__text">
                  I am a full stack developer with a passion for <span className="highlight">web development</span> and <span className="highlight">design</span>. Recently, I have been working on the front-end with React.
                </p>
                <p className="index__text">
                  My life is all about app development for social impact, design, video, and music!
                </p>

                <div data-aos="fade-in">
                  <Tools />
                </div>


                <div className="index__buttons">
                  <Button
                    className="resume_button"
                    variant="contained"
                    disableElevation
                    onClick={() => { window.open("https://drive.google.com/file/d/1_TtgR3HEABau-rBxm2rdvUe7dTN5yFeT/view?usp=sharing", '_blank') }}>Resume</Button>
                  <Link to="/more/">
                    <Button
                      className="more_button"
                      variant="outlined"
                      disableElevation>More About Me</Button>
                  </Link>
                </div>

              </div>
            </div>
          </Container>
        </div>

        <div id="experiences" style={{background: "#F8F8F8", display: "block", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative", overflowY: "scroll", height: "500px"}}>
          <Container header="Experiences">
            <ThemeProvider theme={materialFontTheme}>
              <CustomizedTimeline />
            </ThemeProvider>
          </Container>
        </div>

        <div id="projects" style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative"}}>
          <Container header="Projects">
            <ThemeProvider theme={materialFontTheme}>
              <ContainedTabs
                tabs={[
                  { label: "All" },
                  { label: "Design"},
                  { label: "Web" },
                  { label: "Mobile" },
                  { label: "CLI" },
                ]}
                value={tabIndex}
                onChange={(e, i) => setTabIndex(i)}
              />
            </ThemeProvider>
          </Container>
        </div>

        <div id="contact" style={{background: "#F8F8F8", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative"}}>
          <Container header="Contact">
            <p>Contact me for inquiries, personal websites, illustrations, designs, or for anything!</p>
            <a href="mailto: eureynoguchi@gmail.com" target="_blank" rel="noreferrer nofollow">
              <p className="contact__email">eureynoguchi@gmail.com</p>
            </a>
          </Container>
          <p className="copyright">&copy; Eurey Noguchi 2020</p>
        </div>
      </Layout>
    </div>
  )
};

export const query = graphql`
  query {
    coverImage: file(relativePath: { eq: "cover.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    aboutImage: file(relativePath: { eq: "eurey_nobg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;
