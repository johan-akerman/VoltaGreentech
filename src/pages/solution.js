/* Importing essentials */
import React from "react"

/* Importing components */
import Jumbotron from "../components/jumbotron/Jumbotron"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import IconColumnContainer from "../components/columns/IconColumnContainer"
import Quote from "../components/quote/Quote"
import FAQ from "../components/FAQ/FAQ"
import Grid from "../components/grid/Grid"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import backgroundImage from "../../static/images/solution.jpeg"
import asparagopsis from "../../static/images/asparagopsis.png"
import seaweed from "../../static/images/heroImages/seaweed.jpg"

export default function Solution() {
  return (
    <Layout>
      <Jumbotron
        image={seaweed}
        title="Straight out of the bottom of the ocean."
        page="solution"
      />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Our solution"
          chapterTitle="A fully natural seaweed-based feed supplement for cows"
          text="Volta Seafeed is a feed supplement which when fed to cows at a daily dose of 100 grams reduces methane emissions by up to 80%. The feed is based on a mix of red seaweeds and include natural bioactive compounds that block one of the enzymes that microbial methanogens in the rumen use to produce methane."
          image={backgroundImage}
          caption="A cows daily dose of Volta Seafeed"
        />

        <Quote
          text="If cattle were a country, they would rank third in greenhouse gas emissions."
          person="Bill Gates"
        />

        <Grid
          positionLeft={true}
          image={asparagopsis}
          lowerLevelHeader="Seaweed"
          chapterTitle="About asparagopsis taxiformis"
          text="Asparagopsis is a _____, _____ and _____. It was originally discovered at ____ and after years of research at ____, ____, ____ scientists came to the conclusion that the seaweed could reduce cows methane emissions up to ____. The seaweed have never been produced at scale. So the team over at Volta are working on developing a scalable production on land."
          link="About our production"
          href="/solution/"
          caption="Asparagopsis taxiformis growing in the lab"
        />
        <IconColumnContainer
          lowerLevelHeader="How it works"
          chapterTitle="It's not magic. It's science."
          text=" Volta Seafeed is a feed supplement which when fed to cows at a daily
        dose of 100 grams reduces methane emissions by up to 80%"
        />

        <FAQ
          q1="Is the seaweed harmful for the cow?"
          a1="No. Rather, studies show that the seaweed has positive effects on the cow’s health, wellbeing and life expectancy."
          q2="Does it really work? "
          a2="Answer"
          q3="Where does the methane go?"
          a3="Answer"
          q4="Do the cows like the Seafeed?"
          a4="Answer"
        />
      </div>
    </Layout>
  )
}
