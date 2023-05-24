// React and Router
import React from 'react'
import { NavLink } from "react-router-dom";
// Components
import { Navbar, Container, Nav, } from "react-bootstrap";
// Assets
import logo from "../assets/logo.png";
// Styles
import styles from "../styles/NavBar.module.css";
// Notifications
import { NotificationManager } from "react-notifications";

const NavBar = () => {
    return (
      <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container className={styles.Container}>
          <div className={`${styles.Block}`}>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
          </NavLink>
          </div>
          <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className={styles.NavLink}
                activeClassName={styles.Active}
              >
                Sign up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
