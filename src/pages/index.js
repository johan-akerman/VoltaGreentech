import React from "react"
import Layout from "../components/Layout"
import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import CardContainer from "../components/pressCard/CardContainer"
import solution from "../../static/solution.svg"
import milk from "../../static/milk.png"
import backgroundImage from "../../static/volta_bg.gif"
import OurMission from "../components/OurMission"
import factory from "../../static/factory_01_concept.jpg"
import graph from "../../static/illustrations/chart.png"

import Newsletter from "../components/newsletter/index.js"
export default function Home() {
  return (
    <Layout>
      <Jumbotron
        title="We're busy battling global warming."
        image={backgroundImage}
        fullScreen="true"
      />
      <div className="layoutContainer">
        <OurMission />

        <Grid
          positionLeft={true}
          image={solution}
          lowerLevelHeader="Solution"
          chapterTitle="A fully natural seaweed-based feed supplement for cows"
          text="Volta Seafeed is a feed supplement which when fed to cows at a daily dose of 100 grams reduces methane emissions by up to 80%. The feed is based on a mix of red seaweeds and include natural bioactive compounds that block one of the enzymes that microbial methanogens in the rumen use to produce methane. This eliminates the majority of the methane gas the cow burp out and unlock more energy in the form of hydrogen and carbon, that previously was used to produce the unwanted byproduct methane."
          link="Read more"
          href="/solution/"
          caption="A cows daily dose of Volta Seafeed (100g)"
        />
        <Grid
          positionLeft={false}
          image={milk}
          lowerLevelHeader="Our first consumer product"
          chapterTitle="Planetmjölk: swedish milk, reimagined."
          text="Planetmjölk är precis som vilken mellanmjölk som helst, förutom en viktig skillnad: det har möjliggjort att metanustläppen från en liter mjölk har minskats med upp till 80%. När du väljer Planetmjölk möjliggör du en ljusare framtid. Bli en del av förändringen. Letar du efter närmsta återförsäljare?"
          link="Read more"
          href="/product/"
          caption="Planetmjölk: the same milk, better for the planet"
        />

        <CenteredTextAndImage
          lowerLevelHeader="Production"
          chapterTitle="Volta Factory 01"
          text="Volta Greentech is developing a scalable, sustainable and automated land based seaweed cultivation system - tailored for the selected species of seaweed that are key ingredients in Volta Seafeed. Land based systems enables optimization of temperature, light and nutrients to maximize the growth rate of the seaweed, while ensuring a high and standardised quality of the feed supplement."
          image={factory}
          caption="Concept visualization of Volta Factory 01"
        />

        <CardContainer />
        <Newsletter />
      </div>
    </Layout>
  )
}
