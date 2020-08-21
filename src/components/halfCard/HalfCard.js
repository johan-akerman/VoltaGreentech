import React from "react"
import typography from "../typography.module.css"
import styles from "./HalfCard.module.css"

import LinkElement from "../link/LinkElement"

export default function HalfCard(props) {
  return (
    <div className="col-sm-12 col-md-6">
      <img className={styles.image} src={props.image} alt="card thumbnail" />
      <div className={styles.cardContent}>
        <p className={typography.lowerLevelHeader}>{props.lowerLevelHeader}</p>
        <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
        <p>{props.text}</p>

        <LinkElement to={props.href} text="Read more" />
      </div>
    </div>
  )
}
