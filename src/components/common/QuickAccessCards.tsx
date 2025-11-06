import { type FC, type ReactNode } from "react";
import styles from "./QuickAccessCards.module.css";

interface QuickAccessCardsProps {
  icon: ReactNode;
  title: string;
}

export const QuickAccessCards: FC<QuickAccessCardsProps> = ({ icon, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
