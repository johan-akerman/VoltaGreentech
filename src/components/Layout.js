import React from "react"
import Header from "./header/navbar/Navbar"
import Footer from "./footer/Footer"
import Seo from "../components/Seo"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      ogImage: file(relativePath: { eq: "production.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Seo />
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}
