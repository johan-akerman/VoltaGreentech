import React from "react"
import typography from "../components/typography.module.css"

import Layout from "../components/Layout"
import CardContainer from "../components/pressCard/CardContainer"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import Jumbotron from "../components/jumbotron/Jumbotron"
import heroImage from "../../static/press.jpeg"

import NewsContainer from "../components/newsContainer/NewsContainer"

export default function Press() {
  return (
    <Layout>
      <Jumbotron image={heroImage} />
      <div className="layoutContainer">
        <CardContainer />

        <NewsContainer />
        <CenteredTextAndImage
          lowerLevelHeader="Press"
          chapterTitle="Press contact and press kit"
          text="A collection of assets for our product, production, team and logos. For press inquires, contact Fredrik Åkerman, Co- founder & CEO, at fredrik@voltagreentech.com. "
        />

        <div className={typography.btnContainer}>
          <a className={typography.btn}>Download</a>
        </div>
      </div>
    </Layout>
  )
}
