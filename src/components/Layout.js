import React from "react"
import Header from "./header/navbar/Navbar"
import Footer from "./footer/Footer"
import Seo from "../components/Seo"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Seo />
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}
