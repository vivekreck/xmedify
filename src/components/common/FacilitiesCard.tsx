import type { FC } from "react";
import styles from "./FacilitiesCard.module.css";

interface FacilitiesCardProps {
  src: string;
  number: string;
  type: string;
}

export const FacilitiesCard: FC<FacilitiesCardProps & { className?: string }> = ({ src, number, type, className }) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      <div className={`${styles.iconBox}`}>
        <img src={src} alt="health" />
      </div>
      <h3>{number}</h3>
      <p>{type}</p>
    </div>
  );
};
