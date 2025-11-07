import { type FC, type ReactNode } from "react";
import styles from "./QuickAccessCards.module.css";

interface QuickAccessCardsProps {
  icon: ReactNode;
  title: string;
  isActive?: boolean;
}

export const QuickAccessCards: FC<QuickAccessCardsProps> = ({ icon, title, isActive = false }) => {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
