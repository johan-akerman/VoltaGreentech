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
          lowerLevelHeader="Lome™"
          chapterTitle="THE SOLUTION TO REACH CLIMATE TARGETS"
          text="Our product Lome™ is a feed additive for cows that reduces up to 90% of their methane emissions."
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

        <CardContainer />
      </div>
    </Layout>
  )
}
