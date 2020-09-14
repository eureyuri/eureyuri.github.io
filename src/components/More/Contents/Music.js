import React from 'react'
import TabGridLayout from "../TabGridLayout";
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';

export default function Extracurricular() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    trumpetImage: file(relativePath: { eq: "trumpet.jpg" }) {
                        childImageSharp {
                        fluid(maxWidth: 200) {
                            ...GatsbyImageSharpFluid
                        }
                        }
                    }
                    pianoImage: file(relativePath: { eq: "piano.png" }) {
                        childImageSharp {
                        fluid(maxWidth: 200) {
                            ...GatsbyImageSharpFluid
                        }
                        }
                    }
                    guitarImage: file(relativePath: { eq: "guitar.jpg" }) {
                        childImageSharp {
                        fluid(maxWidth: 200) {
                            ...GatsbyImageSharpFluid
                        }
                        }
                    }
                    producingImage: file(relativePath: { eq: "producing.jpg" }) {
                        childImageSharp {
                        fluid(maxWidth: 200) {
                            ...GatsbyImageSharpFluid
                        }
                        }
                    }
                }
            `}
            render={data => (
                <div>
                    <TabGridLayout
                        logo={<Img fluid={data.trumpetImage.childImageSharp.fluid} style={{borderRadius: "15px"}} />}
                        title={"Trumpet"}
                        subtitle={"Trinity Exam Grade 8"}
                        description={
                            <>
                                <h6>- Selected as the first trumpet for the Kanto Plains Honor Band</h6>
                                <h6>- Selected for the Kanto Plains Honor Orchestra</h6>
                                <h6>- Played in Brandeis jazz band</h6>
                                <h6>- Played in high school jazz band, jazz combo, concert band, and rock band</h6>
                                <h6>- Helped founding the first jazz combo in high school</h6>
                            </>
                        }
                        period={"2009 - Present"} />

                    <TabGridLayout
                        logo={<Img fluid={data.pianoImage.childImageSharp.fluid} style={{borderRadius: "15px"}} />}
                        title={"Piano"}
                        subtitle={"Trinity Exam Grade 5"}
                        description={
                            <>
                                <h6>- Sadly not being played too often :(</h6>
                            </>
                        }
                        period={"2001 - Present"} />

                    <TabGridLayout
                        logo={<Img fluid={data.guitarImage.childImageSharp.fluid} style={{borderRadius: "15px"}} />}
                        title={"Acoustic Guitar"}
                        subtitle={"Beginner"}
                        description={
                            <>
                                <h6>- Just started :)</h6>
                            </>
                        }
                        period={"2020 - Present"} />

                    <TabGridLayout
                        logo={<Img fluid={data.producingImage.childImageSharp.fluid} style={{borderRadius: "15px"}} />}
                        title={"Music Production"}
                        subtitle={"Beginner"}
                        description={
                            <>
                                <h6>- Native Instruments Komplete Kontrol M32</h6>
                                <h6>- Logic Pro X</h6>
                            </>
                        }
                        period={"2020 - Present"} />
                </div>
            )}
        />
    )
}
