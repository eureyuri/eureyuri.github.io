import React from 'react'
import TabGridLayout from "../TabGridLayout";
import Img from "gatsby-image";

export default function Extracurricular({ mangaImage, digitalImage }) {
    return (
        <div>
            <TabGridLayout
                logo={<Img fluid={mangaImage} style={{borderRadius: "15px"}} />}
                title={"Manga Artist"}
                subtitle={"Runs and maintains Web Manga website"}
                description={
                    <>
                        <h6>- Published approximately 140 pages of comic</h6>
                        <h6>- Slowly updating!</h6>
                        <h6>- HUION Kamvas Pro 16</h6>
                        <h6>- MadiBangPaint Pro</h6>
                        <h6>- GIMP</h6>
                    </>
                }
                period={"2010 - Present"} />

            <TabGridLayout
                logo={<Img fluid={digitalImage} style={{borderRadius: "15px"}} />}
                title={"Digital Artist"}
                description={
                    <>
                        <h6>- Created 3:30 min video of walking people</h6>
                        <h6>- Draws in personal time</h6>
                    </>
                }
                period={"2012 - Present"} />

        </div>
    )
}
