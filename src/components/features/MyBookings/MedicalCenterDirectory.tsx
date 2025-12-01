import MedicalCenterCardBooking from "../../common/MedicalCenterCardBooking";
import MedicalCenterPromotion from "../../common/MedicalCenterPromotion";
import styles from "./MedicalCenterDirectory.module.css";
import vector from "../../../assets/icons/vector.svg";

export const dummyHospitals = [
  {
    "Provider ID": "010001",
    "Hospital Name": "Alaska Regional Hospital",
    Address: "2801 DeBarr Road",
    City: "Anchorage",
    State: "Alaska",
    "ZIP Code": 99508,
    "County Name": "Anchorage",
    "Phone Number": 9072761131,
    "Hospital Type": "Acute Care Hospitals",
    "Hospital Ownership": "Proprietary",
    "Emergency Services": "Yes",
    "Meets criteria for meaningful use of EHRs": "Y",
    "Hospital overall rating": 4,
    "Mortality national comparison": "Same as the national average",
    "Safety of care national comparison": "Above the national average",
    "Readmission national comparison": "Same as the national average",
    "Patient experience national comparison": "Above the national average",
    "Effectiveness of care national comparison": "Same as the national average",
    "Timeliness of care national comparison": "Above the national average",
    "Efficient use of medical imaging national comparison": "Same as the national average",
  },
  {
    "Provider ID": "020024",
    "Hospital Name": "Central Peninsula Hospital",
    Address: "250 Hospital Place",
    City: "Soldotna",
    State: "Alaska",
    "ZIP Code": 99669,
    "County Name": "Kenai Peninsula",
    "Phone Number": 9072624404,
    "Hospital Type": "Acute Care Hospitals",
    "Hospital Ownership": "Voluntary non-profit - Other",
    "Emergency Services": "Yes",
    "Meets criteria for meaningful use of EHRs": "Y",
    "Hospital overall rating": 3,
    "Mortality national comparison": "Same as the national average",
    "Safety of care national comparison": "Same as the national average",
    "Readmission national comparison": "Same as the national average",
    "Patient experience national comparison": "Below the national average",
    "Effectiveness of care national comparison": "Same as the national average",
    "Timeliness of care national comparison": "Below the national average",
    "Efficient use of medical imaging national comparison": "Same as the national average",
  },
  {
    "Provider ID": "020006",
    "Hospital Name": "Bartlett Regional Hospital",
    Address: "3260 Hospital Drive",
    City: "Juneau",
    State: "Alaska",
    "ZIP Code": 99801,
    "County Name": "Juneau",
    "Phone Number": 9077968900,
    "Hospital Type": "Acute Care Hospitals",
    "Hospital Ownership": "Government - Local",
    "Emergency Services": "Yes",
    "Meets criteria for meaningful use of EHRs": "Y",
    "Hospital overall rating": 4,
    "Mortality national comparison": "Above the national average",
    "Safety of care national comparison": "Same as the national average",
    "Readmission national comparison": "Below the national average",
    "Patient experience national comparison": "Same as the national average",
    "Effectiveness of care national comparison": "Above the national average",
    "Timeliness of care national comparison": "Above the national average",
    "Efficient use of medical imaging national comparison": "Same as the national average",
  },
  {
    "Provider ID": "020035",
    "Hospital Name": "Providence Kodiak Island Medical Center",
    Address: "1915 Rezanof Drive",
    City: "Kodiak",
    State: "Alaska",
    "ZIP Code": 99615,
    "County Name": "Kodiak Island",
    "Phone Number": 9074869500,
    "Hospital Type": "Critical Access Hospitals",
    "Hospital Ownership": "Voluntary non-profit - Church",
    "Emergency Services": "Yes",
    "Meets criteria for meaningful use of EHRs": "Y",
    "Hospital overall rating": 3,
    "Mortality national comparison": "Same as the national average",
    "Safety of care national comparison": "Below the national average",
    "Readmission national comparison": "Same as the national average",
    "Patient experience national comparison": "Same as the national average",
    "Effectiveness of care national comparison": "Below the national average",
    "Timeliness of care national comparison": "Same as the national average",
    "Efficient use of medical imaging national comparison": "Same as the national average",
  },
  {
    "Provider ID": "020049",
    "Hospital Name": "Seward Community Hospital",
    Address: "417 First Avenue",
    City: "Seward",
    State: "Alaska",
    "ZIP Code": 99664,
    "County Name": "Kenai Peninsula",
    "Phone Number": 9072245205,
    "Hospital Type": "Critical Access Hospitals",
    "Hospital Ownership": "Government - Local",
    "Emergency Services": "Yes",
    "Meets criteria for meaningful use of EHRs": "Y",
    "Hospital overall rating": 2,
    "Mortality national comparison": "Below the national average",
    "Safety of care national comparison": "Below the national average",
    "Readmission national comparison": "Same as the national average",
    "Patient experience national comparison": "Below the national average",
    "Effectiveness of care national comparison": "Same as the national average",
    "Timeliness of care national comparison": "Below the national average",
    "Efficient use of medical imaging national comparison": "Same as the national average",
  },
];

export const MedicalCenterDirectory = () => {
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
          {dummyHospitals.map((item, index) => (
            <MedicalCenterCardBooking key={index} hospital={item} />
          ))}
        </div>

        <div className={styles.rightSection}>
          <MedicalCenterPromotion />
        </div>
      </div>
    </section>
  );
};
