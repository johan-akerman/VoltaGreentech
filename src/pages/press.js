/* Importing essentials */
import React from "react"

/* Importing components */
import CardContainer from "../components/pressCard/CardContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import Newsletter from "../components/newsletter/index.js"
import Grid from "../components/grid/Grid"
import FeaturedIn from "../components/featuredIn/FeaturedIn"
import NewsContainer from "../components/newsContainer/NewsContainer"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import heroImage from "../../static/images/heroImages/press.png"
import leoAndAngelo from "../../static/images/team/leo_and_angelo.jpeg"

export default function Press() {
  return (
    <Layout>
      <Jumbotron image={heroImage} page="press" />
      <div className="layoutContainer">
        <FeaturedIn />
        <Grid
          positionLeft={true}
          image={leoAndAngelo}
          chapterTitle="Press contact and press kit"
          text="For press inquires, contact Leo Wezelius, Co- founder & CMO, at leo@voltagreentech.com. In our press kit you can find a collection of assets for our product, production, team and logos. "
          link="Download press kit"
          caption="Leo & Angelo on stage"
          href="/solution/"
        />

        <CardContainer />
        <NewsContainer />
        <Newsletter />
      </div>
    </Layout>
  )
}