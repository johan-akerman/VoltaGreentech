import React from "react"
import typography from "../typography.module.css"
import styles from "./Quote.module.css"
import quoteIllustration from "../../../src/images/illustrations/quote.png"
import Fade from "react-reveal/Fade"

export default function Quote(props) {
  return (
    <div className={styles.container}>
      <Fade up>
        <img
          className={styles.quoteIllustration}
          src={quoteIllustration}
          alt="quoteIcon"
        />
      </Fade>

      <div className={styles.quoteContent}>
        <Fade up delay={200}>
          <h1 className={typography.chapterTitle}>{props.text}</h1>
        </Fade>
        <Fade up delay={450}>
          <h2 className={typography.lowerLevelHeader}>{props.person}</h2>
        </Fade>
      </div>
    </div>
  )
}
