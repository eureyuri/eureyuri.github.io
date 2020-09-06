import React from 'react'
import TabGridLayout from "../TabGridLayout";

export default function Extracurricular() {
    return (
        <div>
            <TabGridLayout
                logo={
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/PlLBLpd_eSw" style={{display:"block", width:"100%",transform:"scale(0.7)", borderRadius:"15px"}} allowfullscreen></iframe>
                    </div>
                }
                title={"Video Production"}
                subtitle={"Runs YouTube channel (link in footer)"}
                description={
                    <>
                        <h6>- Runs and maintains the YouTube Channel</h6>
                        <h6>- Writes script and organizes shooting schedule</h6>
                        <h6>- Davinci Resolve 16</h6>
                    </>
                }
                period={"2012 - Present"} />
        </div>
    )
}
