import hero_image from "../../../assets/images/hero_image.png";
import { Button } from "../../common/Button";
import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <h2 className={styles.subtitle}>Skip the travel! Find Online</h2>
        <h1 className={styles.title}>
          Medical <span className={styles.titleHighlight}>Centers</span>
        </h1>
        <p className={styles.description}>
          Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
        </p>
        <Button>Find Centers</Button>
      </div>

      <div className={styles.imageContainer}>
        <img src={hero_image} alt="hero section" className={styles.heroImage} />
      </div>
    </section>
  );
};
