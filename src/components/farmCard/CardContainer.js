import React from "react"
import typography from "../typography.module.css"
import styles from "./CardContainer.module.css"
import Card from "./Card"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"

export default function CenteredTextAndImage(props) {
  const data = useStaticQuery(graphql`
    query {
      ag: file(relativePath: { eq: "ag.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      fotografiska: file(relativePath: { eq: "fotografiska.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <Fade up>
        <p className={typography.lowerLevelHeader}></p>
        <h1 className={typography.chapterTitle}>Restaurants</h1>
        <p>
          Meat on the menu is delivered by Volta Greentech’s customer Tre Bönder
          where on their farm in the forests of Näshulta cattle are snacking on
          seaweed supplement Volta Seafeed to burp less methane emissions.
        </p>
      </Fade>
      <div className="row">
        <Card
          gatsbyImage={data.ag.childImageSharp.fluid}
          location="Stockholm, Sweden"
          title="Restaurang AG"
          text="For years, Restaurang AG has been one of the best steak restaurants in Sweden, led by celebrity chef Johan Jureskog and sommelier and partner Klas Ljungkvist."
          href="https://restaurangag.se/"
          delay="250"
        />

        <Card
          gatsbyImage={data.fotografiska.childImageSharp.fluid}
          location="Stockholm, Sweden"
          title="Fotografiska"
          text="In Fotografiska's award-winning restaurants, good and well-cooked food is always served according to the season. Always enjoyable. Always durable. Our herbal kitchen was praised in 2021 with Guide Michelin Green Star and was named Sweden's best and most sustainable restaurant by 360 Eat Guide in 2021"
          href="https://www.fotografiska.com/sto"
          delay="500"
        />
      </div>
    </div>
  )
}
