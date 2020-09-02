import React from 'react'
import Img from "gatsby-image"

import "./halfCover.css";
import { useState } from 'react';

export default function HalfCover({ coverImage, setTab }) {
    return (
        <div className="halfcover">
            <Img
                fluid={coverImage}
                style={{
                    position: "absolute",
                    width: "100vw",
                    minWidth: "100vw",
                    maxHeight: "70vh",
                    right: "0",
                    zIndex: "-1",
                }}
                objectFit="cover"
            />
            <div className="halfcover__text">
                <h1 className="halfcover__text__title">More About Eurey</h1>
                <p>Space for showcasing my creative side</p>
                <div className="halfcover__text__links">
                    <h3 className="halfcover__text__link"
                        onClick={() => setTab("Background")}>Background</h3>
                    <h3 className="halfcover__text__link"
                        onClick={() => setTab("Interests")}>Interests</h3>
                    <h3 className="halfcover__text__link"
                        onClick={() => setTab("Blog")}>Blog</h3>
                </div>
            </div>
        </div>
    )
}