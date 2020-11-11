import React from "react"
import typography from "../typography.module.css"
import styles from "./Quote.module.css"
import quoteIllustration from "../../../static/images/illustrations/quote.png"
import TextDecoration from "../textDecoration/TextDecoration"
import Fade from 'react-reveal/Fade';

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
      <Fade up delay={200}><h1 className={styles.title}>If cattle were a country, they would rank <TextDecoration text="THIRD" /> in greenhouse gas emissions.</h1>
        </Fade>
        <Fade up delay={450}><h2 className={typography.lowerLevelHeader}>{props.person}</h2></Fade>
      </div>
    </div>
  )
}
