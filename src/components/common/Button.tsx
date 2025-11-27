import type { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
