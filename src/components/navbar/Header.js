import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import logo from "../../../static/headerLogo.png"
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
          <img src={logo} alt="volta logo" />
        </ListLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.rightContent}>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/solution/">Solution</ListLink>
          <ListLink to="/product/">Product</ListLink>
          <ListLink to="/production/">Production</ListLink>
          <ListLink to="/press/">Press</ListLink>
          <ListLink to="/careers/">Careers</ListLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
