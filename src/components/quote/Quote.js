import React from "react"
import typography from "../typography.module.css"
import styles from "./Quote.module.css"
import quoteIllustration from "../../../static/images/illustrations/quote.png"
import TextDecoration from "../textDecoration/TextDecoration"

export default function Quote(props) {
  return (
    <div className={styles.container}>
      <img
        className={styles.quoteIllustration}
        src={quoteIllustration}
        alt="quoteIcon"
      />
      <div className={styles.quoteContent}>
        <h1 className={typography.chapterTitle}>If cattle were a <TextDecoration text="COUNTRY" />, they would rank <TextDecoration text="THIRD" /> in greenhouse gas emissions.</h1>
        <h2 className={typography.lowerLevelHeader}>{props.person}</h2>
      </div>
    </div>
  )
}
