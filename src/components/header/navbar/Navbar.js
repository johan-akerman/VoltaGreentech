import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import bigLogo from "../../../../src/images/logos/full_size_logo.png"
import smallLogo from "../../../../src/images/logos/small_size_logo.png"
import styles from "./Navbar.module.css"

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
          <img id={styles.bigLogo} src={bigLogo} alt="volta logo" />
          <img id={styles.smallLogo} src={smallLogo} alt="volta logo" />
        </ListLink>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={styles.btn}
      />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.rightContent}>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/solution/">Solution</ListLink>
          <ListLink to="/production/">Production</ListLink>
          <ListLink to="/farms/">Farms</ListLink>
          <ListLink to="/press/">Press</ListLink>
          <ListLink to="/careers/">Careers</ListLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
