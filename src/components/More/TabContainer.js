import React from 'react'

export default function TabContainer({ children }) {
    return (
        <div style={{borderStyle: "solid", borderColor: "#EDEAEA", width: "100%", borderRadius: "7px", borderWidth: "2px", marginTop: "1rem", padding: "2rem", paddingRight: "3rem", paddingLeft: "3rem"}}>
            {children}
        </div>
    )
}
