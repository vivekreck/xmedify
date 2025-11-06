import React from "react";
import styles from "./SearchInput.module.css";
import SearchIcon from "../../assets/icons/SearchIcon";

interface SearchInputProps {
  placeholder: string;
  handleSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, handleSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
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
