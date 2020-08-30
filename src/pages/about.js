/* Importing essentials */
import React from "react"

/* Importing components */
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import TeamContainer from "../components/team/TeamContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"
import Quote from "../components/quote/Quote"
import JobsContainer from "../components/jobsContainer/JobsContainer"
import ValueColumnContainer from "../components/values/ValueColumnContainer"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import solution from "../../static/images/solution.svg"
import production from "../../static/images/heroImages/production.png"
import graph2 from "../../static/images/illustrations/graph_2.png"
import brilliantMinds from "../../static/images/brilliantMinds.png"

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
          image={brilliantMinds}
          caption="Volta Greentech presented at Brilliant Minds 2019"
        />

        <Grid
          positionLeft={true}
          image={graph2}
          lowerLevelHeader="Our mission"
          chapterTitle="REDUCE METHANE EMISSIONS FROM COWS"
          text="There are 1.5 billion cows on the planet that together burp out 5% of the world’s greenhouse gas emissions. That’s 2x more emissions than the world’s fleet of airplanes."
          text2="Volta Greentech is on a mission to work with the beef and dairy industry to reduce emissions to mitigate global warming. By providing farmers with the means to drastically reduce the methane emissions produced by dairy cows and beef cattle, the agriculture sector can take a massive leap in going sustainable."
          caption="Illustation based on Gates notes"
        />
        <Quote
          text="If cattle were a country, they would rank third in greenhouse gas emissions."
          person="Bill Gates"
        />
        <br />

        <Grid
          image={solution}
          lowerLevelHeader="Our capabilities"
          chapterTitle="SOLUTIONS REDUCING METHANE EMISSIONS WHERE IT HAS STRONG & INSTANT IMPACT"
          text="We take on one of the biggest challenges of our time and break it into smaller chunks. That’s how we have an instant impact. Today we focus on methane emissions. Each cow transformed to a Volta Greentech cow, implicates less methane. That is why every sold product, every farmer and every cow is of greatest importance for battling global warming. "
          caption="A cows daily dose of Volta Seafeed"
        />

        <ValueColumnContainer />

        <TeamContainer />
        <JobsContainer />
      </div>
    </Layout>
  )
}
