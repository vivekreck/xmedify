import { type FC, type CSSProperties } from "react";

interface ButtonProps {
  children: string;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button style={styles.button}>{children}</button>;
};

const styles: {
  button: CSSProperties;
} = {
  button: {
    background: "#2AA8FF",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
