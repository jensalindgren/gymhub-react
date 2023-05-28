// React and Router
import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
// Components
import { Navbar, Container, Nav, } from "react-bootstrap";
// Context
import { CurrentUserContext } from "../App";
// Assets
import logo from "../assets/logo.png";
// Styles
import styles from "../styles/NavBar.module.css";
// Notifications


const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const loggedInIcons = <>{currentUser?.username}</>
  const loggedOutIcons = 
              <>
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
              </>

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
              {currentUser ? loggedInIcons : loggedOutIcons}

            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
