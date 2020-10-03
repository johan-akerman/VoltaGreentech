import React from "react"
import styles from "./InfoBar.module.css"
import { Link } from "gatsby"
import milk from "../../../static/images/illustrations/milk.png"

class infoBar extends React.Component {
  onClickFunction() {
    console.log("clicked...")
    document.getElementById("panel").style.display = "none"
  }

  render() {
    return (
      <div className={styles.container} id="panel">
        <div className={styles.content}>
          <img src={milk} alt="Milk" className={styles.image} />

          <p>We just launched Planetmilk, our first consumer product. </p>

          <Link className={styles.link} to="/product/">
            Read more
          </Link>
        </div>

        <span
          className={styles.cancelButton}
          onClick={() => this.onClickFunction()}
          onKeyDown={this.onClickFunction}
          role="button"
          tabIndex={0}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
    )
  }
}
export default infoBar
