import React, { type ReactNode } from "react";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  placeholder: string;
  value?: string;
  icon?: ReactNode;
  style?: React.CSSProperties;
  onFocus?: () => void;
  readOnly?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, icon, style, onFocus, readOnly }) => {
  return (
    <div className={styles.searchContainer} style={style}>
      {icon && <div className={styles.searchIcon}>{icon}</div>}
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        readOnly={readOnly}
      />
    </div>
  );
};

export default SearchInput;
