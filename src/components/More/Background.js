import React, { useState } from 'react';
import TabButtons from "./TabButtons";
import TabContainer from "./TabContainer";
import Education from './Education';
import Work from './Work';
import Img from "gatsby-image";

export default function Background({ columbiaImage, brandeisImage, stmaurImage }) {
    const [button, setButton] = useState(0);

    return (
        <div style={{width: "100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
            <TabButtons button={button} setButton={setButton} labels={["Education", "Work Experience"]}/>
            <TabContainer>
                {button === 0 && (
                    <Education columbiaImage={columbiaImage} brandeisImage={brandeisImage} stmaurImage={stmaurImage} />
                )}
                {button === 1 && (
                    <Work />
                )}
            </TabContainer>

        </div>
    )
}
