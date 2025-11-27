import React from "react";
import styles from "./MedicalCenterPromotion.module.css";

const MedicalCenterPromotion: React.FC = () => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>This World Oral Health Day,</p>

      <h2 className={styles.heading}>
        Get a <span>FREE</span> Appointment*
        <br /> with Top Dentists.
      </h2>

      <div className={styles.badge}>LIMITED PERIOD OFFER</div>

      <p className={styles.hashTag}>#BeSensitiveToOralHealth</p>

      <p className={styles.note}>*T&C Apply - only consultation free. Procedures / surgeries not covered</p>
    </div>
  );
};

export default MedicalCenterPromotion;
