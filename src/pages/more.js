import React, { useState } from "react";
import Layout from "../components/Layout";
import HalfCover from "../components/halfCover";
import Container from "../components/container";

export default function More({ data }) {
  const [tab, setTab] = useState("Background");

  return (
    <div>
      <Layout>
        <HalfCover coverImage={data.coverImage.childImageSharp.fluid}
          setTab={setTab} />

        <div id="about" style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative", marginTop: "-0.5rem"}}>
          <Container header={tab}>
            <div className="index__container">
              <div className="index__left">
              </div>
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

              </div>
            </div>
          </Container>
        </div>


      </Layout>
    </div>

  )
}

export const query = graphql`
  query {
    coverImage: file(relativePath: { eq: "cover4.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;