import React from "react"
import typography from "../typography.module.css"
import JobCard from "./JobCard"

export default function NewsContainer(props) {
  return (
    <div>
      <p className={typography.lowerLevelHeader}>Join us</p>
      <h1 className={typography.chapterTitle}>Open positions</h1>
      <p>
        If you feel that you belong at Volta Greentech but don’t see a relevant
        open position listed below. Send an email to fredrik@voltagreentech.com
      </p>

      <div className="row" style={{ marginTop: "72px" }}>
        <JobCard
          jobTitle="Production engineer"
          location="Stockholm, Sweden"
          href="/open-position/"
        />

        <JobCard
          jobTitle="Business developer"
          location="Stockholm, Sweden"
          href="/open-position/"
        />

        <JobCard
          jobTitle="Marine Biologist"
          location="Stockholm, Sweden"
          href="/open-position/"
        />

        <JobCard
          jobTitle="Head of Manufacturing"
          location="Stockholm, Sweden"
          href="/open-position/"
        />

        <JobCard
          jobTitle="Algae Cultivation Technician"
          location="Lysekil, Sweden"
          href="/open-position/"
        />

        <JobCard
          jobTitle="Open application"
          location="Stockholm, Sweden"
          href="/open-position/"
        />
      </div>
    </div>
  )
}
