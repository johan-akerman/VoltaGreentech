import React from "react"
import typography from "../typography.module.css"
import styles from "./CardContainer.module.css"
import Card from "./Card"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"

export default function CenteredTextAndImage(props) {
  const data = useStaticQuery(graphql`
    query {
      article1: file(relativePath: { eq: "articles/gotland.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      article2: file(relativePath: { eq: "articles/farm.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      article3: file(
        relativePath: { eq: "articles/next generation lome.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <Fade up>
        <p className={typography.lowerLevelHeader}>Press</p>
        <h1 className={typography.chapterTitle}>Latest press releases</h1>
      </Fade>
      <div className="row">
        <Card
          gatsbyImage={data.article3.childImageSharp.fluid}
          title="Next Generation Lome: Volta Greentech raises 32 million SEK investment to bring cost-efficient and scalable climate solution to agriculture"
          date="2024.05.10"
          href="https://medium.com/@VGreentech/a18a6da790d4"
          delay="250"
        />

        <Card
          gatsbyImage={data.article1.childImageSharp.fluid}
          title="Smak av Gotland — soon the most climate-friendly beef on the market"
          date="2024.03.27"
          href="https://medium.com/@VGreentech/smak-av-gotland-soon-the-most-climate-friendly-beef-on-the-market-1a2af1eced9a"
          delay="500"
        />

        <Card
          gatsbyImage={data.article2.childImageSharp.fluid}
          title="Denmark's strategy for a world-first tax in agriculture"
          date="2024.02.29"
          href="https://medium.com/@VGreentech/on-wednesday-last-week-a-long-awaited-report-commissioned-by-the-danish-government-was-released-c6c21f0223f8"
          delay="750"
        />
      </div>
    </div>
  )
}
