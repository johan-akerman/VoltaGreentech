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

      article2: file(relativePath: { eq: "articles/farm.png" }) {
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
          gatsbyImage={data.article2.childImageSharp.fluid}
          title="Swedish government advised to feed cows methane-reducing additives to meet climate targets
          "
          date="2023.10.04"
          href="https://medium.com/@VGreentech/swedish-government-advised-to-feed-cows-methane-reducing-additives-to-meet-climate-targets-8b84a0e87f21"
          delay="250"
        />

        <Card
          gatsbyImage={data.article1.childImageSharp.fluid}
          title="Kan färre rapar minska Felix köttbullars klimatavtryck?"
          date="2023.09.18"
          href="https://medium.com/@VGreentech/kan-f%C3%A4rre-rapar-minska-felix-k%C3%B6ttbullars-klimatavtryck-42b6cead334f"
          delay="500"
        />

        <Card
          gatsbyImage={data.article3.childImageSharp.fluid}
          title="Launch of Lome Beef at Hemköp. Probably the most climate-friendly beef on the planet."
          date="2023.06.07"
          href="https://medium.com/@VGreentech/press-release-2023-06-07-english-928e79a4bb97"
          delay="750"
        />
      </div>
    </div>
  )
}
