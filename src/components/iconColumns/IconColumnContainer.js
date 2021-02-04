import React from "react"
import typography from "../typography.module.css"
import styles from "./IconColumnContainer.module.css"
import Column from "./IconColumn"
import Fade from "react-reveal/Fade"

export default function IconColumnContainer(props) {
  return (
    <div className={styles.container}>
      <Fade up>
        <p className={typography.lowerLevelHeader}>{props.lowerLevelHeader}</p>
        <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
        <p className={styles.text}>{props.text}</p>
        <p className={styles.text}>{props.text2}</p>
      </Fade>
      <div className={styles.iconRow}>
        <div className="row">
          <Column
            illustration={props.imageOne}
            title={props.titleOne}
            text={props.textOne}
            delay="250"
          />
          <Column
            illustration={props.imageTwo}
            title={props.titleTwo}
            text={props.textTwo}
            delay="500"
          />
          <Column
            illustration={props.imageThree}
            title={props.titleThree}
            text={props.textThree}
            delay="750"
          />
          <Column
            illustration={props.imageFour}
            title={props.titleFour}
            text={props.textFour}
            delay="1000"
          />
        </div>
      </div>
    </div>
  )
}
