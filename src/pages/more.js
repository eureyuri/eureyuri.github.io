import React from "react";
import Layout from "../components/Layout";
import HalfCover from "../components/halfCover"

export default function More({ data }) {

  return (
    <div>
      <Layout>
        <HalfCover coverImage={data.coverImage.childImageSharp.fluid} />
      </Layout>
    </div>

  )
}

export const query = graphql`
  query {
    coverImage: file(relativePath: { eq: "cover2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;