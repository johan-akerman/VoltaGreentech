import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"
import LinkElement from "../link/LinkElement"
import typography from "../typography.module.css"
import styles from "./CenteredTextAndImage.module.css"
import Fade from 'react-reveal/Fade';


class CenteredTextAndImage extends React.Component {
  render() {
    if (this.props.video) {
      return (
        <React.Fragment>

          <div className={styles.textContainer}>
            <Fade up>
            <p className={typography.lowerLevelHeader}>
              {this.props.lowerLevelHeader}
            </p>
            <h1 className={typography.chapterTitle}>
              {this.props.chapterTitle}
            </h1>
            <p>{this.props.text}</p>
            <p>{this.props.text2}</p>
            <Link to={this.props.href}>
              <Button className={typography.btn}>{this.props.btnText}</Button>
            </Link>
            </Fade>
          </div>
          <Fade up delay={250}>
          <div className={styles.videoContainer}>
            <img
              className={styles.img}
              src={this.props.image}
              id={styles.video}
              alt="thumbnail"
            />
            <a
              className={styles.playBtn}
              target="_blank"
              href="https://www.youtube.com/watch?v=77KozPbACI0"
            >
              <i className="fa fa-play" aria-hidden="true"></i>
            </a>
            <p className={typography.imageCaption}>{this.props.caption}</p>
          </div>
          </Fade>
        </React.Fragment>
      )
    }

    if (this.props.btnText) {
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
            <Link to={this.props.href}>
              <Button className={typography.btn}>{this.props.btnText}</Button>
            </Link>
          </div>
          </Fade>
          <Fade up delay={250}>
          <img className={styles.img} src={this.props.image} alt="thumbnail" />
          <p className={typography.imageCaption}>{this.props.caption}</p>
          </Fade>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <Fade up>
        <div className={styles.textContainer}>
          <p className={typography.lowerLevelHeader}>
            {this.props.lowerLevelHeader}
          </p>
          <h1 className={typography.chapterTitle}>{this.props.chapterTitle}</h1>
          <p>{this.props.text}</p>
          <p>{this.props.text2}</p>
          <LinkElement to={this.props.href} text={this.props.link} />
        </div>
        </Fade>
<Fade up delay={250}>
        <img className={styles.img} src={this.props.image} alt="thumbnail" />
        <p className={typography.imageCaption}>{this.props.caption}</p>
        </Fade>
      </React.Fragment>
    )
  }
}

export default CenteredTextAndImage
