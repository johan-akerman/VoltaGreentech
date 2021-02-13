import React from "react"
import typography from "../typography.module.css"
import Img from "gatsby-image"

import styles from "./Grid.module.css"
import Fade from "react-reveal/Fade"
import LinkElement from "../buttons/link/LinkElement"

export default function grid(props) {
  if (props.positionLeft) {
    return (
      <div className={styles.gridContent}>
        <div className="row">
          <div className="col-md-12 col-lg-6">
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

                <LinkElement to={props.href} text={props.link} />
              </Fade>
            </div>
          </div>

          <div className="col-md-12 col-lg-6">
            <Fade up>
              <div className={styles.imageColumn}>
                <Img
                  style={{ height: "100%", width: "100%", marginBottom: 0 }}
                  imgStyle={{ objectFit: "contain" }}
                  title="image"
                  alt="Greek food laid out on table"
                  fluid={props.image}
                />
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
        <div className="col-md-12 col-lg-6">
          <Fade up>
            <div className={styles.imageColumn}>
              <Img
                style={{ height: "100%", width: "100%", marginBottom: 0 }}
                imgStyle={{ objectFit: "contain" }}
                title="image"
                alt="Greek food laid out on table"
                fluid={props.image}
              />
              <p className={typography.imageCaption}>{props.caption}</p>
            </div>
          </Fade>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className={styles.textColumn} id={styles.rightTextColumn}>
            <Fade up delay={275}>
              <p className={typography.lowerLevelHeader}>
                {props.lowerLevelHeader}
              </p>
              <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
              <p>{props.text}</p>
              <p>{props.text2}</p>
              <LinkElement to={props.href} text={props.link} />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
