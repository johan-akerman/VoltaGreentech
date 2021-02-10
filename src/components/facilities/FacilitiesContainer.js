import React from "react"
import typography from "../typography.module.css"
import { useStaticQuery, graphql } from "gatsby"

import Card from "./FacilityCard"
import styles from "./FacilityCard.module.css"
import Fade from "react-reveal/Fade"

export default function TeamContainer(props) {
  const data = useStaticQuery(graphql`
    query {
      factory: file(relativePath: { eq: "articles/factory.jpg" }) {
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
        <h1 className={typography.chapterTitle}>Title about facilities</h1>
        <p style={{ maxWidth: "950px" }}>
          Very short text (3- 5 sentences) about why we have 3 different
          facilies. Why they are located in different places etc.
        </p>
      </Fade>
      <div className="row">
        <Card
          gatsbyImage={data.factory.childImageSharp.fluid}
          title="Volta Labs"
          text="Very short text about this facility. Include location, size and its purpose. Max 3 - 5 sentences."
          delay="250"
        />
        <Card
          gatsbyImage={data.factory.childImageSharp.fluid}
          title="Volta Factory 01"
          text="Very short text about this facility. Include location, size and its purpose. Max 3 - 5 sentences."
          delay="500"
        />{" "}
        <Card
          gatsbyImage={data.factory.childImageSharp.fluid}
          title="Volta Factory 02"
          text="Very short text about this facility. Include location, size and its purpose. Max 3 - 5 sentences."
          delay="750"
        />
      </div>
    </div>
  )
}
