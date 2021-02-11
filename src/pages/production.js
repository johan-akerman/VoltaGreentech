/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import IconColumnContainer from "../components/iconColumns/IconColumnContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
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

      iconOne: file(relativePath: { eq: "illustrations/seaweed.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconTwo: file(relativePath: { eq: "illustrations/heart.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconThree: file(relativePath: { eq: "illustrations/lightBulb.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconFour: file(relativePath: { eq: "illustrations/factory.png" }) {
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
          text="Volta Greentech is developing a scalable, sustainable, and automated land-based seaweed cultivation system - tailored for the selected species of seaweed that are crucial ingredients in Volta Seafeed. A land-based factory enables optimization of temperature, light, and nutrients to maximize the seaweed's growth rate while ensuring a high and standardized quality of the feed supplement. "
          text2="To meet the increasing global demand for the solution, we are rethinking how to produce seaweed at scale. Volta Seafeed has an immense impact potential, but as no one has been growing this type of seaweed at scale before, the global demand far exceeds the supply. Looking at existing production methods for seaweed, we quickly realized that we needed to take a different approach to reach the scale we are aiming for. Therefore, we went to the drawing board and looked at what would be necessary to produce Asparagopsis at scale for global implementation.  "
          gatsbyImage={data.production.childImageSharp.fluid}
          caption="Production inside Volta Factory 01"
        />

        <IconColumnContainer
          lowerLevelHeader="How it works"
          chapterTitle="The production process"
          text="To ensure a sustainable footprint in the production and viable production economics, Volta Seafeed is produced using renewable electricity, waste heat, and CO2 from nearby industries.  "
          imageOne={data.iconOne.childImageSharp.fluid}
          titleOne="Vertical production in bioreactors"
          textOne="The seaweed is grown in vertical bioreactors with sensors and automation in a controlled environment to maximize seaweed growth and quality to lower production costs. "
          imageTwo={data.iconTwo.childImageSharp.fluid}
          titleTwo="Cultivation media"
          textTwo="Seawater is used as cultivation media and is naturally rich in nutrients. The seawater is recirculated in the system, and extra nutrients and CO2 are added to boost seaweed growth."
          imageThree={data.iconThree.childImageSharp.fluid}
          titleThree="Energy & Electricity"
          textThree="The LED lights and the rest of the facility are powered by 100% renewable electricity. Waste heat from nearby industries is used to heat up the seawater and facility to the right cultivation temperature."
          imageFour={data.iconFour.childImageSharp.fluid}
          titleFour="Rapid growth and 365 day per year production"
          textFour="With continuous and stable seaweed growth of up to 10% day and a 365 days per year production, Volta has a production blueprint ready for scaling. "
        />

        <FacilityContainer />

        <br />
        <br />
      </div>
    </Layout>
  )
}
