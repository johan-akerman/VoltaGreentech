/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
import solution from "../../static/images/solution.svg"
import factory from "../../static/images/factory_01_concept.jpg"

export default function Home() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "factory_01_concept.jpg" }) {
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
        fullScreen="true"
        page="home"
        jumbotronBackground={data.file.childImageSharp.fluid}
      />
      <div className="layoutContainer">
        <FeaturedIn />
        <OurMission />
        <Grid
          positionLeft={true}
          image={solution}
          lowerLevelHeader="Our solution"
          chapterTitle="A fully natural seaweed-based feed supplement for cows"
          text="Volta Seafeed is a fully natural seaweed based feed supplement for cows which at a daily dose of around 100 grams has a potential to reduce up to 90% of their methane emissions."
          link="Read more"
          href="/solution/"
          caption="A daily dose of Volta Seafeed"
        />

        <CenteredTextAndImage
          lowerLevelHeader="Production designed to scale"
          chapterTitle="Volta Factory 01"
          text="There are more than one billion cows on the planet. Looking at existing production methods for seaweed, we quickly realised that we needed to take a different approach to reach the scale we are aiming for. Therefore, Volta Greentech is developing an automated land based seaweed factory on the Swedish West Coast. With a blueprint specifically designed to be replicated at scale, Volta Factory 01 will both supply Volta Greentech’s first commercial partnerships and lay the technical foundation for the coming large scale factories."
          image={factory}
          gatsbyImage={data.file.childImageSharp.fluid}
          caption="Production inside Volta Factory 01"
          link="Read more"
          href="/production/"
        />

        <CardContainer />
        <Newsletter />
      </div>
    </Layout>
  )
}
