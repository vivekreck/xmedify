import HospitalIcon from "../../assets/images/FindDoctors/HospitalIcon.png";
import { ThumbIcon } from "../../assets/icons/ThumbIcon";

import styles from "./HospitalInfoCard.module.css";

interface HospitalInfoCardProps {
  showSlots?: boolean;
}

export const HospitalInfoCard: React.FC<HospitalInfoCardProps> = ({ showSlots = true }) => {
  return (
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
        {!showSlots && (
          <div className={styles.likes}>
            <ThumbIcon /> 5
          </div>
        )}
      </div>
    </div>
  );
};
