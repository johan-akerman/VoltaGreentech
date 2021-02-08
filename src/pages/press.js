/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import CardContainer from "../components/pressCard/CardContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import Newsletter from "../components/newsletter/index.js"
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

      leo_and_angelo: file(relativePath: { eq: "team/leo_and_angelo.jpeg" }) {
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
          image={data.leo_and_angelo.childImageSharp.fluid}
          chapterTitle="Press contact and press kit"
          text="For press inquires, contact Leo Wezelius, Co- founder & CMO, at leo@voltagreentech.com. In our press kit you can find a collection of assets for our product, production, team and logos."
          link="Download press kit"
          caption="Leo & Angelo"
          href="/solution/"
        />

        <CardContainer />
        <NewsContainer />
        <Newsletter />
      </div>
    </Layout>
  )
}
