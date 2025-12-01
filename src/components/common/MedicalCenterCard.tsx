import React, { useState } from "react";
import styles from "./MedicalCenterCard.module.css";
import { Button } from "./Button";
import { HospitalInfoCard } from "./HospitalInfoCard";

interface Props {
  hospital: any;
}

const MedicalCenterCard: React.FC<Props> = ({ hospital }) => {
  const [showSlots, setShowSlots] = useState(false);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const dates = [
    { day: "Today", slots: "15 Slots Available" },
    { day: "Tomorrow", slots: "17 Slots Available" },
    { day: "Fri, 5 May", slots: "18 Slots Available" },
  ];

  const timeSlots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  return (
    <div className={styles.card}>
      <div className={styles.mainSection}>
        <HospitalInfoCard showSlots={showSlots} hospital={hospital} />

        <div className={styles.rightSection}>
          <p className={styles.available}>Available Today</p>
          <Button onClick={() => setShowSlots((curr) => !curr)}>Book FREE Center Visit</Button>
        </div>
      </div>

      {showSlots && (
        <>
          {/* Date Selector */}
          <div className={styles.dateSelector}>
            <button className={styles.navButton}>‹</button>
            {dates.map((date, index) => (
              <div
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`${styles.dateOption} ${selectedDate === index ? styles.dateActive : ""}`}
              >
                <p className={styles.dayName}>{date.day}</p>
                <div className={styles.slotsCount}>{date.slots}</div>
              </div>
            ))}
            <button className={styles.navButton}>›</button>
          </div>

          {/* Time Slots */}
          <div className={styles.timeSlotsContainer}>
            {Object.entries(timeSlots).map(([period, slots]) => (
              <div key={period} className={styles.timeSlotSection}>
                <p className={styles.periodTitle}>{period}</p>
                <div className={styles.slotsGrid}>
                  {slots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSlot(slot)}
                      className={`${styles.slotButton} ${selectedSlot === slot ? styles.slotActive : ""}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MedicalCenterCard;
