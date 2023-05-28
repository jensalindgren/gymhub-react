// React and Router
import React from 'react'
import styles from "../styles/Footer.module.css";
// Components
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


/**
 * User Footer page
 * @component
 */

const Footer = () => {
  return (
    <footer className={styles.Footer}>
        <div>
            <div className="social-icons">
                    <a target="blank" href="https://www.facebook.com"><FaFacebook /></a>
                    <a target="blank" href="https://www.twitter.com"><FaTwitter /></a>
                    <a target="blank" href="https://www.instagram.com"><FaInstagram /></a>
                    <p>© 2023</p>
            </div>
        </div>
    </footer>
);
}

export default Footer