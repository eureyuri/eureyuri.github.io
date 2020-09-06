import React, { useState } from 'react';
import TabButtons from "./TabButtons";
import TabContainer from "./TabContainer";
import Extracurricular from './Contents/Extracurricular';
import Music from './Contents/Music';
import Drawing from './Contents/Drawing';
import Video from './Contents/Video';

export default function Background({ jsaImage, baseballImage, tohokuImage, trumpetImage, pianoImage, guitarImage, producingImage, mangaImage, digitalImage }) {
    const [button, setButton] = useState(0);

    return (
        <div style={{width: "100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
            <TabButtons button={button} setButton={setButton} labels={["Extracurricular", "Music", "Drawing", "Video"]}/>
            <TabContainer>
                {button === 0 && (
                    <Extracurricular jsaImage={jsaImage} baseballImage={baseballImage} tohokuImage={tohokuImage} />
                )}
                {button === 1 && (
                    <Music trumpetImage={trumpetImage} pianoImage={pianoImage} guitarImage={guitarImage} producingImage={producingImage}/>
                )}
                {button === 2 && (
                    <Drawing mangaImage={mangaImage} digitalImage={digitalImage} />
                )}
                {button === 3 && (
                    <Video />
                )}
            </TabContainer>

        </div>
    )
}
