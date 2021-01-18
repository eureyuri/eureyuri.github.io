import React, { useState } from "react";
import Layout from "../components/layout";
import HalfCover from "../components/halfCover";
import Container from "../components/container";
import Background from "../components/More/Background";
import Interests from "../components/More/Interests";
import { graphql } from "gatsby"
import { useSelector } from 'react-redux';
import { BACKGROUND, INTERESTS } from "../utils/constants"

export default function More({ data }) {
  const tab = useSelector(state => state.moreTab.top);

  return (
    <div>
      <Layout>
        <HalfCover
          title={"More About Eurey"}
          subtitle={"Space for showcasing my creative side"}
          coverImage={data.coverImage.childImageSharp.fluid}
          tab={true} />

        <div id="about" style={{background: "white", display: "flex", flexDirection:"column", justifyContent: "center", zIndex: "2", position: "relative", marginTop: "-0.5rem"}}>
          <Container header={tab} size='small'>
            {tab === BACKGROUND && (
              <Background />
            )}
            {tab === INTERESTS && (
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
  }
`;