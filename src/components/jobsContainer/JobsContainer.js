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
          jobTitle="Production Technician - Paid Internship"
          location="Lysekil, Sweden"
          href="/open-positions/production_technician"
          delay="000"
        />

        <JobCard
          jobTitle="Macroalgae physiologist"
          location="Stockholm, Sweden"
          href="/open-positions/macroalgae_physiologist"
          delay="250"
        />

        <JobCard
          jobTitle="Process Design Engineer"
          location="Stockholm or Göteborg, Sweden"
          href="/open-positions/process-design-engineer"
          delay="500"
        />

        <JobCard
          jobTitle="Business developer"
          location="Stockholm, Sweden"
          href="/open-positions/business_developer"
          delay="750"
        />

        <JobCard
          jobTitle="Marine Biologist"
          location="Stockholm, Sweden"
          href="/open-positions/marine_biologist"
          delay="1000"
        />

        <JobCard
          jobTitle="Head of Manufacturing"
          location="Stockholm, Sweden"
          href="/open-positions/head_of_manufacturing"
          delay="1250"
        />

        <JobCard
          jobTitle="Factory Technician"
          location="Lysekil, Sweden"
          href="/open-positions/factory_technician"
          delay="1500"
        />
      </div>
    </div>
  )
}
