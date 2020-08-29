import React from "react"
import { Link } from "gatsby"
import styles from "./Footer.module.css"
import FooterForm from "../newsletter/FooterForm"

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
        <div className="col-sm-12 col-md-2">
          <div className={styles.footerColumn}>
            <ListLink to="/">
              <span className={styles.logo}>0</span>
            </ListLink>
          </div>
        </div>

        <div className="col-sm-12 col-md-2">
          <h5 className={styles.footerTitle}>Sitemap</h5>

          <ListLink to="/" className={styles.link}>
            Home
          </ListLink>
          <br />

          <ListLink to="/about/" className={styles.link}>
            About
          </ListLink>
          <br />

          <ListLink to="/solution/" className={styles.link}>
            Labs
          </ListLink>
          <br />

          <ListLink to="/product/" className={styles.link}>
            Planetmilk
          </ListLink>
          <br />

          <ListLink to="/production/" className={styles.link}>
            Factory
          </ListLink>
          <br />

          <ListLink to="/press/" className={styles.link}>
            Press
          </ListLink>
          <br />

          <ListLink to="/careers/" className={styles.link}>
            Careers
          </ListLink>
        </div>

        <div className="col-sm-12 col-md-2">
          <h5 className={styles.footerTitle}>Social</h5>

          <a
            className={styles.link}
            href="https://www.instagram.com/voltagreentech/"
            target="_blank "
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            className={styles.link}
            href="https://www.linkedin.com/company/volta-greentech/"
            target="_blank "
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="col-sm-12 col-md-3">
          <h5 className={styles.footerTitle}>Contact</h5>

          <a className={styles.link} href="mailto:fredrik@voltagreentech.com">
            fredrik@voltagreentech.com
          </a>

          <a
            className={styles.link}
            href="https://goo.gl/maps/Hgqy3kq1NhdJALPd8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Birger Jarlsgatan 57 C, Stockholm
          </a>
        </div>

        <div className="col-sm-12 col-md-3">
          <h5 className={styles.footerTitle}>Join our newsletter</h5>
          <p className={styles.link}>
            Follow our journey towards zero greenhouse gas emissions.
          </p>
          <FooterForm />
        </div>
      </div>
    </div>
  )
}
