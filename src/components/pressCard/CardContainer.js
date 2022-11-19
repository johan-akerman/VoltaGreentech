import React from "react"
import typography from "../typography.module.css"
import styles from "./CardContainer.module.css"
import Card from "./Card"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"

export default function CenteredTextAndImage(props) {
  const data = useStaticQuery(graphql`
    query {
      article1: file(relativePath: { eq: "articles/lome.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      article2: file(
        relativePath: { eq: "articles/fredrik_and_angelo_in_lab.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      article3: file(relativePath: { eq: "articles/pilot.png" }) {
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
          title="Volta Greentech gears up: Swedish food companies join forces to reduce climate impact from cattle"
          date="2022.11.16"
          href="https://medium.com/@VGreentech/volta-greentech-gears-up-swedish-food-companies-join-forces-to-reduce-climate-impact-from-cattle-8abb1409531a"
          delay="250"
        />

        <Card
          gatsbyImage={data.article1.childImageSharp.fluid}
          title="World's first methane reduced beef in Swedish supermarkets"
          date="2022.06.21"
          href="https://medium.com/@VGreentech/v%C3%A4rldens-f%C3%B6rsta-metanreducerade-n%C3%B6tk%C3%B6tt-nu-i-butik-d16642cd8db0"
          delay="500"
        />
        <Card
          gatsbyImage={data.article3.childImageSharp.fluid}
          title="Volta Greentech’s seaweed reduces methane from cows by over 80 percent, commercial pilot shows"
          date="2022.02.07"
          href="https://medium.com/@VGreentech/volta-greentechs-seaweed-reduces-methane-from-cows-by-over-80-percent-commercial-pilot-shows-e692dfe51217"
          delay="750"
        />
      </div>
    </div>
  )
}
