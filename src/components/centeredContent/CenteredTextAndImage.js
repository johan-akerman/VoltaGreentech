import React from "react"
import typography from "../typography.module.css"
import styles from "./CenteredTextAndImage.module.css"
import image from "../../../static/factory_01_concept.jpg"
import LinkElement from "../link/LinkElement"

export default function CenteredTextAndImage(props) {
  return (
    <React.Fragment>
      <div className={styles.textContainer}>
        <p className={typography.lowerLevelHeader}>{props.lowerLevelHeader}</p>
        <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
        <p>{props.text}</p>
        <LinkElement to={props.href} text={props.link} />
      </div>
      <img className={styles.img} src={props.image} />
      <p className={typography.imageCaption}>{props.caption}</p>
    </React.Fragment>
  )
}
