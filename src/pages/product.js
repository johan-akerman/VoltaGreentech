/* Importing essentials */
import React from "react"

/* Importing components */
import FAQ from "../components/FAQ/FAQ"
import Table from "../components/table/ContentTable"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import Quote from "../components/quote/Quote"
// import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
// import planetMilk from "../../static/images/texts/planetMilk.png"
// import supermarket from "../../static/images/heroImages/supermarket.jpg"
import oatly from "../../static/images/oatly.png"
import map from "../../static/images/cowMap.png"

export default function Product() {
  return (
    <Layout>
      {/* <Jumbotron image={supermarket} text={planetMilk} page="product" /> */}
      <div className="layoutContainer">
        <Grid
          positionLeft={true}
          image={oatly}
          chapterTitle="Planetmilk: swedish milk, reimagined. "
          text="Planetmjölk är precis som vilken mellanmjölk som helst, förutom en viktig skillnad: det har möjliggjort att metanustläppen från en liter mjölk har minskats."
          link="Find reseller"
          href="/map/"
        />

        <Grid
          positionLeft={true}
          chapterTitle="Volta Greentech's lösning på problemet"
          text="Genom att mata kor ett naturligt tillskott av ca 100 gram röda alger tillverkade på västkusten kan Volta Greentech eliminera majoriteten av bakterierna, förbättra kornas hälsa och samtiditg minska utsläpp av växthusgaser. Bakom innovationen ligger mångårig forskning som visar den positiva effekten på korna. "
        />

        <CenteredTextAndImage
          chapterTitle="Klimatångest?"
          text="Visste du att mikroorganismer som tagit sig in i kors matsmältning idag står för 5% av de globala utsläppen av växthusgaser? Det är mer än dubbelt så mycket växthusgasutsläpp som alla världens flygplan skapar tillsammans. Bakterierna stjäl dessutom energi från korna och gör dem gasiga i magen."
        />

        <Quote
          text="If cattle were a country, they would rank third in greenhouse gas emissions."
          person="Bill Gates"
        />

        <br />
        <br />
        <br />
        <br />

        <Table />

        <br />
        <br />
        <br />

        <FAQ
          q1="Is the seaweed harmful for the cow in any way? "
          a1="No. Rather, studies show that the seaweed has positive effects on the cow’s health, wellbeing and life expectancy."
          q2="Does it really work? "
          a2="Answer"
          q3="Where does the methane go?"
          a3="Answer"
          q4="Do the cows like the Seafeed?"
          a4="Answer"
        />

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
