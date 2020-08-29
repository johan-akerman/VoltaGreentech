import React from "react"
import styles from "./FAQ.module.css"
import { Accordion, Card } from "react-bootstrap"

export default class FAQCard extends React.Component {
  render() {
    return (
      <Card className={styles.card}>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={this.props.thisKey}
          className={styles.header}
        >
          {this.props.question}{" "}
          <i className="fa fa-plus" aria-hidden="true" id={styles.icon}></i>
        </Accordion.Toggle>

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
