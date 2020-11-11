import React from "react"
import typography from "./typography.module.css"
import styles from "./centeredContent/CenteredTextAndImage.module.css"
import { Button } from "react-bootstrap"
import ifCattleWereACountry from "../../static/images/illustrations/ifCattleWereACountry.png"
import cowsVsAirplanes from "../../static/images/illustrations/cowsVsAirplanes.png"
import cowsVsAirplanesMarked from "../../static/images/illustrations/cowsVsAirplanesMarked.png"
import cowsVsAirplanesUnmarked from "../../static/images/illustrations/cowsVsAirplanesUnmarked.png"
import cowsVsCountriesMarked from "../../static/images/illustrations/cowsVsCountriesMarked.png"
import cowsVsCountriesUnmarked from "../../static/images/illustrations/cowsVsCountriesUnmarked.png"
import Fade from 'react-reveal/Fade';

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

      cowsVsCountriesButton = (
        <img src={cowsVsCountriesMarked} alt="Load more button" />
      )
      cowsVsAirplanesButton = (
        <img src={cowsVsAirplanesUnmarked} alt="Load more button" />
      )
    } else {
      graph = (
        <img src={cowsVsAirplanes} className="img img-fluid" alt="Graph" />
      )
      cowsVsCountriesButton = (
        <img src={cowsVsCountriesUnmarked} alt="Load more button" />
      )
      cowsVsAirplanesButton = (
        <img src={cowsVsAirplanesMarked} alt="Load more button" />
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
            There are 1.5 billion cows on the planet that together burp out 5%
            of the world’s greenhouse gas emissions. That’s 2x more emissions
            than the world’s fleet of airplanes. Bill Gates recently said that
            if cattle were a country, they would rank third in greenhouse gas
            emissions.
          </p>
          <p>
            Volta Greentech is on a mission to work with the beef and dairy
            industry to reduce emissions to mitigate global warming. By
            providing farmers with the means to drastically reduce the methane
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
              onClick={() => this.setState({ activeGraph: "cowsVsAirplanes" })}
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
          Graph based on{" "}
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
