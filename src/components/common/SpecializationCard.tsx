import { type FC, type ReactNode } from "react";
import styles from "./SpecializationCard.module.css";

interface SpecializationCardProps {
  icon: ReactNode;
  title: string;
}

export const SpecializationCard: FC<SpecializationCardProps> = ({ icon, title }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
