import React from "react"
import typography from "../typography.module.css"
import styles from "./Quote.module.css"
import quoteIllustration from "../../../static/images/illustrations/quote.png"

export default function Quote(props) {
  return (
    <div className={styles.container}>
      <img
        className={styles.quoteIllustration}
        src={quoteIllustration}
        alt="quoteIcon"
      />
      <div className={styles.quoteContent}>
        <h1 className={typography.chapterTitle}>{props.text}</h1>
        <h2 className={typography.lowerLevelHeader}>{props.person}</h2>
      </div>
    </div>
  )
}
