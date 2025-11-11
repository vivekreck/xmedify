import facebook from "../../assets/images/Footer/facebook.svg";
import x from "../../assets/images/Footer/x.svg";
import youtube from "../../assets/images/Footer/youtube.svg";
import pintrace from "../../assets/images/Footer/pintrace.svg";
import logo from "../../assets/icons/logo.png";
import styles from "./Footer.module.css";
import rightArrow from "../../assets/images/Footer/rightArrow.svg";

const linkDetails = [
  ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
  ["Orthology", "Neurology", "Dental Care", "Ophthalmology", "Cardiology"],
  ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoSection}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
            <div className={styles.logoText}>Medify</div>
          </a>

          <div className={styles.footerSocials}>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={x} alt="X" />
            </a>
            <a href="#">
              <img src={youtube} alt="Youtube" />
            </a>
            <a href="#">
              <img src={pintrace} alt="Pintrace" />
            </a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          {linkDetails.map((item) => {
            return (
              <ul>
                {item.map((link) => (
                  <li>
                    <img src={rightArrow} alt="" />
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
