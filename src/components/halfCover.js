import React from 'react'
import Img from "gatsby-image"
import "./halfCover.css";
import { useDispatch } from "react-redux"
import { BACKGROUND, INTERESTS } from "../utils/constants"
import { setMoreTab } from "../actions"

export default function HalfCover({ coverImage, blogImage, tab, title, subtitle }) {
  const dispatch = useDispatch();

  const setTab = (title) => {
    if (title === BACKGROUND) {
      dispatch(setMoreTab(BACKGROUND, ''));
    } else if (title === INTERESTS) {
      dispatch(setMoreTab(INTERESTS, ''));
    }
  }

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
                { subtitle && (
                  <p>{subtitle}</p>
                )}
                {tab && (
                    <div className="halfcover__text__links">
                        <button className="halfcover__text__links__button"
                            onClick={() => setTab(BACKGROUND)}
                            onKeyDown={() => setTab(BACKGROUND)}>{ BACKGROUND }</button>
                        <button className="halfcover__text__links__button"
                            onClick={() => setTab(INTERESTS)}
                            onKeyDown={() => setTab(INTERESTS)}>{ INTERESTS }</button>
                    </div>
                )}
            </div>
        </div>
    )
}
