import React from "react"
import Layout from "../components/Layout"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"

import IconColumnContainer from "../components/columns/IconColumnContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import heroImage from "../../static/Culture_flask.jpeg"
import OpenPositions from "../components/openPositions/OpenPositions"
import NewsContainer from "../components/jobsContainer/NewsContainer"

export default function Careers() {
  return (
    <Layout>
      <Jumbotron image={heroImage} />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Careers"
          chapterTitle="Want to join our mission?"
          text="Want to help solve one of the most urgent challenge facing the world today? This is an opportunity to join a company with a very exciting journey ahead. We need a lot of talent to achieve our mission."
          link="fredrik@voltagreentech.com"
          image={heroImage}
          caption="Team image"
        />

        <IconColumnContainer
          lowerLevelHeader="Our values"
          chapterTitle="Our ethos"
          text="At Volta Greentech, we believe that with the right team, we can change the future. For success, it is crucial to recruit world-class experts and highly driven individuals who want to join our mission. Are you a fit?"
        />
        <NewsContainer />
      </div>
    </Layout>
  )
}
