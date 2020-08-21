import React from "react"
import Layout from "../components/Layout"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import heroImage from "../../static/press.jpeg"

import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"
import typography from "../components/typography.module.css"
import solution from "../../static/solution.svg"
import Quote from "../components/quote/Quote"
import production from "../../static/production.png"

import NewsContainer from "../components/jobsContainer/NewsContainer"

export default function About() {
  return (
    <Layout>
      <Jumbotron image={heroImage} />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Who we are"
          chapterTitle="A team of innovators committed to change"
          text="Some may call us a swedish greentech company that reduce emissions
          from the meat & dairy industry. But we are more than that. We are a
          team of innovators who take climate inventions to the market. We are a
          tech company by heart and all we do is for the planet."
          image={production}
          caption="Image caption goes here"
        />

        <br />
        <br />
        <br />
        <br />
        <Quote
          text="We’re not up against the insurance companies of the world. We’re up against people’s fear of loss."
          person="Lucas Carlsén, CEO & Co-foundeR"
        />
        <br />

        <Grid
          positionLeft={true}
          image={solution}
          lowerLevelHeader="Our mission"
          chapterTitle="Reduce methane emissions from cows"
          text="There are 1.5 billion cows on the planet that together burp out 5% of the world’s greenhouse gas emissions. That’s 2x more emissions than the world’s fleet of airplanes. Volta Greentech is on a mission to work with the beef and dairy industry to reduce emissions to mitigate global warming. By providing farmers with the means to drastically reduce the methane emissions produced by dairy cows and beef cattle, the agriculture sector can take a massive leap in going sustainable."
          l
          caption="A cows daily dose of Volta Seafeed (100g)"
        />

        <h2 className={typography.lowerLevelHeader}>Our investors</h2>
        <h1 className={typography.chapterTitle}>We are in good company</h1>
        <p>
          We are very fortunate to not only have a good team of people, but also
          a great team of investors. Ranging from Peter Carlsson, the founder of
          Northvolt, to Claes Dinkelspiel, Märta Beijer Foundation and several
          angel investors.
        </p>

        <br />
        <br />
        <br />

        <NewsContainer />
      </div>
    </Layout>
  )
}
