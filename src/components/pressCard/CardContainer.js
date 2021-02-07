import React from "react"
import typography from "../typography.module.css"
import styles from "./CardContainer.module.css"
import Card from "./Card"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"

export default function CenteredTextAndImage(props) {
  const data = useStaticQuery(graphql`
    query {
      article1: file(relativePath: { eq: "articles/brilliantMinds.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      article2: file(relativePath: { eq: "articles/flask.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      article3: file(relativePath: { eq: "articles/solution.png" }) {
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
          gatsbyImage={data.article1.childImageSharp.fluid}
          title="Swedish start-up tackling methane emissions in cattle"
          date="2020.06.02"
          href="https://example.com"
          delay="250"
        />

        <Card
          gatsbyImage={data.article2.childImageSharp.fluid}
          title="This factory is growing a new kind of food for cows"
          date="2020.06.02"
          href="https://example.com"
          delay="500"
        />

        <Card
          gatsbyImage={data.article3.childImageSharp.fluid}
          title="The startup waging war against cows farts"
          date="2020.06.02"
          href="https://example.com"
          delay="750"
        />
      </div>
    </div>
  )
}
