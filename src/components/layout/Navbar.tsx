import type React from "react";
import logo from "../../assets/icons/logo.png";
import { Button } from "../common/Button";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="/" className={styles.navbarLogo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          <div className={styles.logoText}>Medify</div>
        </a>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <a href="/" className={styles.navbarLink}>
              Find Doctors
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/" className={styles.navbarLink}>
              Hospitals
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/" className={styles.navbarLink}>
              Medicines
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/" className={styles.navbarLink}>
              Surgeries
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/" className={styles.navbarLink}>
              Software for Provider
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/" className={styles.navbarLink}>
              Facilities
            </a>
          </li>
          <li className={styles.navbarItem}>
            <Button>My Bookings</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
