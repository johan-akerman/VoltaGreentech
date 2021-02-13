import React from "react"
import styles from "./FeaturedIn.module.css"
import typography from "../typography.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

export default function FeaturedIn(props) {
  const data = useStaticQuery(graphql`
    query {
      fastCompany: file(
        relativePath: { eq: "newsCompanyLogos/fastCompany.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      sifted: file(relativePath: { eq: "newsCompanyLogos/sifted.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      dagensIndustri: file(relativePath: { eq: "newsCompanyLogos/di.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      dagensNyheter: file(relativePath: { eq: "newsCompanyLogos/dn.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      feedNavigator: file(
        relativePath: { eq: "newsCompanyLogos/feedNavigator.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      breakit: file(relativePath: { eq: "newsCompanyLogos/breakit.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <Fade up>
      <div className="container">
        <h2
          className={typography.lowerLevelHeader}
          style={{ textAlign: "center", paddingBottom: "24px" }}
        >
          As featured in
        </h2>

        <div className="row">
          <div className="col-6 col-md-3 col-lg-2">
            <a
              className={styles.article}
              href="https://www.fastcompany.com/90510673/this-factory-is-growing-a-new-kind-of-food-for-cows-a-seaweed-that-reduces-their-burps"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                style={{ height: "100%", width: "100%", marginBottom: 0 }}
                imgStyle={{ objectFit: "contain" }}
                fluid={data.fastCompany.childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <a
              className={styles.article}
              href="https://sifted.eu/articles/volta-greentech-cows/"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                style={{ height: "100%", width: "100%", marginBottom: 0 }}
                imgStyle={{ objectFit: "contain" }}
                fluid={data.sifted.childImageSharp.fluid}
              />
            </a>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <a
              className={styles.article}
              href="https://www.di.se/nyheter/vill-gora-kossor-miljovanliga-tar-in-pengar-fran-northvolt-vd-n/"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                style={{ height: "100%", width: "100%", marginBottom: 0 }}
                imgStyle={{ objectFit: "contain" }}
                fluid={data.dagensIndustri.childImageSharp.fluid}
              />
            </a>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <a
              className={styles.article}
              href="https://www.dn.se/sthlm/har-odlas-alger-som-far-kor-att-fisa-mindre-metan//"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                style={{ height: "100%", width: "100%", marginBottom: 0 }}
                imgStyle={{ objectFit: "contain" }}
                fluid={data.dagensNyheter.childImageSharp.fluid}
              />
            </a>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <a
              className={styles.article}
              href="https://www.feednavigator.com/ARTICLE/2020/06/02/METHANE-REDUCING-SWEDISH-START-UP-ATTRACTS-INVESTORS"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                style={{ height: "100%", width: "100%", marginBottom: 0 }}
                imgStyle={{ objectFit: "contain" }}
                fluid={data.feedNavigator.childImageSharp.fluid}
              />
            </a>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <a
              className={styles.article}
              href="https://www.breakit.se/artikel/21221/de-ska-minska-kornas-utslapp-med-sjogras-backas-av-northvolt-grundaren"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                style={{ height: "100%", width: "100%", marginBottom: 0 }}
                imgStyle={{ objectFit: "contain" }}
                fluid={data.breakit.childImageSharp.fluid}
              />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  )
}
