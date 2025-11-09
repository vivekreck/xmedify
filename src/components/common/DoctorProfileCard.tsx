import { type FC } from "react";
import styles from "./DoctorProfileCard.module.css";

interface DoctorProfileCardProps {
  src: string;
  id: number;
  doctorName: string;
  doctorSpecialization: string;
}

export const DoctorProfileCard: FC<DoctorProfileCardProps> = ({ src, id, doctorName, doctorSpecialization }) => {
  return (
    <div className={styles.doctorCard}>
      <img src={src} alt={`doctor ${id}`} className={styles.doctorImage} />

      <h3 className={styles.doctorName}>{doctorName}</h3>
      <p className={styles.doctorSpecialization}>{doctorSpecialization}</p>
    </div>
  );
};
