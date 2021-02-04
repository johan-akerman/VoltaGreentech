import React from "react"
import styles from "./FeaturedIn.module.css"
import typography from "../typography.module.css"

import breakit from "../../../static/images/press/companyLogos/breakit.png"
import di from "../../../static/images/press/companyLogos/di.png"
import dn from "../../../static/images/press/companyLogos/dn.png"
import fastCompany from "../../../static/images/press/companyLogos/fastCompany.png"
import feedNavigator from "../../../static/images/press/companyLogos/feedNavigator.png"
import sifted from "../../../static/images/press/companyLogos/sifted.png"
import Fade from "react-reveal/Fade"

export default function FeaturedIn(props) {
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
              <img
                src={fastCompany}
                alt="FastCompany"
                className="img img-fluid"
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
              <img src={sifted} alt="Sifted" className="img img-fluid" />
            </a>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <a
              className={styles.article}
              href="https://www.di.se/nyheter/vill-gora-kossor-miljovanliga-tar-in-pengar-fran-northvolt-vd-n/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={di} alt="DagensIndustri" className="img img-fluid" />
            </a>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <a
              className={styles.article}
              href="https://www.dn.se/sthlm/har-odlas-alger-som-far-kor-att-fisa-mindre-metan//"
              target="_blank"
              rel="noreferrer"
            >
              <img src={dn} alt="DagensNyheter" className="img img-fluid" />
            </a>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <a
              className={styles.article}
              href="https://www.feednavigator.com/ARTICLE/2020/06/02/METHANE-REDUCING-SWEDISH-START-UP-ATTRACTS-INVESTORS"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={feedNavigator}
                alt="FeedNavigator"
                className="img img-fluid"
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
              <img src={breakit} alt="Breakit" className="img img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  )
}
