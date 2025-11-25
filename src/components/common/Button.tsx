import { type FC, type ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export const Button: FC<ButtonProps> = ({ children, style }) => {
  return (
    <button className={styles.button} style={style}>
      {children}
    </button>
  );
};
