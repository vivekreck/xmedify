import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MedicalCenterCard from "../../common/MedicalCenterCard";
import MedicalCenterPromotion from "../../common/MedicalCenterPromotion";
import styles from "./MedicalCenterDirectory.module.css";
import vector from "../../../assets/icons/vector.svg";

export const MedicalCenterDirectory = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const state = params.get("state") || "";
  const city = params.get("city") || "";

  const [centers, setCenters] = useState<any[]>([]);

  useEffect(() => {
    if (!state || !city) return;

    const fetchCenters = async () => {
      try {
        const res = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        const data = await res.json();
        setCenters(data);
      } catch (err) {
        console.error("Error fetching centers:", err);
      }
    };

    fetchCenters();
  }, [state, city]);

  return (
    <section className={styles.page}>
      <div className={styles.pageHeader} role="banner" aria-label="results header">
        <h1>
          {centers.length} medical centers available in {city.toLowerCase()}
        </h1>
        <div className={styles.pageSub}>
          <img src={vector} alt="vector" />
          Book appointments with minimum wait-time &amp; verified doctor details
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.leftSection}>
          {centers.map((item, index) => (
            <MedicalCenterCard key={index} hospital={item} />
          ))}
        </div>

        <div className={styles.rightSection}>
          <MedicalCenterPromotion />
        </div>
      </div>
    </section>
  );
};
