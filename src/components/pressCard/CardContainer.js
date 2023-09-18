import React from "react"
import typography from "../typography.module.css"
import styles from "./CardContainer.module.css"
import Card from "./Card"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"

export default function CenteredTextAndImage(props) {
  const data = useStaticQuery(graphql`
    query {
      article1: file(relativePath: { eq: "articles/orkla_collaboration.png" }) {
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

      article3: file(relativePath: { eq: "articles/lome_beef.png" }) {
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
          title="Kan färre rapar minska Felix köttbullars klimatavtryck?"
          date="2023.09.18"
          href="https://medium.com/@VGreentech/kan-f%C3%A4rre-rapar-minska-felix-k%C3%B6ttbullars-klimatavtryck-42b6cead334f"
          delay="250"
        />

        <Card
          gatsbyImage={data.article3.childImageSharp.fluid}
          title="Launch of Lome Beef at Hemköp. Probably the most climate-friendly beef on the planet."
          date="2023.06.07"
          href="https://medium.com/@VGreentech/press-release-2023-06-07-english-928e79a4bb97"
          delay="500"
        />
        <Card
          gatsbyImage={data.article2.childImageSharp.fluid}
          title="Volta Greentech gears up: Swedish food companies join forces to reduce climate impact from cattle"
          date="2022.11.16"
          href="https://medium.com/@VGreentech/volta-greentech-gears-up-swedish-food-companies-join-forces-to-reduce-climate-impact-from-cattle-8abb1409531a"
          delay="750"
        />
      </div>
    </div>
  )
}
