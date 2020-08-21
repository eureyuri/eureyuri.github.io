import React from "react"
import { Link } from "gatsby"
import "./index.css";
import Header from "../components/header";
import Cover from "../components/cover";

export default function Home() {
  return (
    <div>
      <Header />
      <Cover />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
          <polygon class="svg--lg" fill="white" points="0,65 10,100 15,100 35,40 72,100 85,100 100,35 100,100 0,100" />
      </svg>
      <div style={{background: "white", color:"black", display: "flex", flexDirection:"column"}}>
        <h1 style={{color:"black"}}>Hello</h1>
        <h1 style={{color:"black"}}>Hello</h1>
        <h1 style={{color:"black"}}>Hello</h1>
        <h1 style={{color:"black"}}>Hello</h1>
        <h1 style={{color:"black"}}>Hello</h1>
        <h1 style={{color:"black"}}>Hello</h1>
        <h1 style={{color:"black"}}>Hello</h1>
        <h1 style={{color:"black"}}>Hello</h1>
        <h1 style={{color:"black"}}>Hello</h1>
        <h1 style={{color:"black"}}>Hello</h1>
      </div>

    </div>
  )
}
