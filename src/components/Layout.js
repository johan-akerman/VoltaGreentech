import React from "react"
import Header from "./header/navbar/Navbar"
import Footer from "./footer/Footer"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          property="og:image"
          content="www.voltagreentech.com/solution.jpeg"
        />
      </Helmet>
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}
