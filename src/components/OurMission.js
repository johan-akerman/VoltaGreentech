import React from "react"
import typography from "./typography.module.css"
import styles from "./centeredContent/CenteredTextAndImage.module.css"
import { Button } from "react-bootstrap"
import ifCattleWereACountry from "../../src/images/graphs/ifCattleWereACountry_alt_1.png"
import cowsVsAirplanes from "../../src/images/graphs/cowsVsAirplanes.png"

import Fade from "react-reveal/Fade"

class OurMission extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeGraph: "ifCattleWereACountry" }
  }

  renderGraph() {
    if (this.state === "ifCattleWereACountry") {
      return (
        <img src={ifCattleWereACountry} className="img img-fluid" alt="Graph" />
      )
    } else {
      return <img src={cowsVsAirplanes} className="img img-fluid" alt="Graph" />
    }
  }

  render() {
    let graph
    let cowsVsCountriesButton
    let cowsVsAirplanesButton

    if (this.state.activeGraph === "ifCattleWereACountry") {
      graph = (
        <img src={ifCattleWereACountry} className="img img-fluid" alt="Graph" />
      )

      cowsVsCountriesButton = <h1>aaa</h1>
      cowsVsAirplanesButton = <h1>aaa</h1>
    } else {
      graph = (
        <img src={cowsVsAirplanes} className="img img-fluid" alt="Graph" />
      )
      cowsVsCountriesButton = <h1>aaa</h1>
      cowsVsAirplanesButton = <h1>aaa</h1>
    }
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Fade up>
            <p className={typography.lowerLevelHeader}>Our mission</p>
            <h1 className={typography.chapterTitle}>
              Reduce methane emissions from cows
            </h1>
            <p>
              There are around 1 billion cows on planet earth. Together they
              produce over 4% of the world’s greenhouse gas emissions, just by
              farting and burping methane gas. That’s 2x more emissions than the
              world’s fleet of airplanes.
            </p>
            <p>
              Volta Greentech is on a mission to reduce these emissions to
              mitigate global warming. By providing farmers with a fully natural
              seaweed based feed supplement to drastically reduce the methane
              emissions produced by dairy cows and beef cattle, the agriculture
              sector can take a massive leap in going sustainable.
            </p>
          </Fade>

          <Fade up delay={250}>
            <div className={typography.btnContainer}>
              <Button
                className={typography.btn}
                onClick={() =>
                  this.setState({ activeGraph: "ifCattleWereACountry" })
                }
              >
                {cowsVsCountriesButton}
              </Button>
              <Button
                className={typography.btn}
                onClick={() =>
                  this.setState({ activeGraph: "cowsVsAirplanes" })
                }
              >
                {cowsVsAirplanesButton}
              </Button>
            </div>
          </Fade>
        </div>
        <br />
        <br />

        <Fade delay={250}>
          {graph}

          <br />
          <br />
          <p className={typography.imageCaption}>
            “If cattle were a country, they would rank third in greenhouse gas
            emissions”. Graph based on{" "}
            <a
              href="https://www.gatesnotes.com/energy/my-plan-for-fighting-climate-change"
              target="_blank"
              className={typography.link}
              rel="noreferrer"
            >
              Gates Notes
            </a>
          </p>
        </Fade>
      </div>
    )
  }
}

export default OurMission
