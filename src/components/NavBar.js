// React and Router
import React from 'react'
import { NavLink, useHistory } from "react-router-dom";
// Components
import { Navbar, Container, Nav, } from "react-bootstrap";
// Context
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
// Assets
import logo from "../assets/logo.png";
// Styles
import styles from "../styles/NavBar.module.css";
// Profile
import Profile from './Avatar';
// Axios
import axios from 'axios';
// Notifications
import { NotificationManager } from "react-notifications";
// Hooks
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

/**
 * User Navbar page
 * @component
 */

const NavBar = () => {

  /**
   * You will see different icons depending on if the user is logged in or not
  */
  const history = useHistory();
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  /**
   * Sign out function
   */

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      NotificationManager.success("Signed out successfully", "Success!");
    } catch (err) {
      console.log(err);
      NotificationManager.error("There was an issue signing you out", "Error");
    }
  };

  /**
   * Logo function
   * if the user is logged in, the logo will take them to the home page
   * if the user is not logged in, the logo will take them to the landing page
   */
    const handleLogoClick = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // if user is logged in, the code below will run
        if (currentUser) {
          history.push("/home");
        }
      } catch (err) {
        // if user is not logged in, the code below will run
        if (!currentUser) {
          history.push("/");
        }
      }
    };


  /** 
   * Logged in and Out icons
  */
  
  const loggedInIcons = <>
                <NavLink
                className={styles.NavLink}
                to="/feed"
              >
                <i className={styles.i} class="fa-solid fa-hashtag"><span>Feed</span></i>
              </NavLink>
                <NavLink
                className={styles.NavLink}
                to="/posts/create"
              >
                <i className="fa-solid fa-plus-circle"><span>Post</span></i>
               </NavLink>
               <NavLink
                className={styles.NavLink}
                to="/post/events"
              >
                <i className="fa-solid fa-bookmark"><span>Events</span></i>
               </NavLink>
              <NavLink
                className={styles.NavLink}
                to="/likes"
              >
                <i className={styles.i} class="fa-solid fa-heart"><span>Likes</span></i>
              </NavLink>
              <NavLink
                className={styles.NavLink}
                to="/"
                onClick={handleSignOut}
              >
                <i className={styles.i} class="fa-solid fa-user-slash"><span>Sign Out</span></i>
              </NavLink>
              <NavLink
                className={styles.NavLink}
                to={`/profile/${currentUser?.profile_id}`}
                >
                <img className={styles.img} src={currentUser?.profile_image} alt="profile" text={currentUser?.username} />
                <Profile src={currentUser?.profile_image} text={currentUser?.username}/>
              </NavLink>
              
  </>
  const loggedOutIcons = (
              <>
                <NavLink
                className={styles.NavLink}
                to="/signin"
              >
              <i className={styles.i} class="fa-solid fa-user"><span>Sign in</span></i>
              </NavLink>
              <NavLink
                to="/signup"
                className={styles.NavLink}
              >
                <i className={styles.i} class=" fa-solid fa-user-plus"><span>Register</span></i>
              </NavLink>
              </>
  )

    /**
     * Navbar
     */ 

    return (
      <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        <Container className={styles.Container}>
          <div className={`${styles.Block}`}>
          <NavLink to="/home">
            <Navbar.Brand onClick={handleLogoClick}>
              <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
          </NavLink>
          </div>
          <div>
          <Navbar.Toggle 
          ref={ref}
          onClick={() => setExpanded(!expanded)}
           className={styles.Toggle} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav>


              {currentUser ? loggedInIcons : loggedOutIcons }

            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
