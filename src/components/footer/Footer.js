import React from "react"
import { Link } from "gatsby"
import styles from "./Footer.module.css"
import { Form } from "react-bootstrap"
import MyNewsLetterForm from "../newsletter/MyNewsLetterForm"

const ListLink = props => (
  <li style={{ display: `inline-block` }}>
    <Link to={props.to} className={styles.link}>
      {props.children}
    </Link>
  </li>
)

export default function Footer(props) {
  return (
    <div className={styles.footerContainer}>
      <div className="row">
        <div className="col-sm-12 col-md-2 ">
          <ListLink to="/">
            <span className={styles.logo}>0</span>
          </ListLink>
        </div>
        <div className="col-sm-12 col-md-2">
          <h5 className={styles.footerTitle}>Sitemap</h5>
          <ul>
            <li>
              <ListLink to="/about/" className={styles.link}>
                About
              </ListLink>
            </li>

            <li>
              <ListLink to="/solution/" className={styles.link}>
                Solution
              </ListLink>
            </li>
            <li>
              <ListLink to="/product/" className={styles.link}>
                Product
              </ListLink>
            </li>
            <li>
              <ListLink to="/production/" className={styles.link}>
                Production
              </ListLink>
            </li>
            <li>
              <ListLink to="/press/" className={styles.link}>
                Press
              </ListLink>
            </li>
            <li>
              <ListLink to="/careers/" className={styles.link}>
                Careers
              </ListLink>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-2">
          <h5 className={styles.footerTitle}>Follow us</h5>
          <ul>
            <li>
              <a
                className={styles.link}
                href="https://www.instagram.com/voltagreentech/"
                target="_blank "
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://www.linkedin.com/company/volta-greentech/"
                target="_blank "
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-3">
          <h5 className={styles.footerTitle}>Contact us</h5>
          <ul>
            <li>
              <a
                className={styles.link}
                href="mailto:fredrik@voltagreentech.com"
              >
                fredrik@voltagreentech.com
              </a>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-3">
          <h5 className={styles.footerTitle}>Join our newsletter</h5>

          <MyNewsLetterForm footer={true} />
        </div>
      </div>
    </div>
  )
}
