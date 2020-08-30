import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import voltaGreentech from "../../../static/images/logos/logo.png"
import voltaWhite from "../../../static/images/logos/volta_white.png"
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
        <ListLink to="/">
          <img id={styles.bigLogo} src={voltaGreentech} alt="volta logo" />
          <img id={styles.smallLogo} src={voltaWhite} alt="volta logo" />
        </ListLink>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={styles.btn}
      />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.rightContent}>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <ListLink to="/about/">About Volta</ListLink>
          {/* <ListLink to="/product/">Planet food</ListLink> */}
          <ListLink to="/solution/">Seafeed</ListLink>
          <ListLink to="/production/">Production</ListLink>
          <ListLink to="/press/">Press</ListLink>
          <ListLink to="/careers/">Careers</ListLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
