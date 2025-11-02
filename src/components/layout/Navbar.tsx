import type React from "react";
import logo from "../../assets/icons/logo.png";

export const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <a href="/" style={styles.navbarLogo}>
          <img src={logo} alt="Logo" style={styles.LogoImage} />
          <div style={styles.LogoText}>Medify</div>
        </a>
        <ul style={styles.navbarMenu}>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Find Doctors
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Hospitals
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Medicines
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Surgeries
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Software for Provider
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Facilities
            </a>
          </li>
          <li style={styles.navbarItem}>
            <button style={styles.navbarButton}>My Bookings</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles: {
  navbar: React.CSSProperties;
  navbarContainer: React.CSSProperties;
  navbarLogo: React.CSSProperties;
  LogoImage: React.CSSProperties;
  LogoText: React.CSSProperties;
  navbarMenu: React.CSSProperties;
  navbarItem: React.CSSProperties;
  navbarLink: React.CSSProperties;
  navbarButton: React.CSSProperties;
} = {
  navbar: {
    // backgroundColor: "#E8F1FF78",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 50px",
  },
  navbarLogo: {
    textDecoration: "none",
    fontSize: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
  },
  LogoImage: {
    maxWidth: "20px",
  },
  LogoText: {
    display: "inline-block",
    fontSize: "16px",
    color: "#2AA8FF",
    padding: "4px",
  },
  navbarMenu: {
    display: "flex",
    listStyle: "none",
    gap: "2rem",
    margin: "0",
    padding: "0",
  },
  navbarItem: {
    height: "80px",
    display: "flex",
    alignItems: "center",
  },
  navbarLink: {
    textDecoration: "none",
    padding: "0.5rem 1rem",
    transition: "all 0.3s ease",
  },
  navbarButton: {
    background: "#2AA8FF",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
