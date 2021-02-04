import React from "react"
import Header from "./header/navbar/Navbar"
import Footer from "./footer/Footer"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}
