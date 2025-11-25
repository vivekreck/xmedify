import React, { type ReactNode } from "react";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  placeholder: string;
  handleSearch: (searchTerm: string) => void;
  style?: React.CSSProperties;
  icon: ReactNode;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, handleSearch, style, icon }) => {
  return (
    <div className={styles.searchContainer} style={style}>
      <div className={styles.searchIcon}>{icon}</div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
