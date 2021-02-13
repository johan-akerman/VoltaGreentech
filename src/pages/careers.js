/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import CenteredTextAndImage from "../components/centeredContent/CenteredTextAndImage"
import JobsContainer from "../components/jobsContainer/JobsContainer"
import Jumbotron from "../components/jumbotron/Jumbotron"
import IconColumnContainer from "../components/iconColumns/IconColumnContainer"
import Grid from "../components/grid/Grid"

/* Importing styling */
import Layout from "../components/Layout"

export default function Careers() {
  const data = useStaticQuery(graphql`
    query {
      jumbotron: file(relativePath: { eq: "team/angelo.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      highlights: file(relativePath: { eq: "team/highlights.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconOne: file(relativePath: { eq: "illustrations/lightBulb.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconTwo: file(relativePath: { eq: "illustrations/lightning.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconThree: file(relativePath: { eq: "illustrations/heart.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconFour: file(relativePath: { eq: "illustrations/star.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Jumbotron
        jumbotronBackground={data.jumbotron.childImageSharp.fluid}
        page="careers"
      />
      <div className="layoutContainer">
        <Grid
          positionLeft={true}
          image={data.highlights.childImageSharp.fluid}
          lowerLevelHeader="Careers"
          chapterTitle="Want to join our mission?"
          text="Want to help solve one of the most urgent challenge facing the world today? This is an opportunity to join a company with a very exciting journey ahead. We need a lot of talent to achieve our mission."
          text2="If you recognize yourself in this description, see open positions below and join us on the way to a future with net-zero emissions."
          caption="Part of science team & founders at Volta Labs, Karolinska Institute, Stockholm Sweden"
        />

        <IconColumnContainer
          lowerLevelHeader="VALUES & CULTURE"
          chapterTitle="OUR VALUES AND CULTURE"
          imageOne={data.iconOne.childImageSharp.fluid}
          titleOne="CHANGEMAKERS BY NATURE"
          textOne="We believe in the power of the individual, and are here to make a real impact."
          imageTwo={data.iconTwo.childImageSharp.fluid}
          titleTwo="DATA DRIVEN &
          PLAYFUL"
          textTwo="When you possess the knowledge, you can be creative and explain so people can understand. “Creativity is intelligence having fun.”"
          imageThree={data.iconThree.childImageSharp.fluid}
          titleThree="OPEN-HEARTED & INCLUSIVE"
          textThree="To spread our beliefs and our knowledge, we have to challenge the status quo. We are not activists; we do not hate. We include people to join for a better tomorrow."
          imageFour={data.iconFour.childImageSharp.fluid}
          titleFour="DARE TO BE UNEXPECTED"
          textFour="We dare to differ and do the unexpected; we are always open to collaborations to reach common goals. We marry passion with passion."
        />

        <JobsContainer id="openPositions" />
      </div>
    </Layout>
  )
}
