import React, { useState } from 'react';
import TabButtons from "./TabButtons";

export default function Background() {
    const [button, setButton] = useState(0);

    return (
        <div style={{width: "100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
            <TabButtons button={button} setButton={setButton} labels={["Education", "Work Experience"]}/>
            {button === 0 && (
                "Education"
            )}
            {button === 1 && (
                "Work"
            )}
        </div>
    )
}
