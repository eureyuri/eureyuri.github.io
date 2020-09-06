import React from 'react'
import TabGridLayout from "../TabGridLayout";
import Img from "gatsby-image";

export default function Extracurricular({ trumpetImage, pianoImage, guitarImage, producingImage }) {
    return (
        <div>
            <TabGridLayout
                logo={<Img fluid={trumpetImage} style={{borderRadius: "15px"}} />}
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
                logo={<Img fluid={pianoImage} style={{borderRadius: "15px"}} />}
                title={"Piano"}
                subtitle={"Trinity Exam Grade 5"}
                description={
                    <>
                        <h6>- Sadly not being played too often :(</h6>
                    </>
                }
                period={"2001 - Present"} />

            <TabGridLayout
                logo={<Img fluid={guitarImage} style={{borderRadius: "15px"}} />}
                title={"Acoustic Guitar"}
                subtitle={"Beginner"}
                description={
                    <>
                        <h6>- Just started :)</h6>
                    </>
                }
                period={"2020 - Present"} />

            <TabGridLayout
                logo={<Img fluid={producingImage} style={{borderRadius: "15px"}} />}
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
    )
}
