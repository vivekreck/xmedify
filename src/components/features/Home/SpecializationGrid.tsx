import styles from "./SpecializationGrid.module.css";
import { SpecializationCard } from "../../common/SpecializationCard";
import { Button } from "../../common/Button";
import { Dentistry } from "../../../assets/icons/SpecializationGrid/Dentistry";
import { PrimaryCare } from "../../../assets/icons/SpecializationGrid/PrimaryCare";
import { Cardiology } from "../../../assets/icons/SpecializationGrid/Cardiology";
import { MRIResonance } from "../../../assets/icons/SpecializationGrid/MRIResonance";
import { BloodTest } from "../../../assets/icons/SpecializationGrid/BloodTest";
import { Piscologist } from "../../../assets/icons/SpecializationGrid/Piscologist";
import { Laboratory } from "../../../assets/icons/SpecializationGrid/Laboratory";
import { XRay } from "../../../assets/icons/SpecializationGrid/XRay";

export const SpecializationGrid = () => {
  const specializationItems = [
    { icon: <Dentistry />, title: "Dentistry" },
    { icon: <PrimaryCare />, title: "Primary Care" },
    { icon: <Cardiology />, title: "Cardiology" },
    { icon: <MRIResonance />, title: "MRI Resonance" },
    { icon: <BloodTest />, title: "Blood Test" },
    { icon: <Piscologist />, title: "Piscologist" },
    { icon: <Laboratory />, title: "Laboratory" },
    { icon: <XRay />, title: "X-Ray" },
  ];

  return (
    <section className={styles.specializationContainer}>
      <h1>Find By Specialisation</h1>
      <div className={styles.cardGrid}>
        {specializationItems.map((item, index) => (
          <SpecializationCard key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
      <Button>View All</Button>
    </section>
  );
};
