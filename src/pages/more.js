import React, { useState } from "react";
import Layout from "../components/Layout";
import HalfCover from "../components/halfCover";
import Container from "../components/container";
import Background from "../components/More/Background";
import Interests from "../components/More/Interests";

export default function More({ data }) {
  const [tab, setTab] = useState("Background");

  return (
    <div>
      <Layout>
        <HalfCover coverImage={data.coverImage.childImageSharp.fluid}
          setTab={setTab} />

        <div id="about" style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative", marginTop: "-0.5rem"}}>
          <Container header={tab}>
            {tab === "Background" && (
              <Background
                columbiaImage={data.columbiaImage.childImageSharp.fluid}
                brandeisImage={data.brandeisImage.childImageSharp.fluid}
                stmaurImage={data.stmaurImage.childImageSharp.fluid}
                micronImage={data.micronImage.childImageSharp.fluid}
                niImage={data.niImage.childImageSharp.fluid}
                teamLabImage={data.teamLabImage.childImageSharp.fluid}
                influImage={data.influImage.childImageSharp.fluid} />
            )}
            {tab === "Interests" && (
              <Interests />
            )}
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
    columbiaImage: file(relativePath: { eq: "columbia.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    brandeisImage: file(relativePath: { eq: "brandeis.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stmaurImage: file(relativePath: { eq: "stmaur.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    micronImage: file(relativePath: { eq: "micron.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    niImage: file(relativePath: { eq: "ni.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    teamLabImage: file(relativePath: { eq: "teamLab.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    influImage: file(relativePath: { eq: "influ.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;