import React from "react";
import styles from "./MedicalCenterCardBooking.module.css";
import { HospitalInfoCard } from "./HospitalInfoCard";

interface Props {
  hospital: any;
}

const MedicalCenterCardBooking: React.FC<Props> = ({ hospital }) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainSection}>
        <HospitalInfoCard showSlots={false} hospital={hospital} />

        <div className={styles.rightSection}>
          <div className={styles.timeBox}>10:30 AM</div>
          <div className={styles.dateBox}>20 April 2024</div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenterCardBooking;
