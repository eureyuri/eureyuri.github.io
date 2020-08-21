import React from "react"
import Container from "../components/container"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div>
        <Header />
        <Container>
            {children}
        </Container>
    </div>
  )
}