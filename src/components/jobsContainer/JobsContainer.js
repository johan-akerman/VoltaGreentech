import React from "react"
import typography from "../typography.module.css"
import JobCard from "./JobCard"
import Fade from "react-reveal/Fade"

export default function NewsContainer(props) {
  return (
    <div>
      <Fade up>
        <p className={typography.lowerLevelHeader}>Join us</p>
        <h1 className={typography.chapterTitle}>Open positions</h1>
        <p style={{ maxWidth: "750px" }}>
          If you feel that you belong at Volta Greentech but don’t see a
          relevant open position listed below. Send an email to
          careers@voltagreentech.com.
        </p>
      </Fade>

      <div className="row" style={{ marginTop: "72px" }}>
        <JobCard
          jobTitle="Research Scientist"
          location="Stockholm, Sweden"
          href="/open-positions/research_scientist"
          delay="000"
        />
      </div>
    </div>
  )
}
