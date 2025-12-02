import { useEffect, useState } from "react";
import MedicalCenterCardBooking from "../../common/MedicalCenterCardBooking";
import MedicalCenterPromotion from "../../common/MedicalCenterPromotion";
import styles from "./MedicalCenterDirectory.module.css";
import vector from "../../../assets/icons/vector.svg";

export type BookingItem = {
  "Hospital Name": string;
  City: string;
  State: string;
  "Hospital Type": string;
  "Hospital overall rating": number | string;
  bookingDate: string;
  bookingTime: string;
};

export const MedicalCenterDirectory = () => {
  const [bookings, setBookings] = useState<BookingItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("bookings");
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  return (
    <section className={styles.page}>
      <div className={styles.pageHeader} role="banner" aria-label="results header">
        <h2>15 medical centers available in Alaska</h2>
        <div className={styles.pageSub}>
          <img src={vector} alt="vector" />
          Book appointments with minimum wait-time &amp; verified doctor details
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.leftSection}>
          {bookings.length === 0 ? (
            <p>No bookings found</p>
          ) : (
            bookings.map((item, index) => <MedicalCenterCardBooking key={index} hospital={item} />)
          )}
        </div>

        <div className={styles.rightSection}>
          <MedicalCenterPromotion />
        </div>
      </div>
    </section>
  );
};
