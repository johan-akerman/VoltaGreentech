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
          title="Volta partners with AFRY to build first seaweed factory aiming to reduce 80% of methane emissions from cows"
          date="2021.01.29"
          href="https://voltagreentech.medium.com/volta-greentech-partners-with-afry-to-build-first-seaweed-factory-aiming-to-reduce-80-of-methane-6bfb0531c0f5"
          delay="250"
        />

        <Card
          gatsbyImage={data.article3.childImageSharp.fluid}
          title="Swedens largest feed company Lantmännen in partnership with Volta Greentech to develop the feed of the future"
          date="2020.10.29"
          href="https://voltagreentech.medium.com/swedens-largest-feed-company-lantm%C3%A4nnen-is-developing-the-feed-of-the-future-by-testing-methane-ad9062766f2e"
          delay="500"
        />

        <Card
          gatsbyImage={data.article2.childImageSharp.fluid}
          title="This factory is growing a new kind of food for cows: A seaweed that reduces their burps"
          date="2020.06.01"
          href="https://www.fastcompany.com/90510673/this-factory-is-growing-a-new-kind-of-food-for-cows-a-seaweed-that-reduces-their-burps?partner=rss&utm_source=rss&utm_medium=feed&utm_campaign=rss+fastcompany&utm_content=rss?cid=search"
          delay="750"
        />
      </div>
    </div>
  )
}
