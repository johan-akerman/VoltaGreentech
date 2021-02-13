import React from "react"
import styles from "./FacilityCard.module.css"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"

export default function teamMemberCard(props) {
  return (
    <Fade up delay={props.delay}>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <div className={styles.card}>
            <Img
              style={{ height: "100%", width: "100%", marginBottom: 0 }}
              imgStyle={{ objectFit: "contain" }}
              title="image"
              fluid={props.gatsbyImage}
            />
            <div className={styles.cardContent}>
              <h4 className={styles.title}>{props.title}</h4>
              <p>{props.text}</p>
            </div>
          </div>
        </a>
      </div>
    </Fade>
  )
}
