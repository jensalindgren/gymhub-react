// React
import React from 'react';
// Router
import { NavLink, useHistory } from 'react-router-dom';
// Components
import { Navbar, Container, Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
// Context
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
// Hooks
import Avatar from './Avatar';
// API
import axios from 'axios';
// Notifications
import { NotificationManager } from 'react-notifications';
// Hooks
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
// Utils
import { removeTokenTimestamp } from '../utils/utils';
// Assets
import logo from '../assets/logo.png';
// Styles
import styles from '../styles/NavBar.module.css';
import dropdownStyles from '../styles/MoreDropdown.module.css';

const NavBar = () => {
  const history = useHistory();
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
      removeTokenTimestamp();
      NotificationManager.success('Signed out successfully', 'Success!');
    } catch (err) {
      NotificationManager.error('There was an issue signing you out', 'Error');
    }
  };

  const handleLogoClick = async () => {
    try {
      await axios.post('/dj-rest-auth/token/refresh/');
      if (currentUser) {
        history.push('/home');
      }
    } catch (err) {
      if (!currentUser) {
        history.push('/');
      }
    }
  };

  const loggedInIcons = (
    <>
          {currentUser && currentUser.is_staff && (
        <NavLink className={styles.NavLink} to="/events/create">
          <i className={styles.i} class="fa-solid fa-plus-square">
            <span>Post Event</span>
          </i>
        </NavLink>
              )}

      <NavLink className={styles.NavLink} to="/feed">
        <i className={styles.i} class="fa-solid fa-hashtag">
          <span>Feed</span>
        </i>
      </NavLink>
      <NavLink className={styles.NavLink} to="/posts/create">
        <i className="fa-solid fa-plus-circle">
          <span>Post</span>
        </i>
      </NavLink>
      <NavLink className={styles.NavLink} to="/events">
        <i className="fa-solid fa-bookmark">
          <span>Events</span>
        </i>
      </NavLink>
      <NavLink className={styles.NavLink} to="/likes">
        <i className={styles.i} class="fa-solid fa-heart">
          <span>Likes</span>
        </i>
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className={styles.i} class="fa-solid fa-user-slash">
          <span>Sign Out</span>
        </i>
      </NavLink>
      <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
        <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={30} />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink} to="/signin">
        <i className={styles.i} class="fa-solid fa-user">
          <span>Sign in</span>
        </i>
      </NavLink>
      <NavLink to="/signup" className={styles.NavLink}>
        <i className={styles.i} class="fa-solid fa-user-plus">
          <span>Register</span>
        </i>
      </NavLink>
    </>
  );

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
            className={styles.Toggle}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {currentUser ? loggedInIcons : loggedOutIcons}
              {currentUser && (
                <>


                    <Dropdown className={`ml-auto px-4 ${styles.Absolute}`} drop="left" align="center">
                        <Dropdown.Toggle  className={dropdownStyles.dropdownButton}>
                          <i ></i> More
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => history.push(`/profiles/${currentUser?.profile_id}/edit`)}
                            aria-label="edit-profile"
                          >
                            <i className="fas fa-edit" /> Edit Profile
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => history.push(`/profiles/${currentUser?.profile_id}/edit/username`)}
                            aria-label="edit-username"
                          >
                            <i className="far fa-id-card" /> Change Username
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => history.push(`/profiles/${currentUser?.profile_id}/edit/password`)}
                            aria-label="edit-password"
                          >
                            <i className="fas fa-key" /> Change Password
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
