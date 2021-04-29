import React from 'react';
import TabGridLayout from "../TabGridLayout"
import Img from "gatsby-image"
import { graphql, StaticQuery } from 'gatsby';

export default function Education() {
    return (
        <StaticQuery
            query={graphql`
                query {
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
                }
            `}
            render={data => (
                <div>
                    <TabGridLayout
                        logo={<Img fluid={data.columbiaImage.childImageSharp.fluid} />}
                        title={"Columbia University"}
                        subtitle={"Computer Engineering, B.S."}
                        description={
                            <>
                                <h6>Relevant Coursework</h6>
                                <h6>- User Interface Design</h6>
                                <h6>- Advanced Software Engineering</h6>
                                <h6>- Developing Accessible User Interfaces</h6>
                                <h6>- Introduction to Databases</h6>
                                <h6>- IoT - Intelligent and Connected Systems</h6>
                                <h6>- Programming Language and Translators</h6>
                                <h6>- Advanced Programming</h6>
                                <h6>- Computer Networks</h6>
                                <h6>- Computer Science Theory</h6>
                                <h6>- Advanced Logic Design</h6>
                                <h6>- Circuit Analysis + Lab</h6>
                                <h6>- Signals and Systems + Lab</h6>
                                <h6>- Electronic Circuits + Lab</h6>
                                <h6>- Fundamentals of Computer Systems + Lab</h6>
                                <h6>- Probability</h6>
                            </>
                        }
                        period={"2019 - 2021"} />

                    <TabGridLayout
                        logo={<Img fluid={data.brandeisImage.childImageSharp.fluid} />}
                        title={"Brandeis University"}
                        subtitle={"Computer Science, B.A."}
                        description={
                            <>
                                <h6>Relevant Coursework</h6>
                                <h6>- Operating Systems</h6>
                                <h6>- Practical Machine Learning</h6>
                                <h6>- Fundamentals of Artificial Intelligence</h6>
                                <h6>- Mobile Application Development</h6>
                                <h6>- Data Structures and Algorithms</h6>
                                <h6>- Differential Equations</h6>
                                <h6>- Multivariable Calculus</h6>
                                <h6>- Discrete Structures</h6>
                                <h6>- Applied Linear Algebra</h6>
                            </>
                        }
                        period={"2016 - 2019"} />

                    <TabGridLayout
                        logo={<Img fluid={data.stmaurImage.childImageSharp.fluid} />}
                        title={"Saint Maur International School"}
                        subtitle={"International Baccalaureate Bilingual Diploma"}
                        description={
                            <>
                                <h6>Higher Level Courses</h6>
                                <h6>- Physics</h6>
                                <h6>- Economics</h6>
                                <h6>- Visual Arts</h6>
                                <h6>- Japanese A</h6>
                                <h6>Standard Level Courses</h6>
                                <h6>- English Performance and Literature</h6>
                                <h6>- Mathematics</h6>
                            </>
                        }
                        period={"2009 - 2016"} />
                </div>
            )}
        />
    )
}
