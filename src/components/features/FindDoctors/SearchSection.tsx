import SearchIcon from "../../../assets/icons/SearchIcon";
import { Button } from "../../common/Button";
import SearchInput from "../../common/SearchInput";
import styles from "./SearchSection.module.css";
import { LocationIcon } from "../../../assets/images/FindDoctors/LocationIcon";

export const SearchSection = () => {
  function handleSearch(searchTerm: string) {
    console.log(searchTerm);
  }
  return (
    <div className={styles.searchContainer}>
      <SearchInput placeholder="State" handleSearch={handleSearch} style={{ width: "30%" }} icon={<LocationIcon />} />
      <SearchInput placeholder="City" handleSearch={handleSearch} style={{ width: "50%" }} icon={<LocationIcon />} />
      <Button style={{ width: "15%" }}>
        <SearchIcon color="#fff" height="15" width="15" /> Search
      </Button>
    </div>
  );
};
