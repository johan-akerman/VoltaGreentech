import React from "react"
import Layout from "../components/Layout"
import Jumbotron from "../components/jumbotron/Jumbotron"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import IconColumnContainer from "../components/columns/IconColumnContainer"

import HalfCard from "../components/halfCard/HalfCard"
import FAQ from "../components/FAQ/FAQ"
import backgroundImage from "../../static/solution.jpeg"
import image from "../../static/articles/solution.png"

export default function Solution() {
  return (
    <Layout>
      <Jumbotron image={backgroundImage} />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Our solution"
          chapterTitle="A fully natural seaweed-based feed supplement for cows"
          text="Volta Seafeed is a feed supplement which when fed to cows at a daily dose of 100 grams reduces methane emissions by up to 80%. The feed is based on a mix of red seaweeds and include natural bioactive compounds that block one of the enzymes that microbial methanogens in the rumen use to produce methane."
          image={backgroundImage}
          caption="A cows daily dose of Volta Seafeed (100g)"
        />
        <IconColumnContainer
          lowerLevelHeader="How it works"
          chapterTitle="It's not magic. It's science."
          text=" Volta Seafeed is a feed supplement which when fed to cows at a daily
        dose of 100 grams reduces methane emissions by up to 80%"
        />

        <FAQ />
      </div>
    </Layout>
  )
}
