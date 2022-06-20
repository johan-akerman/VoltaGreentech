/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import Jumbotron from "../components/jumbotron/Jumbotron"
/* Importing styling */
import Layout from "../components/Layout"
import Grid from "../components/grid/Grid"

import { Link } from "gatsby"
import typography from "../components/typography.module.css"
import Fade from "react-reveal/Fade"
import CustomButton from "../components/buttons/circleButton/CircleButton.js"
import styles from "../components/centeredContent/CenteredTextAndImage.module.css"

/* Importing components */
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"

import Quote from "../components/quote/Quote"

export default function Farms() {
  const data = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "_K9A6166.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      second: file(relativePath: { eq: "_K9A6256.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      third: file(relativePath: { eq: "_K9A6801.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      fourth: file(relativePath: { eq: "_K9A6630.jpg" }) {
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
        jumbotronBackground={data.first.childImageSharp.fluid}
        page="farms"
      />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Farm 01"
          gatsbyImage={data.fourth.childImageSharp.fluid}
          chapterTitle="81% less methane emissions burped"
          caption="Farmer Lisa feeding a 2 day old calf inside the barn."
          text="Volta Greentech partnered with Tre Bönder (Swedish for “three farmers”) for doing the world’s first commercial pilot feeding our seaweed to beef cattle to reduce methane emissions. The pilot resulted in 81% less methane emissions burped out by their beef cattle."
        />

        <Grid
          positionLeft={false}
          image={data.third.childImageSharp.fluid}
          lowerLevelHeader=""
          chapterTitle="About the pilot"
          text="During December 2021, the farmers Micke and Lisa daily fed seaweed as a supplement to 17 of their 200 cattle. Over the pilot period, on average 81% of the animals' methane emissions were removed. The seaweed used in the pilot, was produced sustainably in Volta Greentech’s land-based seaweed factory in Lysekil, Sweden."
          link="Read full report"
          caption="A seaweed-based feed supplement."
          href="https://docsend.com/view/5k2vefwsxh2gr22r?fbclid=IwAR3ExxNPAlU2RyC6op6GhDKwyWSZVreVZzZHEz377hBWpzxEjCwXzYK4cJs"
        />

        <Grid
          positionLeft={true}
          image={data.second.childImageSharp.fluid}
          lowerLevelHeader=""
          chapterTitle="About Tre Bönder"
          text="Tre Bönder is a family company who owns the farm Torp in Näshulta, Sweden. At the farm the focus is on sustainability and animal welfare. They sell their beef locally directly to consumers and restaurants under their own brand. To meet climate targets Tre Bönders goal is for all the beef cattle on the farm to have seaweed mixed into their diets in the near future."
          text2="By buying beef directly from Tre Bönder you support Volta Greentech and Torps farm in the transition to drastically reduce methane emissions."
          link="Visit Tre Bönder"
          caption="Micke, Lisa and Fredrik from Tre Bönder."
          href="https://www.trebonder.se/"
        />

        <Fade up>
          <div className={styles.textContainer}>
            <h1 className={typography.chapterTitle}>Measurable impact</h1>
            <p>
              It’s not magic. It’s science and it’s measurable. Read our methane
              report on Tre bönder.
            </p>

            <div className={styles.btnContainer}>
              <a
                href="https://docsend.com/view/5k2vefwsxh2gr22r?fbclid=IwAR3ExxNPAlU2RyC6op6GhDKwyWSZVreVZzZHEz377hBWpzxEjCwXzYK4cJs"
                target="_blank"
              >
                <CustomButton text="Read report" />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}
