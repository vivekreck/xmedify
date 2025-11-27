// MedicalCenterCard.tsx
import React from "react";
import styles from "./MedicalCenterCard.module.css";
import HospitalIcon from "../../assets/images/FindDoctors/HospitalIcon.png";
import { Button } from "./Button";
import { ThumbIcon } from "../../assets/icons/ThumbIcon";

const MedicalCenterCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.leftSection}>
        <div className={styles.iconWrapper}>
          <img src={HospitalIcon} alt="Hospital Icon" />
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>Fortis Hospital Richmond Road</h3>
          <p className={styles.location}>Bangalore, Karnataka</p>
          <p className={styles.subtitle}>Smilesessence Center for Advanced Dentistry + 1 more</p>
          <p className={styles.freeTag}>
            FREE <span className={styles.strike}>₹550</span> <div>Consultation fee at clinic</div>
          </p>
          <div className={styles.likes}>
            <ThumbIcon /> 5
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <p className={styles.available}>Available Today</p>
        <Button>Book FREE Center Visit</Button>
      </div>
    </div>
  );
};

export default MedicalCenterCard;
