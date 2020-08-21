import React from "react"
import styles from "./FAQ.module.css"
import { Accordion, Card } from "react-bootstrap"
import plus_white from "../../../static/illustrations/plus_white.png"
import minus_white from "../../../static/illustrations/minus_white.png"

export default class FAQCard extends React.Component {
  render() {
    var x = document.getElementById("myIcon")

    return (
      <Card className={styles.card}>
        <div className={styles.header}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey={this.props.thisKey}
            className={styles.question}
          >
            <span>
              {" "}
              {this.props.question}{" "}
              <img
                id="myIcon"
                className={styles.arrow}
                src={plus_white}
                alt="volta arrow icon"
              />
            </span>
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey={this.props.thisKey}
          className={styles.collapse}
        >
          <Card.Body className={styles.bodyText}>{this.props.text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
}
