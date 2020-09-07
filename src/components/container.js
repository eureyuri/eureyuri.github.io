import React from "react";
import "./container.css";

export default function Container({ header, children }) {
  return (
    <div className="container">
      {header && (
        <>
          <h1 className="container__header">{header}</h1>
          <hr></hr>
        </>
      )}
      {children}
    </div>
  )
}