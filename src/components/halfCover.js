import React from 'react'
import Img from "gatsby-image"
import "./halfCover.css";

export default function HalfCover({ coverImage, blogImage, setTab, title, subtitle }) {
    return (
        <div className="halfcover">
            {coverImage && (
                <Img
                    fluid={coverImage}
                    style={{
                        position: "absolute",
                        width: "100vw",
                        minWidth: "100vw",
                        minHeight: "70vh",
                        right: "0",
                        zIndex: "-1",
                    }}
                    objectFit="cover"
                    alt="A summer festival in Japan"
                />
            )}
            {blogImage && (
                <img 
                    src={blogImage}
                    style={{
                      position: "absolute",
                      width: "100vw",
                      minWidth: "100vw",
                      right: "0",
                      zIndex: "-1",
                    }}
                    alt={"Fireworks seen in Hamamatsu Japan from a cruise"}
                />
            )}
            <div className="halfcover__text">
                <h1 className="halfcover__text__title">{title}</h1>
                <p>{subtitle}</p>
                {setTab && (
                    <div className="halfcover__text__links">
                        <h3 className="halfcover__text__link"
                            onClick={() => setTab("Background")}>Background</h3>
                        <h3 className="halfcover__text__link"
                            onClick={() => setTab("Interests")}>Interests</h3>
                    </div>
                )}
            </div>
        </div>
    )
}
