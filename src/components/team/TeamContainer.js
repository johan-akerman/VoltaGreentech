import React from "react"
import typography from "../typography.module.css"
import solution from "../../../static/images/team/angelo.jpeg"
import Card from "./TeamMemberCard"

export default function teamContainer(props) {
  return (
    <React.Fragment>
      <p className={typography.lowerLevelHeader}>Founders</p>
      <h1 className={typography.chapterTitle}>Meet the founders</h1>
      <p>
        Volta was established in 2018 by a team of three founders with one goal
        in common: save the environment.
      </p>
      <div className="row">
        <Card
          image={solution}
          title="Fredrik Åkerman"
          position="Co-founder, CEO"
          email="fredrik@voltagreentech.com"
        />
        <Card
          image={solution}
          title="Leo Wezelius"
          position="Co-founder, CMO"
          email="leo@voltagreentech.com"
        />{" "}
        <Card
          image={solution}
          title="Angelo Demeter"
          position="Co-founder, CTO"
          email="angelo@voltagreentech.com"
        />
      </div>
    </React.Fragment>
  )
}
