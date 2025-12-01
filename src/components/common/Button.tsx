import type { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  id?: string;
}

export const Button: FC<ButtonProps> = ({ children, style, onClick, type = "button", id }) => {
  return (
    <button className={styles.button} style={style} onClick={onClick} type={type} id={id}>
      {children}
    </button>
  );
};
