/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import Grid from "../components/grid/Grid"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import CardContainer from "../components/pressCard/CardContainer"
import OurMission from "../components/OurMission"
import FeaturedIn from "../components/featuredIn/FeaturedIn"
import VideoJumbotron from "../components/jumbotron/VideoJumbotron"

/* Importing styling */
import Layout from "../components/Layout"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      jumbotron: file(relativePath: { eq: "factory_01_concept.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      solution: file(relativePath: { eq: "solution_cropped.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      lome: file(relativePath: { eq: "lome.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      production: file(relativePath: { eq: "production.jpg" }) {
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
      <VideoJumbotron />

      <div className="layoutContainer">
        <FeaturedIn />
        <OurMission />
        <Grid
          positionLeft={true}
          image={data.solution.childImageSharp.fluid}
          lowerLevelHeader="Our solution"
          chapterTitle="A fully natural seaweed-based feed supplement for cows"
          text="Our product Lome™ is an entirely natural seaweed-based feed supplement for cows that, at a daily dose of around 100 grams, can reduce up to 90% of their methane emissions."
          link="Read more"
          href="/solution/"
          caption="Lome™"
        />

        <Grid
          positionLeft={false}
          image={data.lome.childImageSharp.fluid}
          lowerLevelHeader="Lome™"
          chapterTitle="Probably the most climate-friendly beef on the planet"
          text="Lome beef offers a special food experience filled with rich flavor, story, and an important message. It is produced exclusively by pioneering farmers carefully selected by Volta Greentech to be front-runners in lowering greenhouse gas emissions.						
          Produced locally with care for our planet, Lome beef is available in selected supermarkets and restaurants. 
          "
          link="Read more"
          href="/lome/"
          caption="Lome Beef"
        />

        <CenteredTextAndImage
          lowerLevelHeader="Production designed to scale"
          chapterTitle="Volta Factory 01"
          text="There are more than one billion cows on the planet. Looking at existing production methods for seaweed, we quickly realized that we needed to take a different approach to reach the scale we are aiming for. Therefore, Volta Greentech is developing an automated land-based seaweed factory on the Swedish West Coast. With a blueprint specifically designed to be replicated at scale, Volta Factory 01 will supply Volta Greentech’s first commercial partnerships and lay the technical foundation for the coming large scale factories."
          gatsbyImage={data.production.childImageSharp.fluid}
          caption="Production inside Volta Factory 01"
          link="Read more"
          href="/production/"
        />

        <CardContainer />
      </div>
    </Layout>
  )
}
