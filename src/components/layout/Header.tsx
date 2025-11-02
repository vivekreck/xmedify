import { Navbar } from "./Navbar";
import React from "react";

export const Header = () => {
  return (
    <>
      <div style={styles.infoBanner}>
        The health and well-being of our patients and their health care team will always be our priority, so we follow
        the best practices for cleanliness.
      </div>
      <Navbar />
    </>
  );
};

const styles: { infoBanner: React.CSSProperties } = {
  infoBanner: {
    marginTop: "0px",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#2AA8FF",
    width: "100%",
    color: "white",
    fontSize: "14px",
  },
};
