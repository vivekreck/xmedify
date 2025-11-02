import hero_section from "../../assets/images/hero_section.png";
import { Button } from "../common/Button";

export const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.contentContainer}>
        <h2 style={styles.subtitle}>Skip the travel! Find Online</h2>
        <h1 style={styles.title}>
          Medical <span style={styles.titleHighlight}>Centers</span>
        </h1>
        <p style={styles.description}>
          Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
        </p>
        <Button>Find Centers</Button>
      </div>

      <div style={styles.imageContainer}>
        <img src={hero_section} alt="hero section" style={styles.heroImage} />
      </div>
    </section>
  );
};

const styles: {
  heroSection: React.CSSProperties;
  contentContainer: React.CSSProperties;
  subtitle: React.CSSProperties;
  title: React.CSSProperties;
  titleHighlight: React.CSSProperties;
  description: React.CSSProperties;
  imageContainer: React.CSSProperties;
  heroImage: React.CSSProperties;
} = {
  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 100px",
    backgroundColor: "#f0f8ff",
    minHeight: "500px",
  },
  contentContainer: {
    flex: 1,
    maxWidth: "450px",
    padding: "60px 0",
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    letterSpacing: "0.5px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#1a1a1a",
    // lineHeight: "1.2",
  },
  titleHighlight: {
    color: "#42a5f5",
  },
  description: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#666",
    // lineHeight: "1.6",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  heroImage: {
    maxWidth: "500px",
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
};
