import React from "react"
import typography from "../typography.module.css"
import styles from "./CardContainer.module.css"
import Card from "./Card"
import brilliantMinds from "../../../static/articles/brilliantMinds.png"
import solution from "../../../static/articles/solution.png"
import flask from "../../../static/articles/flask.png"

export default function CenteredTextAndImage(props) {
  return (
    <div className={styles.container}>
      <p className={typography.lowerLevelHeader}>Press</p>
      <h1 className={typography.chapterTitle}>Latest press releases</h1>
      <div className="row">
        <Card
          image={brilliantMinds}
          title="Swedish start-up tackling methane emissions in cattle"
          date="2020.06.02"
          href="https://example.com"
        />
        <Card
          image={solution}
          title="This factory is growing a new kind of food for cows"
          date="2020.06.02"
          href="https://example.com"
        />
        <Card
          image={flask}
          title="The startup waging war against cows farts"
          date="2020.06.02"
          href="https://example.com"
        />
      </div>
    </div>
  )
}
