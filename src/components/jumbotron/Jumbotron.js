import React from "react"
import typography from "../typography.module.css"
import styles from "./Jumbotron.module.css"
import arrow from "../../../static/illustrations/scrollArrow.png"

export default function Jumbotron(props) {
  let height = "95vh"

  if (props.fullScreen === "true") {
    height = "95vh"
  }

  function generateArrow() {
    return (
      <div className={styles.jumbotronFooter}>
        <img src={arrow} />
      </div>
    )
  }

  return (
    <div
      className={styles.jumbotronContainer}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(20, 21, 23, 0.65), rgba(20, 21, 23, 1)), url(${props.image})`,
        height: height,
      }}
    >
      <div className={styles.jumbotronContent}>
        <h1 className={typography.heroTitle}>{props.title}</h1>
        <p>{props.text}</p>
        <br></br>
      </div>
      {generateArrow()}
    </div>
  )
}
