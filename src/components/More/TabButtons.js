import React from 'react';
import Button from "@material-ui/core/Button";

import "./TabButtons.css";

export default function TabButtons({ button, setButton, labels }) {
    return (
        <div style={{width:"100%", display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            {
                labels.map((label, i) => {
                    if (button === i) {
                        return (<Button
                            className="tabButtons__active"
                            variant="contained"
                            disableElevation>{label}
                        </Button>)
                    }
                    return (<Button
                        className="tabButtons"
                        variant="outlined"
                        disableElevation
                        onClick={() => { setButton(i) }}>{label}
                    </Button>)
                })
            }

        </div>
    )
}
