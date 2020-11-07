import React from "react"
import typography from "../typography.module.css"
import styles from "./ProductContainer.module.css"
import Card from "./ProductCard"
import brilliantMinds from "../../../static/images/planetMilk.png"
import solution from "../../../static/images/articles/solution.png"
import flask from "../../../static/images/articles/flask.png"

export default function CenteredTextAndImage(props) {
  return (
    <div className={styles.container}>
     
      <div className="row">
        <Card
          image={brilliantMinds}
          title="Planetmilk"
          href="https://example.com"
        />
       
      </div>
    </div>
  )
}
