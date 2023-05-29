// // React and Router
// import React from 'react'
// // Styles
// import styles from "../styles/Avatar.module.css";

// const Avatar = ({ src, height= 25, text, }, props) => {
//   return (
//     <span>
//       <img className={styles.profile} src={src} height={height} width={height} alt="avatar"/>
//             {text}
//     </span>
//   )
// }

// export default Avatar;

import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt=" "
      />
      {text}
    </span>
  );
};

export default Avatar;