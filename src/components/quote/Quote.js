import React from "react"
import typography from "../typography.module.css"
import styles from "./Quote.module.css"
import image from "../../../static/quote.png"

export default function Quote(props) {
  return (
    <React.Fragment>
      <img className={styles.quoteIllustration} src={image} alt="quoteIcon" />
      <div className={styles.quoteContent}>
        <h1 className={typography.chapterTitle}>{props.text}</h1>
        <h2 className={typography.lowerLevelHeader}>{props.person}</h2>
      </div>
    </React.Fragment>
  )
}
