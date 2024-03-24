/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import Jumbotron from "../components/jumbotron/Jumbotron"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import IconColumnContainer from "../components/iconColumns/IconColumnContainer"
import Grid from "../components/grid/Grid"

/* Importing styling */
import Layout from "../components/Layout"

export default function Solution() {
  const data = useStaticQuery(graphql`
    query {
      jumbotron: file(relativePath: { eq: "solution.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      solution: file(relativePath: { eq: "infographic.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      eFlasks: file(relativePath: { eq: "eflasks.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconOne: file(relativePath: { eq: "illustrations/cow_alt_1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconTwo: file(relativePath: { eq: "illustrations/farmer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconThree: file(relativePath: { eq: "illustrations/seaweed.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconFour: file(relativePath: { eq: "illustrations/cow_alt_2.png" }) {
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
        page="solution"
      />
      <div className="layoutContainer">
        {/* <CenteredTextAndImage
          lowerLevelHeader=""
          gatsbyImage={data.solution.childImageSharp.fluid}
          chapterTitle="THE SOLUTION TO REACH CLIMATE TARGETS"
          text="Our product Lome™ is a feed additive incorporated into animal feed which reduces their enteric methane emissions (farts and burps) by up to 90%"
          caption="Lome™"
        /> */}

        <Grid
          positionLeft={true}
          image={data.solution.childImageSharp.fluid}
          lowerLevelHeader="Lome™"
          chapterTitle="Reducing emissions from cows"
          text="Our product Lome™ is a feed additive incorporated into animal feed which reduces their enteric methane emissions (farts and burps) by up to 90%."
          caption="Lome™"
        />
        <IconColumnContainer
          lowerLevelHeader="How it works"
          chapterTitle="It's not magic. It's science."
          text="Microbes in the cow's rumen help their digestion of food, a biological process that releases hydrogen and carbon dioxide (CO2). Methane (CH4) is formed when an enzyme in the rumen combines these two gases. Supplementing only a few grams of Lome to the cow's diet, which contains bioactive compounds that suppress this enzyme, up to 90% of methane emissions are reduced."
          text2="Only a few grams per day reduces up to 90% of methane emissions – too good to be true? Nope. Backed by over 10 years of research, feed additives' ability to reduce methane production in cows has been scientifically proven, both in efficiency and safety. Designed to be seamlessly implemented on farms, our additive is incorporated into normal animal feed."
          imageOne={data.iconOne.childImageSharp.fluid}
          titleOne="Cows produce methane"
          textOne="It’s not the cow that produces methane. It’s  unwanted microorganisms in the cow’s rumen that produce methane as a waste product. "
          imageTwo={data.iconTwo.childImageSharp.fluid}
          titleTwo="Feeding"
          textTwo="Farmers effortlessly include Lome™ in their daily animal feed routine."
          imageThree={data.iconThree.childImageSharp.fluid}
          titleThree="Immediate effect"
          textThree="The products bioactive compounds inhibit the methane-producing microorganisms, up to 90% of enteric methane production is eliminated."
          imageFour={data.iconFour.childImageSharp.fluid}
          titleFour="proven Safe for animals & humans"
          textFour="Methane production takes up to 10% of the cow’s energy. When the methane production is inhibited, the energy becomes available for other processes. "
        />
      </div>
    </Layout>
  )
}
