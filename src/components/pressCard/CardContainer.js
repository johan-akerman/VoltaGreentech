import React from "react"
import typography from "../typography.module.css"
import styles from "./CardContainer.module.css"
import Card from "./Card"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"

export default function CenteredTextAndImage(props) {
  const data = useStaticQuery(graphql`
    query {
      article1: file(relativePath: { eq: "articles/factory.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      article2: file(relativePath: { eq: "articles/fredrik.png" }) {
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
          gatsbyImage={data.article2.childImageSharp.fluid}
          title="Volta Greentech raises 1.7 million Euro to fight burps from cows"
          date="2021.05.21"
          href="https://medium.com/@VGreentech/sweden-based-startup-volta-greentech-raises-1-7-49de3e7923c4"
          delay="250"
        />

        <Card
          gatsbyImage={data.article1.childImageSharp.fluid}
          title="Volta partners with AFRY to build first seaweed factory aiming to reduce 90% of methane emissions from cows"
          date="2021.01.29"
          href="https://voltagreentech.medium.com/volta-greentech-partners-with-afry-to-build-first-seaweed-factory-aiming-to-reduce-80-of-methane-6bfb0531c0f5"
          delay="500"
        />

        <Card
          gatsbyImage={data.article3.childImageSharp.fluid}
          title="Swedens largest feed company Lantmännen in partnership with Volta Greentech to develop the feed of the future"
          date="2020.10.29"
          href="https://voltagreentech.medium.com/swedens-largest-feed-company-lantm%C3%A4nnen-is-developing-the-feed-of-the-future-by-testing-methane-ad9062766f2e"
          delay="750"
        />
      </div>
    </div>
  )
}
