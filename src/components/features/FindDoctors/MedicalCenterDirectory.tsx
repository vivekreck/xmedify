import MedicalCenterCard from "../../common/MedicalCenterCard";
import MedicalCenterPromotion from "../../common/MedicalCenterPromotion";
import styles from "./MedicalCenterDirectory.module.css";
import vector from "../../../assets/icons/vector.svg";

export const MedicalCenterDirectory = () => {
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader} role="banner" aria-label="results header">
        <h2>15 medical centers available in Alaska</h2>
        <div className={styles.pageSub}>
          <img src={vector} alt="vector" />
          Book appointments with minimum wait-time &amp; verified doctor details
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.leftSection}>
          {Array.from({ length: 5 }).map((_, index) => (
            <MedicalCenterCard key={index} />
          ))}
        </div>

        <div className={styles.rightSection}>
          <MedicalCenterPromotion />
        </div>
      </div>
    </section>
  );
};
