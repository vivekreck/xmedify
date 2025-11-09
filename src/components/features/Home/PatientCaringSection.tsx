import styles from "./PatientCaringSection.module.css";
import image1 from "../../../assets/images/PatientCaring/image1.png";
import image2 from "../../../assets/images/PatientCaring/image2.png";
import phone from "../../../assets/images/PatientCaring/phone.svg";
import check from "../../../assets/images/PatientCaring/check.svg";

export const PatientCaringSection = () => {
  return (
    <section className={styles.patientCareSection}>
      <div className={styles.imageColumn}>
        <div className={styles.consultationCard}>
          <div className={styles.cardIcon}>
            <img src={phone} alt="Phone" />
            <h3>Free Consultation</h3>
          </div>
          <p>Consultation with the best</p>
        </div>

        <div className={styles.medicalImages}>
          <img src={image1} alt="Doctor consultation" className={styles.imageTop} />
          <img src={image2} alt="Patient care" className={styles.imageBottom} />
        </div>
      </div>

      <div className={styles.contentColumn}>
        <div className={styles.sectionHeader}>
          <p className={styles.tagline}>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
          <h1>
            Patient <span className={styles.highlight}>Caring</span>
          </h1>
        </div>

        <p className={styles.description}>
          Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will
          allow us to care for you and strive to be the first and best choice for healthcare.
        </p>

        <ul className={styles.featuresList}>
          <li className={styles.featureItem}>
            <span className={styles.checkIcon}>
              <img src={check} alt="check" />
            </span>
            Stay Updated About Your Health
          </li>
          <li className={styles.featureItem}>
            <span className={styles.checkIcon}>
              <img src={check} alt="check" />
            </span>
            Check Your Results Online
          </li>
          <li className={styles.featureItem}>
            <span className={styles.checkIcon}>
              <img src={check} alt="check" />
            </span>
            Manage Your Appointments
          </li>
        </ul>
      </div>
    </section>
  );
};
