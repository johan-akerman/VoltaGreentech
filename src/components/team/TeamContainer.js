import React from "react"
import typography from "../typography.module.css"
import { useStaticQuery, graphql } from "gatsby"

import Card from "./TeamMemberCard"
import styles from "./TeamMemberCard.module.css"
import Fade from "react-reveal/Fade"

export default function TeamContainer(props) {
  const data = useStaticQuery(graphql`
    query {
      fredrik: file(relativePath: { eq: "team/fredrik.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      leo: file(relativePath: { eq: "team/leo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      angelo: file(relativePath: { eq: "team/angelo.jpeg" }) {
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
        <p className={typography.lowerLevelHeader}>Founders</p>
        <h1 className={typography.chapterTitle}>Meet the founders</h1>
        <p style={{ maxWidth: "950px" }}>
          The journey of Volta began in 2018 when Fredrik, Leo and Angelo
          learned about a special red seaweeds incredible potential to tacke one
          of the worlds biggest sources of greenhouse gas emissions. Realising
          the potential of the solution, they decided this was the most
          important thing they could focus on and dropped everything to start
          Volta with a simple mission: get this seaweed out to as many cows as
          possible, as fast as possible.
        </p>
      </Fade>
      <div className="row">
        <Card
          gatsbyImage={data.fredrik.childImageSharp.fluid}
          title="Fredrik Åkerman"
          position="Co-founder, CEO"
          email="fredrik@voltagreentech.com"
          delay="250"
        />
        <Card
          gatsbyImage={data.leo.childImageSharp.fluid}
          title="Leo Wezelius"
          position="Co-founder, CMO"
          email="leo@voltagreentech.com"
          delay="500"
        />{" "}
        <Card
          gatsbyImage={data.angelo.childImageSharp.fluid}
          title="Angelo Demeter"
          position="Co-founder, Chief Scientist"
          email="angelo@voltagreentech.com"
          delay="750"
        />
      </div>
    </div>
  )
}
