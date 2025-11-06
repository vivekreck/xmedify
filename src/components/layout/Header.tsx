import React from "react";
import { Navbar } from "./Navbar";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <>
      <div className={styles.infoBanner}>
        The health and well-being of our patients and their health care team will always be our priority, so we follow
        the best practices for cleanliness.
      </div>
      <Navbar />
    </>
  );
};
