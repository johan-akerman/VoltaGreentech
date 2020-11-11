import React from "react"
import LinkElement from "../link/LinkElement"
import Fade from 'react-reveal/Fade';

import styles from "./JobCard.module.css"

export default function NewsTable(props) {
  return (
    <Fade up delay={props.delay}>
    <div className="col-sm-12 col-md-6 col-lg-6">
      <div className={styles.container}>
        <h1 className={styles.title}>{props.jobTitle}</h1>
        <p className={styles.location}>{props.location}</p>
        <LinkElement to={props.href} text="Apply" />
      </div>
    </div>
    </Fade>
  )
}
