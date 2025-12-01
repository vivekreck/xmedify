import SearchIcon from "../../../assets/icons/SearchIcon";
import { Button } from "../../common/Button";
import SearchInput from "../../common/SearchInput";
import styles from "./SearchSection.module.css";

export const SearchSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.pageHeading}>My Bookings</h1>

        <div className={styles.searchContainer}>
          <SearchInput placeholder="Search By Hospital" style={{ width: "100%", margin: "0px", padding: "0px" }} />
          <Button style={{ width: "25%" }}>
            <SearchIcon color="#fff" height="15" width="15" /> Search
          </Button>
        </div>
      </div>
    </section>
  );
};
