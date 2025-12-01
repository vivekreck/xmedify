import HospitalIcon from "../../assets/images/FindDoctors/HospitalIcon.png";
import { ThumbIcon } from "../../assets/icons/ThumbIcon";
import styles from "./HospitalInfoCard.module.css";

interface HospitalInfoCardProps {
  showSlots?: boolean;
  hospital: any;
}

export const HospitalInfoCard: React.FC<HospitalInfoCardProps> = ({ showSlots = true, hospital }) => {
  return (
    <div className={styles.leftSection}>
      <div className={styles.iconWrapper}>
        <img src={HospitalIcon} alt="Hospital Icon" />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{hospital["Hospital Name"]}</h3>

        <p className={styles.location}>
          {hospital.City}, {hospital.State}
        </p>

        <p className={styles.subtitle}>{hospital["Hospital Type"]}</p>

        <p className={styles.freeTag}>
          FREE <span className={styles.strike}>₹550</span> <div>Consultation fee at clinic</div>
        </p>

        {!showSlots && (
          <div className={styles.likes}>
            <ThumbIcon /> {hospital["Hospital overall rating"] ?? 0}
          </div>
        )}
      </div>
    </div>
  );
};
