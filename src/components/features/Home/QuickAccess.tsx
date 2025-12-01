import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AmbulanceIcon } from "../../../assets/icons/QuickAccess/AmbulanceIcon";
import DoctorsIcon from "../../../assets/icons/QuickAccess/DoctorsIcon";
import { HospitalsIcon } from "../../../assets/icons/QuickAccess/HospitalsIcon";
import { LabsIcon } from "../../../assets/icons/QuickAccess/LabsIcon";
import { MedicalStoreIcon } from "../../../assets/icons/QuickAccess/MedicalStoreIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { Button } from "../../common/Button";
import { QuickAccessCards } from "../../common/QuickAccessCards";
import SearchInput from "../../common/SearchInput";
import styles from "./QuickAccess.module.css";

export const QuickAccess = () => {
  const navigate = useNavigate();

  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.log("Error fetching states:", err));
  }, []);
  useEffect(() => {
    if (!selectedState) return;
    setSelectedCity("");

    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.log("Error fetching cities:", err));
  }, [selectedState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedState || !selectedCity) {
      alert("Please select both State and City");
      return;
    }
    navigate(`/find-doctors?state=${selectedState}&city=${selectedCity}`);
  };

  const quickAccessItems = [
    { icon: <DoctorsIcon />, title: "Doctors", isActive: false },
    { icon: <LabsIcon />, title: "Labs", isActive: false },
    { icon: <HospitalsIcon />, title: "Hospitals", isActive: true },
    { icon: <MedicalStoreIcon />, title: "Medical Store", isActive: false },
    { icon: <AmbulanceIcon />, title: "Ambulance", isActive: false },
  ];

  return (
    <section className={styles.quickAccessSection}>
      {/* Search Fields */}
      <form onSubmit={handleSubmit} className={styles.searchContainer}>
        {/* State */}
        <div style={{ position: "relative", width: "30%" }}>
          <SearchInput
            placeholder="State"
            value={selectedState}
            icon={<SearchIcon />}
            readOnly
            onFocus={() => {
              setStateDropdownOpen(true);
              setCityDropdownOpen(false);
            }}
          />

          <div id="state" className={`${styles.dropdownBox} ${!stateDropdownOpen ? styles.hidden : ""}`}>
            {states.map((st) => (
              <div
                key={st}
                className={styles.dropdownItem}
                onClick={() => {
                  setSelectedState(st);
                  setStateDropdownOpen(false);
                }}
              >
                {st}
              </div>
            ))}
          </div>
        </div>

        {/* City */}
        <div style={{ position: "relative", width: "30%" }}>
          <SearchInput
            placeholder="City"
            value={selectedCity}
            icon={<SearchIcon />}
            readOnly
            onFocus={() => {
              setCityDropdownOpen(true);
              setStateDropdownOpen(false);
            }}
          />

          <div id="city" className={`${styles.dropdownBox} ${!cityDropdownOpen ? styles.hidden : ""}`}>
            {cities.map((city) => (
              <div
                key={city}
                className={styles.dropdownItem}
                onClick={() => {
                  setSelectedCity(city);
                  setCityDropdownOpen(false);
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <Button type="submit" id="searchBtn">
          <SearchIcon color="#fff" height="15" width="15" /> Search
        </Button>
      </form>

      {/* Quick Access Section */}
      <div className={styles.quickAccessTitle}>You may be looking for</div>
      <div className={styles.cardsContainer}>
        {quickAccessItems.map((item, index) => (
          <QuickAccessCards key={index} icon={item.icon} title={item.title} isActive={item.isActive} />
        ))}
      </div>
    </section>
  );
};
