import React from "react"
import { Link } from "gatsby"
import typography from "../typography.module.css"
import styles from "./CenteredTextAndImage.module.css"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"

import CustomButton from "../buttons/circleButton/CircleButton.js"

class CenteredTextAndImage extends React.Component {
  render() {
    if (this.props.link) {
      return (
        <>
          <Fade up>
            <div className={styles.textContainer}>
              <p className={typography.lowerLevelHeader}>
                {this.props.lowerLevelHeader}
              </p>
              <h1 className={typography.chapterTitle}>
                {this.props.chapterTitle}
              </h1>
              <p>{this.props.text}</p>
              <p>{this.props.text2}</p>

              <div className={styles.btnContainer}>
                <Link to={this.props.href}>
                  <CustomButton text={this.props.link} to={this.props.href} />
                </Link>
              </div>
            </div>
          </Fade>

          <Fade up delay={250}>
            <div className={styles.imageContainer}>
              <Img title="Header image" fluid={this.props.gatsbyImage} />
              <p className={typography.imageCaption}>{this.props.caption}</p>
            </div>
          </Fade>
        </>
      )
    }

    return (
      <React.Fragment>
        <Fade up>
          <div className={styles.textContainer}>
            <p className={typography.lowerLevelHeader}>
              {this.props.lowerLevelHeader}
            </p>
            <h1 className={typography.chapterTitle}>
              {this.props.chapterTitle}
            </h1>
            <p>{this.props.text}</p>
            <p>{this.props.text2}</p>
          </div>
        </Fade>
        <Fade up delay={250}>
          <div className={styles.imageContainer}>
            <Img
              title="Header image"
              alt="Greek food laid out on table"
              fluid={this.props.gatsbyImage}
            />
            <p className={typography.imageCaption}>{this.props.caption}</p>
          </div>
        </Fade>
      </React.Fragment>
    )
  }
}

export default CenteredTextAndImage
