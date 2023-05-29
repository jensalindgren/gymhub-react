// React and Router
import React from 'react'
// Styles
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height= 25, text, }, props) => {
  return (
    <span>
      <img className={styles.profile} src={src} height={height} width={height} alt="avatar"/>
            {text}
    </span>
  )
}

export default Avatar;
