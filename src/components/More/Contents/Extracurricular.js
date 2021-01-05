import React from 'react'
import TabGridLayout from "../TabGridLayout";
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';

export default function Extracurricular() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    jsaImage: file(relativePath: { eq: "jsa.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 200) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                    }
                    baseballImage: file(relativePath: { eq: "baseball.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 200) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    tohokuImage: file(relativePath: { eq: "tohoku.jpg" }) {
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
                          <Img fluid={data.jsaImage.childImageSharp.fluid}
                               style={{borderRadius: "15px"}}
                               alt="Group photo of Brandeis Japanese Student Association at annual festival J-SAI 2019. Eurey is at the center posing."
                          />
                        }
                        title={"Brandeis Japanese Student Association"}
                        subtitle={"President (2018-2019), Vice President (2017-2018), Freshman Representative (2016-2017)"}
                        description={
                            <>
                                <h6>- Improved event attendance by 300% through extensive use of SNS, personal communication, and new events</h6>
                                <h6>- Managed club funds of approximately $10,000</h6>
                                <h6>- Reorganized club structure and increased the number of board members</h6>
                                <h6>- Improved communication within board members by being inclusive and checking in daily</h6>
                                <h6>- Focused on traditional as well as modern Japanese culture</h6>
                                <h6>- Planned, managed, and held first ever culture show, J-SAI</h6>
                                <h6>- Other new events include: Natsumatsuri (Summer Festival), TEA: Taste of East Asia, Oshogatsu (Japanese New Year), Japanese Valentine's Day, Traditional Japanese Art and Culture Event, and Onigiri x Gimbap Night.</h6>
                                <h6>- Collaborated with multiple cultural clubs including Asian American, South East Asian, Cantonese, Chinese, Korean, and Taiwanese student associations, and Archery club. </h6>
                            </>
                        }
                        period={"2016 - 2019"} />

                    <TabGridLayout
                        logo={
                          <Img
                            fluid={data.baseballImage.childImageSharp.fluid}
                            style={{borderRadius: "15px"}}
                            alt="Middle school Eurey pitching."
                          />
                        }
                        title={"Baseball Coach at Regional Baseball Club"}
                        description={
                            <>
                                <h6>- Coached at regional baseball team for elemetary school students that I used to be a part of</h6>
                                <h6>- Worked with the head coach to organize practice</h6>
                            </>
                        }
                        period={"2014 - 2016"} />

                    <TabGridLayout
                        logo={
                          <Img fluid={data.tohokuImage.childImageSharp.fluid}
                               style={{borderRadius: "15px"}}
                               alt="Devastated Tohoku region after the earthquake and tsunami."
                          />
                        }
                        title={"Volunteering at Tohoku, Japan after the Great East Japan Earthquake"}
                        subtitle={"Human Security Program, University of Tokyo"}
                        description={
                            <>
                                <h6>- Interacted with elementary school children who had lost their homes due to the earthquake.</h6>
                                <h6>- Fundraised at University of Tokyo for the victims.</h6>
                            </>
                        }
                        period={"2012"} />
                </div>
            )}
        />
    )
}
