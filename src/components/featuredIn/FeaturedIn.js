import React from "react"
import typography from "../typography.module.css"
import breakit from "../../../static/images/press/companyLogos/breakit.png"
import di from "../../../static/images/press/companyLogos/di.png"
import dn from "../../../static/images/press/companyLogos/dn.png"
import fastCompany from "../../../static/images/press/companyLogos/fastCompany.png"
import feedNavigator from "../../../static/images/press/companyLogos/feedNavigator.png"
import sifted from "../../../static/images/press/companyLogos/sifted.png"

export default function FeaturedIn(props) {
  return (
    <div className="container">
      <h2
        className={typography.lowerLevelHeader}
        style={{ textAlign: "center", paddingBottom: "24px" }}
      >
        As featured in
      </h2>

      <div className="row">
        <div className="col-6 col-md-3 col-lg-2">
          <img src={fastCompany} alt="FastCompany" className="img img-fluid" />
        </div>
        <div className="col-6 col-md-3 col-lg-2">
          <img src={sifted} alt="Sifted" className="img img-fluid" />
        </div>

        <div className="col-6 col-md-3 col-lg-2">
          <img src={di} alt="DagensIndustri" className="img img-fluid" />
        </div>

        <div className="col-6 col-md-3 col-lg-2">
          <img src={dn} alt="DagensNyheter" className="img img-fluid" />
        </div>

        <div className="col-6 col-md-3 col-lg-2">
          <img
            src={feedNavigator}
            alt="FeedNavigator"
            className="img img-fluid"
          />
        </div>

        <div className="col-6 col-md-3 col-lg-2">
          <img src={breakit} alt="Breakit" className="img img-fluid" />
        </div>
      </div>
    </div>
  )
}
