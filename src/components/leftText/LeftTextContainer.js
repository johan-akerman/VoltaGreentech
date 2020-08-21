import React from "react"
import typography from "../typography.module.css"
import styles from "./LeftTextContainer.module.css"

export default function LeftTextContainer(props) {
  return (
    <React.Fragment>
      <p className={typography.lowerLevelHeader}>{props.lowerLevelHeader}</p>
      <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
      <p>{props.text}</p>
      <a className={styles.link} href={props.href}>
        {props.link}
      </a>
    </React.Fragment>
  )
}
