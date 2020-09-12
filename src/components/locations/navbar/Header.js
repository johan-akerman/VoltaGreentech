import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import voltaGreentech from "../../../../static/images/logos/logo.png"
import voltaWhite from "../../../../static/images/logos/volta_white.png"
import styles from "./Header.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block` }}>
    <Link to={props.to} className={styles.navLink} activeClassName="active">
      {props.children}
    </Link>
  </li>
)
export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Navbar.Brand>
        <ListLink to="/">Go back</ListLink>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={styles.btn}
      />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.rightContent}>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <ListLink to="/about/">Setting</ListLink>

          <ListLink to="/solution/">Setting</ListLink>
          <ListLink to="/production/">Setting</ListLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
