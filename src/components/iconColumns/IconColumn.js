import React from "react"
import styles from "./IconColumn.module.css"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"

export default function IconColumn(props) {
  return (
    <Fade up delay={props.delay}>
      <div className="col-sm-12 col-md-6 col-lg-3">
        <Img
          className={styles.image}
          title="image"
          fluid={props.illustration}
        />
        <h4 className={styles.title}>{props.title}</h4> <p>{props.text}</p>
      </div>
    </Fade>
  )
}
