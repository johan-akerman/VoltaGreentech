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
          jobTitle="R&D Director"
          location="Stockholm, Sweden"
          href="/open-positions/R&D_director"
          delay="000"
        />
        <JobCard
          jobTitle="Research Scientist"
          location="Stockholm, Sweden"
          href="/open-positions/research_scientist"
          delay="250"
        />
        <JobCard
          jobTitle="Research Assistant"
          location="Stockholm, Sweden"
          href="/open-positions/research_assistant"
          delay="500"
        />

        <JobCard
          jobTitle="Cultivation Operator - Paid Internship"
          location="Lysekil, Sweden"
          href="/open-positions/cultivation_operator_paid_internship"
          delay="750"
        />

        <JobCard
          jobTitle="Process Design Engineer"
          location="Stockholm, Sweden"
          href="/open-positions/process-design-engineer"
          delay="1000"
        />

        <JobCard
          jobTitle="Business developer"
          location="Stockholm, Sweden"
          href="/open-positions/business_developer"
          delay="1250"
        />

        <JobCard
          jobTitle="R&D Assistant"
          location="Lysekil, Sweden"
          href="/open-positions/R&D_assistant"
          delay="1500"
        />
      </div>
    </div>
  )
}
