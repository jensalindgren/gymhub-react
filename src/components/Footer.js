// React and Router
import React from 'react'
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
  )
}

export default Footer