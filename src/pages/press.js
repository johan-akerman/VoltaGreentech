/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import CardContainer from "../components/pressCard/CardContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"
import FeaturedIn from "../components/featuredIn/FeaturedIn"
import NewsContainer from "../components/newsContainer/NewsContainer"

/* Importing styling */
import Layout from "../components/Layout"

export default function Press() {
  const data = useStaticQuery(graphql`
    query {
      jumbotron: file(relativePath: { eq: "team/nyhetsmorgon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      lome_cow: file(relativePath: { eq: "lome-cow.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Jumbotron
        jumbotronBackground={data.jumbotron.childImageSharp.fluid}
        page="press"
      />
      <div className="layoutContainer">
        <FeaturedIn />
        <Grid
          positionLeft={true}
          image={data.lome_cow.childImageSharp.fluid}
          chapterTitle="Press contact and press kit"
          text="For press inquires, contact press@voltagreentech.com. In our press kit you can find a collection of assets for our product, production, team and logos."
          link="Download press kit"
          href="https://drive.google.com/drive/folders/1FfrjtBbEdGrWRS5iDzVNIklcPEH21b_y?usp=sharing"
        />

        <CardContainer />
        <NewsContainer />
      </div>
    </Layout>
  )
}
