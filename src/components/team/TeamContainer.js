import React from "react"
import typography from "../typography.module.css"

import Card from "./TeamMemberCard"
import styles from "./TeamMemberCard.module.css"

import angelo from "../../../static/images/team/angelo.jpeg"
// import leo from "../../../static/images/team/leo.jpg"

import fredrik from "../../../static/images/team/fredrik.jpg"

export default function teamContainer(props) {
  return (
    <div className={styles.container}>
      <p className={typography.lowerLevelHeader}>Founders</p>
      <h1 className={typography.chapterTitle}>Meet the founders</h1>
      <p style={{ maxWidth: "750px" }}>
        Volta was established in 2018 by a team of three founders with one goal
        in common: save the environment.
      </p>
      <div className="row">
        <Card
          image={fredrik}
          title="Fredrik Åkerman"
          position="Co-founder, CEO"
          email="fredrik@voltagreentech.com"
        />
        <Card
          image={fredrik}
          title="Leo Wezelius"
          position="Co-founder, CMO"
          email="leo@voltagreentech.com"
        />{" "}
        <Card
          image={angelo}
          title="Angelo Demeter"
          position="Co-founder, CTO"
          email="angelo@voltagreentech.com"
        />
      </div>
    </div>
  )
}
