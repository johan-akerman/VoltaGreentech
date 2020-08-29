import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"

import typography from "../typography.module.css"
import styles from "./CenteredTextAndImage.module.css"

class CenteredTextAndImage extends React.Component {
  render() {
    if (this.props.btnText) {
      return (
        <React.Fragment>
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
          <img className={styles.img} src={this.props.image} alt="thumbnail" />
          <p className={typography.imageCaption}>{this.props.caption}</p>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <div className={styles.textContainer}>
          <p className={typography.lowerLevelHeader}>
            {this.props.lowerLevelHeader}
          </p>
          <h1 className={typography.chapterTitle}>{this.props.chapterTitle}</h1>
          <p>{this.props.text}</p>
          <p>{this.props.text2}</p>
        </div>
        <img className={styles.img} src={this.props.image} alt="thumbnail" />
        <p className={typography.imageCaption}>{this.props.caption}</p>
      </React.Fragment>
    )
  }
}

export default CenteredTextAndImage
