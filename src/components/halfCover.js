import React from 'react'
import Img from "gatsby-image"

import "./halfCover.css";

export default function HalfCover({ coverImage }) {
    return (
        <div className="halfcover">
            <Img
                fluid={coverImage}
                style={{
                    position: "absolute",
                    width: "100vw",
                    maxHeight: "70vh",
                    right: "0"
                }}
                objectFit="cover"
            />
            More About Eurey
        </div>
    )
}
