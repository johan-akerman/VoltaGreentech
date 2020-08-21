import React from "react"
import typography from "../typography.module.css"
import styles from "./IconColumnContainer.module.css"
import Column from "./IconColumn"
import illustrationCow from "../../../static/illustrations/cow.png"
import illustrationFarmer from "../../../static/illustrations/farmer.png"
import illustrationSeaweed from "../../../static/illustrations/seaweed.png"

export default function IconColumnContainer(props) {
  return (
    <div className={styles.container}>
      <p className={typography.lowerLevelHeader}>{props.lowerLevelHeader}</p>
      <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
      <p className={styles.text}>{props.text}</p>
      <div className="row">
        <Column illustration={illustrationSeaweed} />
        <Column illustration={illustrationFarmer} />
        <Column illustration={illustrationCow} />
        <Column illustration={illustrationFarmer} />
      </div>
    </div>
  )
}
