import React from "react"
import Header from "./navbar/Header"
import Footer from "./footer/Footer"
import InfoBar from "./infoBar/InfoBar.js"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <InfoBar />
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}
