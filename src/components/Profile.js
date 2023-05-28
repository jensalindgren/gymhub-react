// React and Router
import React from 'react'
// Styles
import styles from "../styles/Profile.module.css";

const Profile = ({ src, height= 25, text, }, props) => {
  return (
    <span>
      <img className={styles.profile} src={src} height={height} width={height} alt=""/>
            {text}
    </span>
  )
}

export default Profile
