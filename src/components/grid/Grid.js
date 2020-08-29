import React from "react"
import typography from "../typography.module.css"
import LinkElement from "../link/LinkElement"
import styles from "./Grid.module.css"

export default function grid(props) {
  if (props.positionLeft) {
    return (
      <div className={styles.gridContent}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={styles.textColumn}>
              <p className={typography.lowerLevelHeader}>
                {props.lowerLevelHeader}
              </p>
              <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
              <p>{props.text}</p>
              <p>{props.text2}</p>
              <LinkElement to={props.href} text={props.link} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.imageColumn}>
              <img src={props.image} alt="grid thumbnail" />
              <p className={typography.imageCaption}>{props.caption}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.gridContent}>
      <div className="row">
        <div className="col-lg-6">
          <div className={styles.imageColumn}>
            <img src={props.image} alt="grid thumbnail" />
            <p className={typography.imageCaption}>{props.caption}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={styles.textColumn}>
            <p className={typography.lowerLevelHeader}>
              {props.lowerLevelHeader}
            </p>
            <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
            <p>{props.text}</p>
            <p>{props.text2}</p>

            <LinkElement to={props.href} text={props.link} />
          </div>
        </div>
      </div>
    </div>
  )
}
