/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import IconColumnContainer from "../components/iconColumns/IconColumnContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import Table from "../components/table/ComparisonTable"
import FacilityContainer from "../components/facilities/FacilitiesContainer"

/* Importing styling */
import Layout from "../components/Layout"

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

      production: file(relativePath: { eq: "production.jpg" }) {
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
        page="production"
      />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Production"
          chapterTitle="A blueprint for
          scalable production"
          text="Volta Greentech is developing a scalable, sustainable and automated land based seaweed cultivation system - tailored for the selected species of seaweed that are key ingredients in Volta Seafeed. Land based systems enables optimization of temperature, light and nutrients to maximize the growth rate of the seaweed, while ensuring a high and standardised quality of the feed supplement."
          gatsbyImage={data.production.childImageSharp.fluid}
          caption="Production inside Volta Factory 01"
        />

        <IconColumnContainer
          lowerLevelHeader="How it works"
          chapterTitle="The production process"
          text="To ensure a carbon negative production footprint in the production Volta Seafeed is produced using renewable electricity, waste heat from nearby industries and surplus carbon dioxide."
          imageOne={data.iconOne.childImageSharp.fluid}
          titleOne="Seed"
          textOne="Nutrient rich water with the right salinity is pumped into the factory from the ocean. The water is filtered from unwanted bacteria and neccessary nutriends are added."
          imageTwo={data.iconTwo.childImageSharp.fluid}
          titleTwo="Circular"
          textTwo="Carbon dioxide (CO2) is added to the tanks, LED lights powered by renewable electricity."
          imageThree={data.iconThree.childImageSharp.fluid}
          titleThree="Immediate effect"
          textThree="The seaweed’s bioactive compounds block the methane producing enzymes in the cow’s rumen."
          imageFour={data.iconFour.childImageSharp.fluid}
          titleFour="CH4 reduction"
          textFour="A majority of the enteric methane emissions are reduced."
        />

        <FacilityContainer />

        <br />
        <br />
        <Table />
      </div>
    </Layout>
  )
}
