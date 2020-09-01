import React from "react";
import Layout from "../components/Layout";
import Cover from "../components/cover";

export default function More({ data }) {

  return (
    <div>
      <Layout>
        AAA
      </Layout>

    </div>

  )
}

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