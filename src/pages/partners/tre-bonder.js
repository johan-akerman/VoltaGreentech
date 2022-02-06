/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"
import typography from "../../components/typography.module.css"
import Fade from "react-reveal/Fade"
import CustomButton from "../../components/buttons/circleButton/CircleButton.js"
import styles from "../../components/centeredContent/CenteredTextAndImage.module.css"

/* Importing components */
import CenteredTextAndImage from "../../components/centeredContent/CenteredTextAndImage"

import Grid from "../../components/grid/Grid"
import Quote from "../../components/quote/Quote"

/* Importing styling */
import Layout from "../../components/Layout"

export default function TreBonder() {
  const data = useStaticQuery(graphql`
    query {
      farm: file(relativePath: { eq: "farms.jpg" }) {
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="layoutContainer">
        <CenteredTextAndImage
          gatsbyImage={data.farm.childImageSharp.fluid}
          chapterTitle="Local Swedish beef from the forests of Näshulta"
          text="From Tre Bönder you can buy high quality beef from a local farm that is likely to be one of the
          most climate friendly beef farms in the world. At the farm animals are snacking on locally
          produced seaweed produced by Volta Greentech to burp less methane emissions. Tre Bönders
          focus is animal welfare and sustainability."
          caption="Lorem ipsum"
          link="Buy products"
          href="https://www.trebonder.se/"
        />

        <Quote
          text="By buying beef from Tre Bönder you support Volta Greentech and Torps farm in the transition to become an emission free farm. "
          person=""
        />

        <Grid
          positionLeft={true}
          image={data.farm.childImageSharp.fluid}
          lowerLevelHeader="Contact"
          chapterTitle="Contact the farmer"
          text="Contact the farmer to buy products or to schedule a farm visit. Contact Tre Bönder by calling 0707 966 257 or sending an email to info@trebonder.se"
        />

        <Fade up>
          <div className={styles.textContainer}>
            <h1 className={typography.chapterTitle}>
              Does it sound too good to be true?
            </h1>
            <p>
              It's not magic. It's science. Read our methane report on Tre
              bönder!
            </p>

            <div className={styles.btnContainer}>
              <Link to="https://example.com/" className={styles.link}>
                <CustomButton text="Read report" />
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}
