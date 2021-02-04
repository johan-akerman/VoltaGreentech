import React from "react"
import typography from "../typography.module.css"
import { Link } from "gatsby"

import styles from "./Grid.module.css"
import Fade from "react-reveal/Fade"
import CustomButton from "../buttons/circleButton/CircleButton.js"

export default function grid(props) {
  if (props.positionLeft) {
    return (
      <div className={styles.gridContent}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={styles.textColumn}>
              <Fade up delay={275}>
                <p className={typography.lowerLevelHeader}>
                  {props.lowerLevelHeader}
                </p>
                <h1 className={typography.chapterTitle}>
                  {props.chapterTitle}
                </h1>
                <p>{props.text}</p>
                <p>{props.text2}</p>

                <Link to={props.href}>
                  {" "}
                  <CustomButton text={props.link} to={props.href} />
                </Link>
              </Fade>
            </div>
          </div>

          <div className="col-lg-6">
            <Fade up>
              <div className={styles.imageColumn}>
                <img src={props.image} alt="grid thumbnail" />
                <p className={typography.imageCaption}>{props.caption}</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.gridContent}>
      <div className="row">
        <div className="col-lg-6">
          <Fade up>
            <div className={styles.imageColumn}>
              <img src={props.image} alt="grid thumbnail" />
              <p className={typography.imageCaption}>{props.caption}</p>
            </div>
          </Fade>
        </div>
        <div className="col-lg-6">
          <div className={styles.textColumn} id={styles.rightTextColumn}>
            <Fade up delay={275}>
              <p className={typography.lowerLevelHeader}>
                {props.lowerLevelHeader}
              </p>
              <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
              <p>{props.text}</p>
              <p>{props.text2}</p>
              <Link to={props.href}>
                {" "}
                <CustomButton text={props.link} to={props.href} />
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
