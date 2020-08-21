import React from "react"
import typography from "./typography.module.css"
import styles from "./centeredContent/CenteredTextAndImage.module.css"
import Graph from "../components/graphs/Graph"
import { Button } from "react-bootstrap"

export default function CenteredTextAndImage(props) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={typography.lowerLevelHeader}>Our mission</p>
        <h1 className={typography.chapterTitle}>
          Reduce methane emissions from cows
        </h1>
        <p>
          There are 1.5 billion cows on the planet that together burp out 5% of
          the world’s greenhouse gas emissions. That’s 2x more emissions than
          the world’s fleet of airplanes. Bill Gates recently said that if
          cattle were a country, they would rank third in greenhouse gas
          emissions.
        </p>
        <p>
          Volta Greentech is on a mission to work with the beef and dairy
          industry to reduce emissions to mitigate global warming. By providing
          farmers with the means to drastically reduce the methane emissions
          produced by dairy cows and beef cattle, the agriculture sector can
          take a massive leap in going sustainable.
        </p>
      </div>
      <Graph />
    </div>
  )
}
