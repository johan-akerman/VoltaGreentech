/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import IconColumnContainer from "../components/iconColumns/IconColumnContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import Table from "../components/table/ComparisonTable"
import FAQ from "../components/faq/FAQ"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import backgroundImage from "../../static/images/factory_01_concept.jpg"
import production from "../../static/images/heroImages/production.png"

export default function Production() {
  const data = useStaticQuery(graphql`
    query {
      jumbotron: file(relativePath: { eq: "factory_01_concept.jpg" }) {
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
        page="production"
      />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Production"
          chapterTitle="In the archipelago of the swedish
        west coast"
          text="Volta Greentech is developing a scalable, sustainable and automated land based seaweed cultivation system - tailored for the selected species of seaweed that are key ingredients in Volta Seafeed. Land based systems enables optimization of temperature, light and nutrients to maximize the growth rate of the seaweed, while ensuring a high and standardised quality of the feed supplement."
          image={production}
          caption="Image caption goes here"
        />
        <br />
        <br />
        <Table />

        <IconColumnContainer
          lowerLevelHeader="How it works"
          chapterTitle="The production process"
          text=" Volta Seafeed is a feed supplement which when fed to cows at a daily
        dose of 100 grams reduces methane emissions by up to 80%"
        />

        {/* <div className="row">
          <HalfCard
            lowerLevelHeader="what is being produced"
            chapterTitle="A seaweed based feed"
            text="The factory is producing Volta Seafeed, a feed supplement which when fed to cows at…"
            image={image}
            href="/solution/"
          />
          <HalfCard
            lowerLevelHeader="our first consumer product"
            chapterTitle="Planetmjölk"
            text="The factory is producing Volta Seafeed, a feed supplement which when fed to cows at…"
            image={image}
            href="/product/"
          />
        </div> */}
        <FAQ />
      </div>
    </Layout>
  )
}
