import styles from "./CTASection.module.css";
import googlePlay from "../../../assets/images/CTASection/googlePlay.png";
import appStore from "../../../assets/images/CTASection/appStore.png";
import mobile1 from "../../../assets/images/CTASection/mobile1.png";
import mobile2 from "../../../assets/images/CTASection/mobile2.png";
import arrow from "../../../assets/images/CTASection/arrow.svg";
import { Button } from "../../common/Button";

export const CTASection = () => {
  return (
    <section className={styles.downloadSection}>
      <div className={styles.imageContainer}>
        <img src={mobile1} alt="App Preview 1" className={styles.mobileImg1} />
        <img src={mobile2} alt="App Preview 2" className={styles.mobileImg2} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.arrowImage}>
          <img src={arrow} alt="Arrow" />
        </div>
        <h2>
          Download the <br /> <span className={styles.highlight}>Medify</span> App
        </h2>
        <p className={styles.subtitle}>Get the link to download the app</p>

        <div className={styles.inputGroup}>
          <div className={styles.phoneInput}>
            <span>+91</span>
            <input type="text" placeholder="Enter phone number" />
          </div>
          <Button>Send SMS</Button>
        </div>

        <div className={styles.storeButtons}>
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>
      </div>
    </section>
  );
};
