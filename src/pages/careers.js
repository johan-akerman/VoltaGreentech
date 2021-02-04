/* Importing essentials */
import React from "react"

/* Importing components */
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import JobsContainer from "../components/jobsContainer/JobsContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import IconColumnContainer from "../components/iconColumns/IconColumnContainer"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import flask from "../../static/images/Culture_flask.jpeg"
import heroImage from "../../static/images/team/angelo.jpeg"
import heart from "../../static/images/illustrations/heart.svg"

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
          caption="Angelo in the lab"
        />

        <IconColumnContainer
          lowerLevelHeader="VALUES & CULTURE"
          chapterTitle="OUR VALUES AND CULTURE"
          imageOne={heart}
          titleOne="CHANGEMAKERS BY NATURE"
          textOne="We believe in the power of the individual, and are here to make a real impact."
          imageTwo={heart}
          titleTwo="DATA DRIVEN &
          PLAYFUL"
          textTwo="When you possess knowledge you have the ability to be creative and explain so people can understand. “Creativity is intelligence having fun”."
          imageThree={heart}
          titleThree="OPEN-HEARTED & INCLUSIVE"
          textThree="To spread our believes and our knowledge we have to challenge the status quo. We are not activists, we do not hate. We include people to join for a better tomorrow."
          imageFour={heart}
          titleFour="DARE TO BE UNEXPECTED"
          textFour="We dare to differ and do the unexpected, we are always open for collaborations to reach common goals. We marry passion with passion."
        />

        <JobsContainer id="openPositions" />
      </div>
    </Layout>
  )
}
