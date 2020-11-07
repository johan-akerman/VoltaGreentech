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
import brilliantMinds from "../../static/images/brilliantMinds.gif"
import production from "../../static/images/heroImages/production.png"
import graph2 from "../../static/images/illustrations/graph_2.png"

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
          video={true}
          lowerLevelHeader="Who we are"
          chapterTitle="A team of innovators committed to change"
          text="At first glance we might seem like a Swedish greentech company that reduces emissions from the meat & dairy industry. But we are more than that. We are a team of innovators from different nationalities committed to bringing climate innovations to the market to create real impact. Many solutions to help battle climate change are already out there, what we need is humans who are ready to do whatever it takes to implement them and bring them to market at scale. So, we rolled up our sleeves and launched Volta Greentech; a tech company by heart, run by humans dedicating their actions and their love for technology to saving and preserving our only home; planet earth."
          image={brilliantMinds}
          caption="Volta Greentech explained at Brilliant Minds 2019"
        />

        <Grid
          positionLeft={true}
          image={graph2}
          lowerLevelHeader="Our mission"
          chapterTitle="REDUCE METHANE EMISSIONS FROM COWS"
          text="There are 1.5 billion cows on the planet that together burp out 5% of the world’s greenhouse gas emissions. That’s 2x more emissions than the world’s fleet of airplanes."
          text2="Volta Greentech is on a mission to work with the beef and dairy industry to reduce emissions to mitigate global warming. By providing farmers with the means to drastically reduce the methane emissions produced by dairy cows and beef cattle, the agriculture sector can take a massive leap in going sustainable."
          link="our solution"
          href="/solution/"
        />

        <Quote
          text="If cattle were a country, they would rank third in greenhouse gas emissions."
          person="Bill Gates"
        />
        <br />

        <Grid
          image={solution}
          lowerLevelHeader="The volta mindset"
          chapterTitle="SIMPLE MEANS, MASSIVE IMPACT"
          text="Any challenge, no matter how big it is, can be broken down and simplified into small and manageable pieces. With this mindset, we can take on any challenge, no matter how big it is. That is how we create massive impact. One cow at a time. That is why every product sold, every farmer and every cow is of greatest importance for the overarching mission of battling global warming. Today we focus on 5% of the world’s greenhouse gas emissions in the form of enteric methane (farts and burps from cows). Tomorrow it might be something else. If you think like us, join us on the way to a future with net zero emissions."
          caption="A cows daily dose of Volta Seafeed"
        />

        <ValueColumnContainer />

        <TeamContainer />
        <JobsContainer />
      </div>
    </Layout>
  )
}
