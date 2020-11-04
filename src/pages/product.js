/* Importing essentials */
import React from "react"

/* Importing components */
import FAQ from "../components/FAQ/FAQ"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
// import Jumbotron from "../components/jumbotron/Jumbotron"
import Grid from "../components/grid/Grid"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
// import planetMilk from "../../static/images/texts/planetMilk.png"
// import supermarket from "../../static/images/heroImages/supermarket.jpg"
import planetMilk from "../../static/images/planetMilk.png"
import howWeDoIt from "../../static/images/illustrations/howWeDoIt.png"
import graph2 from "../../static/images/illustrations/ifCattleWereACountry.png"


export default function Product() {
  return (
    <Layout>
      {/* <Jumbotron image={supermarket} text={planetMilk} page="product" /> */}
      <div className="layoutContainer">
        <Grid
          positionLeft={true}
          image={planetMilk}
          chapterTitle="Same food. Better for the planet. "
          text="Planetfood är precis som vilken mat som helst, förutom en viktig skillnad: det har möjliggjort att metanustläppen  har minskats med upp till 80%."
          link="Find reseller"
          href="/map/"
        />

        <Grid
          positionLeft={true}
          image={graph2}
          chapterTitle="When cows burp less, the world gets a lot better"
          text="Visste du att mikroorganismer som tagit sig in i kors matsmältning idag står för 5% av de globala utsläppen av växthusgaser? Det är mer än dubbelt så mycket växthusgasutsläpp som alla världens flygplan skapar tillsammans. Bakterierna stjäl dessutom energi från korna och gör dem gasiga i magen.
          "
        />

        {/* <OurMission /> */}

        <CenteredTextAndImage
          chapterTitle="What makes Planetmilk 80% methane reduced?"
          text="  Genom att mata kor ett naturligt tillskott av ca 100 gram röda
          alger tillverkade på västkusten kan Volta Greentech eliminera majoriteten av bakterierna, minska utsläpp av växthusgaser och förbättra kornas hälsa.         Bakom innovationen ligger mångårig forskning som visar den
          positiva effekten på korna."
          image={howWeDoIt}
        />

        <br />
        <br />
        <br />
        <br />

        <FAQ
          q1="Does the Planetmilk taste the same as regular milk? "
          a1="No. Rather, studies show that the seaweed has positive effects on the cow’s health, wellbeing and life expectancy."
          q2="Does Planetmilk cost more than regular milk?"
          a2="Answer"
          q3="Is it safe to consume methane reduced milk?"
          a3="Answer"
          q4="Will you launch other methane reduced products as well?"
          a4="Answer"
        />
      </div>
    </Layout>
  )
}
