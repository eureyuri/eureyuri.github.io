import React from 'react'
import TabGridLayout from '../TabGridLayout'
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';

export default function Work() {
    return (
        <StaticQuery
            query={graphql`
                query {
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
            `}
            render={data => (
                <div>
                    <TabGridLayout
                        logo={
                          <Img fluid={data.micronImage.childImageSharp.fluid}
                               alt="Logo of Micron"
                          />
                        }
                        title={"Micron Memory Japan"}
                        subtitle={"Failure Analysis Intern"}
                        description={
                            <>
                                <h6>- Investigated memory failures in DRAM that were returned from customers</h6>
                                <h6>- Reproduced failures to check if the problem was reocurring</h6>
                                <h6>- Rigorously tested DRAM in different environments</h6>
                            </>
                        }
                        period={"June 2019"} />

                    <TabGridLayout
                        logo={
                          <Img fluid={data.niImage.childImageSharp.fluid}
                          alt="Logo of National Instruments"/>
                        }
                        title={"National Instruments Japan"}
                        subtitle={"Software and Hardware Engineer Intern"}
                        description={
                            <>
                                <h6>- Developed a product to showcase company's strength in career forums</h6>
                                <h6>- Software side was handled by NI's LabView and its Vision module to display the company profile as well as games that introduced and mimicked few of their products</h6>
                                <h6>- Hardware side was made with Lego Mindstorms and ultrasonic sensor to create a robot arm that accepts resumes and drops them off at a designated box</h6>
                                <h6>
                                    - Live demonstration can be found
                                    <a href="https://drive.google.com/file/d/1U59FKCH5oq283TpZ-8DgekAybgqeowgW/view?usp=sharing" target="_blank" style={{color: "#0075FF"}}> here</a>
                                </h6>
                            </>
                        }
                        period={"July 2018"} />

                    <TabGridLayout
                        logo={
                          <Img fluid={data.teamLabImage.childImageSharp.fluid}
                                alt="Logo of teamLab"
                          />
                        }
                        title={"teamLab Inc."}
                        subtitle={"Data Scientist at Machine Learning Team"}
                        description={
                            <>
                                <h6>- Analysis of customer data to be used in the recommendation system</h6>
                                <h6>- Used PostgreSQL, Python, and Shell script to investigate user flow, user interaction, and user information</h6>
                                <h6>- Proposed new index to increase click through rate and the conversion rate for each of the websites</h6>
                            </>
                        }
                        period={"May 2018 - June 2018"} />

                    <TabGridLayout
                        logo={
                          <Img fluid={data.influImage.childImageSharp.fluid}
                                alt="Logo of influ"
                          />
                        }
                        title={"influ Inc."}
                        subtitle={"Software Engineer Intern"}
                        description={
                            <>
                                <h6>- Worked on web applications for digital stamp rally and digital invitation card system</h6>
                                <h6>- Used Python with Flask, HTML, CSS, JavaScript to work on both frontend and backend</h6>
                                <h6>- Wrote the entire unit test and integration test for the databse of the digital stamp rally application</h6>
                            </>
                        }
                        period={"May 2017 - July 2017"} />
                </div>
            )}
        />
    )
}
