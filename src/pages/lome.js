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
      first: file(relativePath: { eq: "lome-cow.jpg" }) {
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

      ejmunds: file(relativePath: { eq: "ejmunds.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      fourth: file(relativePath: { eq: "lome-banner.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      supermarket: file(relativePath: { eq: "Lome-beef-supermarket.jpg" }) {
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
          lowerLevelHeader=""
          gatsbyImage={data.fourth.childImageSharp.fluid}
          chapterTitle="Climate-friendlier beef from seaweed-fed cows"
          caption="Lome™ Beef"
          text="Lome™ beef offers a special food experience filled with rich flavor, story, and an important message. We use our groundbreaking seaweed-based feed supplements to reduce methane emissions in beef cattle and lower the climate footprint. Produced locally with care for our planet, Lome beef is available in selected supermarkets and restaurants."
        />

        <Grid
          positionLeft={true}
          image={data.supermarket.childImageSharp.fluid}
          lowerLevelHeader="To the doer"
          chapterTitle="Let’s go low methane.
          Let’s go Lome"
          text="“Lome is something different,” says Eva Andersson, a mother of three children. “It is frustrating knowing how big a climate impact our food consumption has as a family. Especially the beef that we enjoy so much. Much thanks to my daughter, we are actively trying to eat more responsibly. Now with Lome beef, I’m feeling empowered that I can make such an easy choice and reduce our climate footprint when buying beef. Climate change is something I care about and there is something about Lome and Volta Greentech that make me very excited about the future.”"
        />

        <Fade up>
          <br />
          <br />
          <br />
          <div className={styles.textContainer}>
            <h1 className={typography.chapterTitle}>Lome on farms</h1>
            <p>
              Lome is produced exclusively by pioneering farmers carefully
              selected by Volta Greentech to be front-runners in lowering
              greenhouse gas emissions. We gather data and produce climate
              reports which are verified by an independent 3rd party.
            </p>
          </div>
        </Fade>

        <Grid
          positionLeft={true}
          image={data.second.childImageSharp.fluid}
          lowerLevelHeader="Eskiltuna, Sweden"
          chapterTitle="Tre Bönder"
          text="In the forests of Näshulta, Fredrik and Helena were the first commercial farmers in
          the world to start feeding Lome™ to their beef cattle. The results were groundbreaking
          and showed around an 80% reduction in methane emissions for every day of feeding. "
          link="Read climate report"
          caption="Micke, Lisa and Fredrik from Tre Bönder."
          href="https://docsend.com/view/s/m75c3wsrretjiv3b"
        />

        <Grid
          positionLeft={false}
          image={data.ejmunds.childImageSharp.fluid}
          lowerLevelHeader="Gotland, Sweden"
          chapterTitle="Ejmunds Farm"
          text="On the island Gotland on the east coast of Sweden, Märtha and Pontus have fed their
          beef cattle with Lome™ during two seasons and continuously reduced 70-90%
          of the methane emissions for every day of feeding."
          link="Read climate report"
          caption="Pontus and Märtha from Ejmunds Farm."
          href="https://docsend.com/view/s/m75c3wsrretjiv3b"
        />

        <Fade up>
          <br />
          <br />
          <br />
          <div className={styles.textContainer}>
            <p>
              The Lome projects have been supported financially by the Swedish
              Board of Agriculture (Jordbruksverket). Part of the financed
              project has also been to develop our algae cultivation systems and
              conduct commercial studies.
            </p>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}
