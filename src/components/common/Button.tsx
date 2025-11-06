import { type FC, type ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
