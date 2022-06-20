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
      jumbotron: file(relativePath: { eq: "underWater.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      solution: file(relativePath: { eq: "solution.jpeg" }) {
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
        <CenteredTextAndImage
          lowerLevelHeader="Our solution"
          gatsbyImage={data.solution.childImageSharp.fluid}
          chapterTitle="A fully natural seaweed-based feed supplement for cows"
          text="Our product is a feed supplement which when fed to cows at a daily dose of 100 grams, reduces their enteric methane emissions (farts and burps) by up to 90%. Based on the red seaweed Asparagopsis taxiformis that contains high amounts of bioactive compounds blocking one of the enzymes needed by the methane-producing bacteria in the rumen, it naturally prevents enteric methane production."
          caption="Volta Seaweed"
        />

        <Grid
          positionLeft={true}
          image={data.eFlasks.childImageSharp.fluid}
          lowerLevelHeader="Seaweed"
          chapterTitle="About asparagopsis taxiformis"
          text="Initially discovered in 2015, the unprecedented methane reducing properties of the red seaweed Asparagopsis taxiformis have since been validated through years of research at numerous top universities and research institutions worldwide. As it has never been produced at scale before, the team at Volta Greentech is focused on developing a cultivation recipe and scalable land-based production of Asparagopsis."
          link="About our production"
          href="/production/"
          caption="Asparagopsis growing in Volta Labs"
        />
        <IconColumnContainer
          lowerLevelHeader="How it works"
          chapterTitle="It's not magic. It's science."
          text="Microbes in the cow's rumen help their digestion of food, a biological process that releases hydrogen and carbon dioxide (CO2). Methane (CH4) is formed when an enzyme in the rumen combines these two gases. Supplementing around 100 grams of Asparagopsis taxiformis to the cow's diet, which naturally contains high amounts of natural compounds that suppress this enzyme, up to 90% of methane emissions are reduced."
          text2="Only around 100 grams per day reduces up to 90% of methane emissions – too good to be true? Nope. Backed by over 6 years of research, Asparagopsis's ability to reduce methane production in cows has been scientifically proven, both in efficiency and safety. Designed to be seamlessly implemented farms, our seaweed is easily mixed into existing feed."
          imageOne={data.iconOne.childImageSharp.fluid}
          titleOne="Cows produce methane"
          textOne="It’s not the cow that produces methane. It’s  unwanted microorganisms in the cow’s rumen that produce methane as a waste product. "
          imageTwo={data.iconTwo.childImageSharp.fluid}
          titleTwo="Supplement ~100g"
          textTwo="Farmer supplements around 100g of our seaweed to the cow’s daily feed intake."
          imageThree={data.iconThree.childImageSharp.fluid}
          titleThree="Immediate effect"
          textThree="The seaweed's natural compounds inhibit the methane-producing microorganisms, up to 90% of enteric methane production is eliminated."
          imageFour={data.iconFour.childImageSharp.fluid}
          titleFour="proven Safe for animals & humans"
          textFour="Methane production takes up to 10% of the cow’s energy. When the methane production is inhibited, the energy becomes available for other processes. "
        />
      </div>
    </Layout>
  )
}
