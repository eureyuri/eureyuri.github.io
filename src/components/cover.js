import React from 'react'
import "./cover.css";
import SNSButtons from "./SNSButtons";

export default function cover() {
    return (
        <div className="cover">
            <div className="cover__left"></div>
            <div className="cover__right">
                <div className="cover__text">
                    <h1>Eurey Noguchi</h1>
                    <h2>Designing <span className="cover__emphasis">Innovation</span></h2>
                    <SNSButtons />
                </div>
            </div>
        </div>
    )
}
