/* Importing essentials */
import React from "react"

/* Importing components */
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import TeamContainer from "../components/team/TeamContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"
import Quote from "../components/quote/Quote"
import JobsContainer from "../components/jobsContainer/JobsContainer"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import solution from "../../static/images/solution.svg"
import production from "../../static/images/heroImages/production.png"
import flask from "../../static/images/Culture_flask.jpeg"

export default function About() {
  return (
    <Layout>
      <Jumbotron
        image={production}
        title="A TEAM OF INNOVATORS COMMITTED TO CHANGE."
        page="about"
      />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Who we are"
          chapterTitle="A swedish greentech company"
          text="Some may call us a swedish greentech company that reduce emissions
          from the meat & dairy industry. But we are more than that. We are a
          team of innovators who take climate inventions to the market. We are a
          tech company by heart and all we do is for the planet."
          image={flask}
          caption="Image caption goes here"
        />

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
          caption="A cows daily dose of Volta Seafeed"
        />

        <TeamContainer />
        <JobsContainer />
      </div>
    </Layout>
  )
}
