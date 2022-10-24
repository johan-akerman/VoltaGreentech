import React from "react"
import typography from "../typography.module.css"
import { useStaticQuery, graphql } from "gatsby"

import Card from "./FacilityCard"
import styles from "./FacilityCard.module.css"
import Fade from "react-reveal/Fade"

export default function TeamContainer(props) {
  const data = useStaticQuery(graphql`
    query {
      labs: file(relativePath: { eq: "articles/volta_labs.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      factory_01: file(relativePath: { eq: "articles/volta_factory_01.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      factory_02: file(relativePath: { eq: "factory_02.png" }) {
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
        <p className={typography.lowerLevelHeader}>Facilities</p>
        <h1 className={typography.chapterTitle}>The Production facilities</h1>
        <p style={{ maxWidth: "950px" }}>
          We have our HQ and lab, Volta Labs, at the Karolinska Institute in
          Stockholm. This is where we work with product development and optimize
          our cultivation recipe. We are constructing our first factory, Volta
          Factory 01 in Lysekil and are planning Volta Factory 02 - one of the
          world’s largest red seaweed factories.
        </p>
      </Fade>
      <div className="row">
        <Card
          gatsbyImage={data.labs.childImageSharp.fluid}
          title="Volta Labs"
          text="Located in Stockholm at the Karolinska institute. Headquarter and R&D facility."
          delay="250"
        />
        <Card
          gatsbyImage={data.factory_01.childImageSharp.fluid}
          title="Volta Factory 01"
          text="Located in Lysekil on the Swedish westcoast. Pilot factory and production R&D. "
          delay="500"
        />{" "}
        <Card
          gatsbyImage={data.factory_02.childImageSharp.fluid}
          title="Volta Factory 02"
          text="Construction planned to start 2023 with the aim to become one of the world's largest red seaweed factories."
          delay="750"
        />
      </div>
    </div>
  )
}
