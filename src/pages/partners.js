/* Importing essentials */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* Importing components */
import Jumbotron from "../components/jumbotron/Jumbotron"
/* Importing styling */
import Layout from "../components/Layout"
import Grid from "../components/grid/Grid"
import CardContainer from "../components/farmCard/CardContainer"

export default function Farms() {
  const data = useStaticQuery(graphql`
    query {
      jumbotron: file(relativePath: { eq: "farms.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      ag: file(relativePath: { eq: "ag.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      leo_and_angelo: file(relativePath: { eq: "team/leo_and_angelo.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      production: file(relativePath: { eq: "production.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconOne: file(relativePath: { eq: "illustrations/seaweed.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconTwo: file(relativePath: { eq: "illustrations/heart.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconThree: file(relativePath: { eq: "illustrations/lightBulb.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      iconFour: file(relativePath: { eq: "illustrations/factory.png" }) {
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
        page="farms"
      />
      <div className="layoutContainer">
        <Grid
          positionLeft={true}
          image={data.jumbotron.childImageSharp.fluid}
          chapterTitle="Local Swedish beef from the forests of Näshulta"
          text="From Tre Bönder you can buy high quality beef from a local farm that is likely to be one of the
          most climate friendly beef farms in the world. At the farm animals are snacking on locally
          produced seaweed produced by Volta Greentech to burp less methane emissions. Tre Bönders
          focus is animal welfare and sustainability."
          link="Read more"
          caption=""
          href="/partners/tre-bonder"
        />

        {/* <CardContainer /> */}

        <br />
        <br />
      </div>
    </Layout>
  )
}
