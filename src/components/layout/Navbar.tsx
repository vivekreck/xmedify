import type React from "react";
import logo from "../../assets/icons/logo.png";
import { Button } from "../common/Button";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          <div className={styles.logoText}>Medify</div>
        </Link>
        <ul className={styles.navbarMenu}>
          <li className={`${styles.navbarItem} ${location.pathname === "/finddoctors" ? styles.active : ""}`}>
            <Link to="/finddoctors" className={styles.navbarLink}>
              Find Doctors
            </Link>
          </li>
          <li className={`${styles.navbarItem} ${location.pathname === "/hospitals" ? styles.active : ""}`}>
            <Link to="/hospitals" className={styles.navbarLink}>
              Hospitals
            </Link>
          </li>
          <li className={`${styles.navbarItem} ${location.pathname === "/medicines" ? styles.active : ""}`}>
            <Link to="/medicines" className={styles.navbarLink}>
              Medicines
            </Link>
          </li>
          <li className={`${styles.navbarItem} ${location.pathname === "/surgeries" ? styles.active : ""}`}>
            <Link to="/surgeries" className={styles.navbarLink}>
              Surgeries
            </Link>
          </li>
          <li className={`${styles.navbarItem} ${location.pathname === "/software" ? styles.active : ""}`}>
            <Link to="/software" className={styles.navbarLink}>
              Software for Provider
            </Link>
          </li>
          <li className={`${styles.navbarItem} ${location.pathname === "/facilities" ? styles.active : ""}`}>
            <Link to="/facilities" className={styles.navbarLink}>
              Facilities
            </Link>
          </li>
          <li className={`${styles.navbarItem} ${location.pathname === "/" ? styles.active : ""}`}>
            <Button>My Bookings</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
