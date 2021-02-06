/* Importing essentials */
import React from "react"

/* Importing components */
import Jumbotron from "../components/jumbotron/Jumbotron"
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import IconColumnContainer from "../components/iconColumns/IconColumnContainer"
import FAQ from "../components/faq/FAQ"
import Grid from "../components/grid/Grid"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import backgroundImage from "../../static/images/solution.jpeg"
import asparagopsis from "../../static/images/asparagopsis.png"
import seaweed from "../../static/images/heroImages/seaweed.jpg"
import heart from "../../static/images/illustrations/heart.svg"

export default function Solution() {
  return (
    <Layout>
      <Jumbotron
        image={seaweed}
        title="Straight out of the bottom of the ocean."
        page="solution"
      />
      <div className="layoutContainer">
        <CenteredTextAndImage
          lowerLevelHeader="Our solution"
          chapterTitle="A fully natural seaweed-based feed supplement for cows"
          text="Volta Seafeed is a feed supplement which when fed to cows at a daily dose of 100 grams reduces their enteric methane emissions (farts and burps) by up to 90%. Based on the red seaweed Asparagopsis taxiformis that contains high amounts of bioactive compounds blocking one of the enzymes needed by the methane producing bacteria in the rumen, it naturally prevents enteric methane production."
          image={backgroundImage}
          caption="A cows daily dose of Volta Seafeed"
        />

        <Grid
          positionLeft={true}
          image={asparagopsis}
          lowerLevelHeader="Seaweed"
          chapterTitle="About asparagopsis taxiformis"
          text="Originally discovered in 2015, the unprecedented methane reducing properties of the red seaweed Asparagopsis taxiformis has since been validated through years of research at numerous top universities and research institutions around the world. As it has never been produced at scale before, the team at Volta Greentech is focused on developing a cultivation recipe and scalable land based production of Asparagopsis."
          link="About our production"
          href="/solution/"
          caption="Asparagopsis taxiformis growing in Volta Labs"
        />
        <IconColumnContainer
          lowerLevelHeader="How it works"
          chapterTitle="It's not magic. It's science."
          text="Microbes in the rumen of the cow helps their digestion of food, a biological process that relases hydrogen and carbon dioxide (CO2). Methane (CH4) is formed when an enzyme in the rumen combines these two gases. Supplementing around 100 grams of Asparagopsis taxiformis to the cows diet, which naturally contains high amounts of natural compounds that supresses this enzyme, up to 90% of methane emissions are reduced."
          text2="Only 100 grams per day reduces up to 90% of methane emissions – too good to be true? Nope. Backed by over 6 years of research, Asparagopsis’s ability to reduce methane production in cows has been scientifically proven, both in terms of efficiency and safety. Designed to be seamlessly implemented at any farm, Volta Seafeed is easily mixed into existing feed."
          imageOne={heart}
          titleOne="Cows produce methane"
          textOne="Methane is a byproduct of the tough fibrous foods the cows  eat.  By default, grass eating cows produce less methane."
          imageTwo={heart}
          titleTwo="Supplement ~100g"
          textTwo="Farmer supplements around 100g of Volta Seafeed to the cow’s daily feed intake."
          imageThree={heart}
          titleThree="Immediate effect"
          textThree="The seaweeds natural compounds inhibit the methane producing bacteria, up to 80% of enteric methane production is eliminated."
          imageFour={heart}
          titleFour="proven Safe for animals & humans"
          textFour="A majority of the enteric methane emissions are reduced, energy is freed up for digestion."
        />

        <FAQ
          title="common questions about the seafeed"
          q1="Is the seaweed harmful for the cow?"
          a1="No. Preliminary research studies have actually shown that the seaweed has positive effects on the cow’s health, wellbeing and life expectancy."
          q2="Does it really work? "
          a2="Yes. The efficiency and safety of the solution has been thoroughly validated by more than six years of research from a range of world leading research institutions including CSIRO Australia, University of California Davis, SLU Sweden."
          q3="What is methane?"
          a3="Methane is a greenhouse gas around 25 times more potent than carbon dioxide at warming the atmosphere. Thanfully, it’s much less short lived than carbon dioxide. This means that reducing methane emissions from cows pays off directly in pulling the break on global warming."
          q4="Where does the methane go?"
          a4="Methane is formed when an enzyme in the cows rumen combines carbon dioxide and hydrogen. Absorbing up to 12% of the energy a cows gets from its feed, enteric methane (CH4) is considered an unwanted byproduct in the cows digestion. The natural bioactive compounds in the seaweed Asparagopsis supresses this enzyme and frees up energy for digestion. It’s imporant to note that free ranging grass eating cows by default produce less methane than non free ranging cows. This is mainly due to the fibrous food that the non free ranging cows eat."
          q5="Do the cows like the Seafeed?"
          a5="Yes. In the right quantity, the cows actually love it. This is likely due to the abundance of important minerals contained in the seaweed."
        />
      </div>
    </Layout>
  )
}
