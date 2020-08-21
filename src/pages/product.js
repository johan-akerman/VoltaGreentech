import React from "react"
import Layout from "../components/Layout"
import milk from "../../static/illustrations/milk.png"
import hero from "../../static/milk.png"
import FAQ from "../components/FAQ/FAQ"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import Graph from "../components/graphs/Graph"
import Table from "../components/table/ContentTable"
import Jumbotron from "../components/jumbotron/Jumbotron"

import Grid from "../components/grid/Grid"
import oatly from "../../static/oatly.png"
import map from "../../static/cowMap.png"
import diagram from "../../static/illustrations/diagram.png"
import production from "../../static/production.png"

export default function Product() {
  return (
    <Layout>
      <Jumbotron image={hero} />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Our first consumer product"
          chapterTitle="Have you met Planetmjölk? It's swedish milk, reimagined. "
          text="Planetmjölk är precis som vilken mellanmjölk som helst, förutom en viktig skillnad: det har möjliggjort att metanustläppen från en liter mjölk har minskats."
          image={production}
          caption="Image caption goes here"
        />

        <CenteredTextAndImage
          chapterTitle="Klimatångest?"
          text="Visste du att mikroorganismer som tagit sig in i kors matsmältning idag står för 5% av de globala utsläppen av växthusgaser? Det är mer än dubbelt så mycket växthusgasutsläpp som alla världens flygplan skapar tillsammans. Bakterierna stjäl dessutom energi från korna och gör dem gasiga i magen."
        />

        <Graph />

        <Grid
          positionLeft={true}
          image={diagram}
          chapterTitle="Volta Greentech's lösning på problemet"
          text="Genom att mata kor ett naturligt tillskott av ca 100 gram röda alger tillverkade på västkusten kan Volta Greentech eliminera majoriteten av bakterierna, förbättra kornas hälsa och samtiditg minska utsläpp av växthusgaser. Bakom innovationen ligger mångårig forskning som visar den positiva effekten på korna. "
        />

        <Table />

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img className="img img-fluid" src={milk} />
          </div>
          <div className="col-lg-6 col-md-12">
            <FAQ />
          </div>
        </div>

        <CenteredTextAndImage
          chapterTitle="Mu eller aldrig"
          text="När du väljer Planetmjölk möjliggör du en ljusare framtid. Bli en del av förändringen."
          link="Hitta närmsta återförsäljare"
          href="/map/"
          image={map}
          caption="Each cow represent one store that sell Planetmjölk"
        />
      </div>
    </Layout>
  )
}
