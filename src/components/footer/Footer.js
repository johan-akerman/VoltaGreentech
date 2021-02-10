import React from "react"
import { Link } from "gatsby"
import styles from "./Footer.module.css"

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
            Solution
          </ListLink>

          <br />

          <ListLink to="/production/" className={styles.link}>
            Production
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

          <a
            className={styles.link}
            href="https://www.facebook.com/Volta-Greentech-106692387396549/"
            target="_blank "
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            className={styles.link}
            href="https://twitter.com/vgreentech"
            target="_blank "
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

        <div className="col-sm-12 col-md-3">
          <h5 className={styles.footerTitle}>Find us</h5>

          <a
            className={styles.link}
            href="https://goo.gl/maps/orSRvzAfGB2fwB8d7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nanna Svartz väg 4 <br /> 171 65 Solna, Sweden
          </a>
        </div>

        <div className="col-sm-12 col-md-3">
          <h5 className={styles.footerTitle}>Contact</h5>

          <a className={styles.link} href="mailto:fredrik@voltagreentech.com">
            fredrik@voltagreentech.com
          </a>
        </div>
      </div>
    </div>
  )
}
