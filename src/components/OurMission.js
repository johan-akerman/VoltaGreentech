import React from "react"
import typography from "./typography.module.css"
import styles from "./centeredContent/CenteredTextAndImage.module.css"
import CustomButton from "../components/buttons/circleButton/CircleButton"
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

    if (this.state.activeGraph === "ifCattleWereACountry") {
      graph = (
        <img src={ifCattleWereACountry} className="img img-fluid" alt="Graph" />
      )
    } else {
      graph = (
        <img src={cowsVsAirplanes} className="img img-fluid" alt="Graph" />
      )
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
              There are around one billion cows on the planet. Together they
              produce over 4% of the world’s greenhouse gas emissions just by
              farting and burping methane gas. That’s 2x more emissions than the
              world’s fleet of airplanes.
            </p>
            <p>
              Volta Greentech is on a mission to reduce these emissions to
              mitigate global warming. By providing farmers with our feed
              additive Lome™, we are together with our customers drastically
              reducing the methane emissions produced by cows.
            </p>
          </Fade>

          <Fade up delay={250}>
            <div className={typography.btnContainer}>
              <div
                className={typography.btn}
                onClick={() =>
                  this.setState({ activeGraph: "ifCattleWereACountry" })
                }
              >
                <CustomButton text="Cows vs Countries" />
              </div>

              <div
                className={typography.btn}
                onClick={() =>
                  this.setState({ activeGraph: "cowsVsAirplanes" })
                }
              >
                <CustomButton text="Cows vs Airplanes" />
              </div>
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
