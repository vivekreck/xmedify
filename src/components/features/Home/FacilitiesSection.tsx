import styles from "./FacilitiesSection.module.css";

import expertDoctors from "../../../assets/images/FacilitiesSection/expertDoctors.png";
import happyPatients from "../../../assets/images/FacilitiesSection/happyPatients.png";
import hospitals from "../../../assets/images/FacilitiesSection/hospitals.png";
import laboratories from "../../../assets/images/FacilitiesSection/laboratories.png";
import { FacilitiesCard } from "../../common/FacilitiesCard";

export const FacilitiesSection = () => {
  const cardDetails = [
    {
      src: happyPatients,
      number: "5000+",
      type: "Happy Patients",
    },
    {
      src: hospitals,
      number: "200+",
      type: "Hospitals",
    },
    {
      src: laboratories,
      number: "1000+",
      type: "Laboratories",
    },
    {
      src: expertDoctors,
      number: "700+",
      type: "Expert Doctors",
    },
  ];
  return (
    <section className={styles.familiesSection}>
      <div className={styles.textContent}>
        <p className={styles.subHeading}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
        <h2 className={styles.heading}>Our Families</h2>
        <p className={styles.description}>
          We will work with you to develop individualised care plans, including management of chronic diseases. If we
          cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all
          enquiries sensitively and in the strictest confidence.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {cardDetails.map((item, index) => (
          <FacilitiesCard key={index} {...item} className={styles.card} />
        ))}
      </div>
    </section>
  );
};
