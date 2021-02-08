/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import TeamContainer from "../components/team/TeamContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"
import Quote from "../components/quote/Quote"
import JobsContainer from "../components/jobsContainer/JobsContainer"
import IconColumnContainer from "../components/iconColumns/IconColumnContainer"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import brilliantMinds from "../../src/images/team/brilliantMinds.gif"

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      jumbotron: file(relativePath: { eq: "production.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      highlights: file(relativePath: { eq: "team/highlights.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      chart: file(
        relativePath: { eq: "graphs/ifCattleWereACountry_alt_2.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconOne: file(relativePath: { eq: "illustrations/lightBulb.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconTwo: file(relativePath: { eq: "illustrations/lightning.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconThree: file(relativePath: { eq: "illustrations/heart.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconFour: file(relativePath: { eq: "illustrations/star.png" }) {
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
        page="about"
      />
      <div className="layoutContainer">
        <CenteredTextAndImage
          video={true}
          lowerLevelHeader="Who we are"
          chapterTitle="Humans commited to change"
          text="On the surface we are a Swedish greentech company on a mission to reduce methane emissions from the worlds cows. Below the surface we are more than that. We are a growing team of innovators from over seven nationalities who all share a committment and passion to use our personal gifts and skills to bring climate innovations to the market at scale and create real measurable impact. Many solutions to help battle climate change are already out there – what we need is humans who are ready to do whatever it takes to implement them at scale. So, we rolled up our sleeves and founded Volta Greentech; a tech company by heart, run by humans dedicating their actions and their love for technology to saving and preserving our only home, planet earth."
          image={brilliantMinds}
          caption="Volta Greentech explained at Brilliant Minds 2019"
        />

        <Quote
          text="If cattle were a country, they would rank third in greenhouse gas emissions."
          person="Bill Gates"
        />

        <Grid
          positionLeft={true}
          image={data.chart.childImageSharp.fluid}
          lowerLevelHeader="Our mission"
          chapterTitle="REDUCE METHANE EMISSIONS FROM COWS"
          text="There are around 1 billion cows on planet earth. Together they produce over 4% of the world’s greenhouse gas emissions, just by farting and burping methane gas. That’s 2x more emissions than the world’s fleet of airplanes."
          text2="Volta Greentech is on a mission to reduce these emissions to mitigate global warming. By providing farmers with a fully natural seaweed based feed supplement to drastically reduce the methane emissions produced by dairy cows and beef cattle, the agriculture sector can take a massive leap in going sustainable."
          link="our solution"
          href="/solution/"
        />

        <Grid
          image={data.highlights.childImageSharp.fluid}
          lowerLevelHeader="The volta mindset"
          chapterTitle="SIMPLE MEANS, MASSIVE IMPACT"
          text="We know from experience that any challenge, no matter how big it is, can be broken down and simplified into small and manageable pieces. We also know that nothing is more powerful than a will so strong that it will stake even it’s existence for it’s fullfillment. Having a team of people with that mindset, we can take on any challenge, no matter how big it is. This is how we create massive impact. One cow at a time. Today we focus on 4% of the world’s greenhouse gas emissions in the form of enteric methane (farts and burps from cows). Tomorrow it might be something else."
          text2="If you recognise yourself in this description, join us on the way to a future with net zero emissions."
          link="See open positions"
          href="/careers/"
          caption="Part of science team & founders at Volta Labs, Karolinska Institute, Stockholm Sweden"
        />

        <IconColumnContainer
          lowerLevelHeader="VALUES & CULTURE"
          chapterTitle="OUR VALUES AND CULTURE"
          imageOne={data.iconOne.childImageSharp.fluid}
          titleOne="CHANGEMAKERS BY NATURE"
          textOne="We believe in the power of the individual, and are here to make a real impact."
          imageTwo={data.iconTwo.childImageSharp.fluid}
          titleTwo="DATA DRIVEN &
          PLAYFUL"
          textTwo="When you possess knowledge you have the ability to be creative and explain so people can understand. “Creativity is intelligence having fun”."
          imageThree={data.iconThree.childImageSharp.fluid}
          titleThree="OPEN-HEARTED & INCLUSIVE"
          textThree="To spread our believes and our knowledge we have to challenge the status quo. We are not activists, we do not hate. We include people to join for a better tomorrow."
          imageFour={data.iconFour.childImageSharp.fluid}
          titleFour="DARE TO BE UNEXPECTED"
          textFour="We dare to differ and do the unexpected, we are always open for collaborations to reach common goals. We marry passion with passion."
        />

        <TeamContainer />
        <JobsContainer />
      </div>
    </Layout>
  )
}
