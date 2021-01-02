import React from "react";
import "./container.css";

export default function Container({ header, size="", children }) {
  return (
    <div className={`container${size}`}>
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