import React from "react"
import styles from "./IconColumn.module.css"
import Fade from 'react-reveal/Fade';

export default function IconColumn(props) {
  return (
    <Fade up delay={props.delay}>
    <div className="col-sm-12 col-md-6 col-lg-3">
      <img
        className={styles.image}
        src={props.illustration}
        alt="column icon"
      />
      <h4 className={styles.title}>{props.title}</h4> <p>{props.text}</p>
    </div>
    </Fade>
  )
}
