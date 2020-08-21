import React from "react"
import typography from "../typography.module.css"
import styles from "./OpenPositions.module.css"

import OpenPositionCard from "./OpenPositionCard"

export default function OpenPositions(props) {
  return (
    <React.Fragment>
      <p className={typography.lowerLevelHeader}>Join us</p>
      <h1 className={typography.chapterTitle}>Open positions</h1>
      <p>
        Feel like you belong at Volta but can't find relevant open position?
        Send an email to fredrik@voltagreentech.com.
      </p>

      <OpenPositionCard title="asdf" location="Stockholm" time="Full time" />
      <OpenPositionCard title="asdf" location="Stockholm" time="Full time" />
    </React.Fragment>
  )
}
