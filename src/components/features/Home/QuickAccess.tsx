import { AmbulanceIcon } from "../../../assets/icons/AmbulanceIcon";
import DoctorsIcon from "../../../assets/icons/DoctorsIcon";
import { HospitalsIcon } from "../../../assets/icons/HospitalsIcon";
import { LabsIcon } from "../../../assets/icons/LabsIcon";
import { MedicalStoreIcon } from "../../../assets/icons/MedicalStoreIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { Button } from "../../common/Button";
import { QuickAccessCards } from "../../common/QuickAccessCards";
import SearchInput from "../../common/SearchInput";
import styles from "./QuickAccess.module.css";

export const QuickAccess = () => {
  function handleSearch(searchTerm: string) {
    console.log(searchTerm);
  }

  const quickAccessItems = [
    { icon: <DoctorsIcon />, title: "Doctors" },
    { icon: <LabsIcon />, title: "Labs" },
    { icon: <HospitalsIcon />, title: "Hospitals" },
    { icon: <MedicalStoreIcon />, title: "Medical Store" },
    { icon: <AmbulanceIcon />, title: "Ambulance" },
  ];

  return (
    <section className={styles.quickAccessSection}>
      {/* Search Fields */}
      <div className={styles.searchContainer}>
        <SearchInput placeholder="State" handleSearch={handleSearch} />
        <SearchInput placeholder="City" handleSearch={handleSearch} />
        <Button>
          <SearchIcon color="#fff" height="15" width="15" /> Search
        </Button>
      </div>

      {/* Quick Access Section */}
      <div className={styles.quickAccessTitle}>You may be looking for</div>
      <div className={styles.cardsContainer}>
        {quickAccessItems.map((item, index) => (
          <QuickAccessCards key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </section>
  );
};
