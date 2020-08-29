/* Importing essentials */
import React from "react"

/* Importing components */
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import JobsContainer from "../components/jobsContainer/JobsContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import flask from "../../static/images/Culture_flask.jpeg"
import heroImage from "../../static/images/team/angelo.jpeg"

export default function Careers() {
  return (
    <Layout>
      <Jumbotron
        image={heroImage}
        title="Join our journey towards 0%."
        page="careers"
      />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Careers"
          chapterTitle="Want to join our mission?"
          text="Want to help solve one of the most urgent challenge facing the world today? This is an opportunity to join a company with a very exciting journey ahead. We need a lot of talent to achieve our mission."
          link="fredrik@voltagreentech.com"
          image={flask}
          caption="Team image"
        />
        <br />
        <br />
        <br />

        <JobsContainer />
      </div>
    </Layout>
  )
}
