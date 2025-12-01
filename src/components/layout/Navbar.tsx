import type React from "react";
import logo from "../../assets/icons/logo.png";
import { Button } from "../common/Button";
import styles from "./Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  return (
    <nav className={isHome ? styles.navbarHome : styles.navbar}>
      <div className={isHome ? styles.navbarContainerHome : styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          <div className={styles.logoText}>Medify</div>
        </Link>
        <ul className={styles.navbarMenu}>
          <li className={`${styles.navbarItem} ${location.pathname === "/find-doctors" ? styles.active : ""}`}>
            <Link to="/find-doctors" className={styles.navbarLink}>
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
            <Button onClick={() => navigate("/my-bookings")}>My Bookings</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
