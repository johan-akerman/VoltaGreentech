import React from "react"
import typography from "../typography.module.css"
import JobCard from "./JobCard"

export default function NewsContainer(props) {
  return (
    <div>
      <p className={typography.lowerLevelHeader}>Join us</p>
      <h1 className={typography.chapterTitle}>Open positions</h1>
      <p style={{ maxWidth: "750px" }}>
        If you feel that you belong at Volta Greentech but don’t see a relevant
        open position listed below. Send an email to fredrik@voltagreentech.com.
      </p>

      <div className="row" style={{ marginTop: "72px" }}>
        <JobCard
          jobTitle="Production engineer"
          location="Stockholm, Sweden"
          href="/open-positions/production_engineer"
        />

        <JobCard
          jobTitle="Business developer"
          location="Stockholm, Sweden"
          href="/open-positions/business_developer"
        />

        <JobCard
          jobTitle="Marine Biologist"
          location="Stockholm, Sweden"
          href="/open-positions/marine_biologist"
        />

        <JobCard
          jobTitle="Head of Manufacturing"
          location="Stockholm, Sweden"
          href="/open-positions/head_of_manufacturing"
        />

        <JobCard
          jobTitle="Algae Cultivation Technician"
          location="Lysekil, Sweden"
          href="/open-positions/algae_cultivation_technician"
        />
      </div>
    </div>
  )
}
