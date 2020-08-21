import React from "react"
import typography from "../typography.module.css"
import { Button } from "react-bootstrap"
import solution from "../../../static/kit_solution.png"

import Card from "./Card"

export default function PressContainer(props) {
  return (
    <React.Fragment>
      <p className={typography.lowerLevelHeader}>Press</p>
      <h1 className={typography.chapterTitle}>Latest press releases</h1>

      <div className="row">
        <Card
          image={solution}
          tag="2019.06.28"
          title="Volta Greentech at Brilliant Minds 2019"
        />
        <Card
          image={solution}
          tag="2019.06.28"
          title="Volta Greentech at Brilliant Minds 2019"
        />{" "}
        <Card
          image={solution}
          tag="2019.06.28"
          title="Volta Greentech at Brilliant Minds 2019"
        />
      </div>
    </React.Fragment>
  )
}
