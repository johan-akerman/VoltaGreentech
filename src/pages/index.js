/* Importing essentials */
import React from "react"

/* Importing components */
import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import CardContainer from "../components/pressCard/CardContainer"
import OurMission from "../components/OurMission"
import Newsletter from "../components/newsletter/index"
import FeaturedIn from "../components/featuredIn/FeaturedIn"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import backgroundImage from "../../static/images/heroImages/volta_bg.gif"
import solution from "../../static/images/solution.svg"
import factory from "../../static/images/factory_01_concept.jpg"

export default function Home() {
  return (
    <Layout>
      <Jumbotron image={backgroundImage} fullScreen="true" page="home" />
      <div className="layoutContainer">
        <FeaturedIn />
        <OurMission />

        <Grid
          positionLeft={true}
          image={solution}
          lowerLevelHeader="Solution"
          chapterTitle="A fully natural seaweed-based feed supplement for cows"
          text="Volta Seafeed is a feed supplement which when fed to cows at a daily dose of 100 grams reduces methane emissions by up to 80%. The feed is based on a mix of red seaweeds and include natural bioactive compounds that block one of the enzymes that microbial methanogens in the rumen use to produce methane."
          text2="This eliminates the majority of the methane gas the cow burp out and unlock more energy in the form of hydrogen and carbon, that previously was used to produce the unwanted byproduct methane."
          link="Read more"
          href="/solution/"
          caption="A cows daily dose of Volta Seafeed"
        />

        <CenteredTextAndImage
          lowerLevelHeader="Production"
          chapterTitle="Volta Factory 01"
          text="Volta Greentech is developing a scalable, sustainable and automated land based seaweed cultivation system - tailored for the selected species of seaweed that are key ingredients in Volta Seafeed. Land based systems enables optimization of temperature, light and nutrients to maximize the growth rate of the seaweed, while ensuring a high and standardised quality of the feed supplement."
          image={factory}
          caption="Concept visualization of Volta Factory 01"
          link="Read more"
          href="/production/"
        />

        <CardContainer />
        <Newsletter />
      </div>
    </Layout>
  )
}
