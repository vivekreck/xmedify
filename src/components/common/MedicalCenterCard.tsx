import React, { useState } from "react";
import styles from "./MedicalCenterCard.module.css";
import HospitalIcon from "../../assets/images/FindDoctors/HospitalIcon.png";
import { Button } from "./Button";
import { ThumbIcon } from "../../assets/icons/ThumbIcon";

const MedicalCenterCard: React.FC = () => {
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
        <div className={styles.leftSection}>
          <div className={styles.iconWrapper}>
            <img src={HospitalIcon} alt="Hospital Icon" />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>Fortis Hospital Richmond Road</h3>
            <p className={styles.location}>Bangalore, Karnataka</p>
            <p className={styles.subtitle}>Smilesessence Center for Advanced Dentistry + 1 more</p>
            <p className={styles.freeTag}>
              FREE <span className={styles.strike}>₹550</span> <div>Consultation fee at clinic</div>
            </p>
            <div className={styles.likes}>
              <ThumbIcon /> 5
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <p className={styles.available}>Available Today</p>
          <Button onClick={() => setShowSlots((curr) => !curr)}>
            {showSlots ? "Hide Booking Interface" : "Book FREE Center Visit"}
          </Button>
        </div>
      </div>

      {/* Date Selection */}
      {showSlots && (
        <div className={styles.dateSelector}>
          <button className={styles.navButton}>‹</button>
          {dates.map((date, index) => (
            <div
              key={index}
              onClick={() => setSelectedDate(index)}
              className={`${styles.dateOption} ${selectedDate === index ? styles.dateActive : ""}`}
            >
              <div className={styles.dayName}>{date.day}</div>
              <div className={styles.slotsCount}>{date.slots}</div>
            </div>
          ))}
          <button className={styles.navButton}>›</button>
        </div>
      )}

      {/* Time Slots */}
      {showSlots && (
        <div className={styles.timeSlotsContainer}>
          {Object.entries(timeSlots).map(([period, slots]) => (
            <div key={period} className={styles.timeSlotSection}>
              <h4 className={styles.periodTitle}>{period}</h4>
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
      )}
    </div>
  );
};

export default MedicalCenterCard;
