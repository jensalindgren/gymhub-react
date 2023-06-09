// React and Router
import React from "react";
// Components
import Spinner from "react-bootstrap/Spinner";
// Styles
import styles from "../styles/Spinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.SpinnerPosition}>
      <Spinner className={styles.Spinner} animation="border" />
    </div>
  );
};

export default LoadingSpinner;