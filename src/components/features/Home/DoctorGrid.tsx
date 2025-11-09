import { useState, useEffect, useRef } from "react";
import styles from "./DoctorGrid.module.css";
import image1 from "../../../assets/images/DoctorGrid/image1.png";
import image2 from "../../../assets/images/DoctorGrid/image2.png";
import image3 from "../../../assets/images/DoctorGrid/image3.png";
import { DoctorProfileCard } from "../../common/DoctorProfileCard";

const slides = [
  {
    id: 1,
    src: image1,
    doctorName: "Dr. Ahmad Khan",
    doctorSpecialization: "Neurologist",
  },
  {
    id: 2,
    src: image2,
    doctorName: "Dr. Heena Sachdeva",
    doctorSpecialization: "Orthopadics",
  },
  {
    id: 3,
    src: image3,
    doctorName: "Dr. Ankur Sharma",
    doctorSpecialization: "Medicine",
  },
];

export const DoctorGrid = () => {
  const totalSlides = slides.length;
  const clonedSlides = [...slides, ...slides, ...slides, ...slides];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [active, setActive] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentSlide === clonedSlides.length - 1) {
        setIsTransitioning(false);
        setCurrentSlide(1);
      } else if (currentSlide === 0) {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides);
      } else {
        setIsTransitioning(true);
      }
    };

    const track = trackRef.current;
    if (track) track.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      if (track) track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentSlide, clonedSlides.length, totalSlides]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev + 1 > slides.length * 2) return 1;
        return prev + 1;
      });
      setActive((prev) => {
        if (prev + 1 > 3) return 1;
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.gridContainer}>
      <h1>Our Medical Specialist</h1>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselWrapper}>
          <div
            ref={trackRef}
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${currentSlide * (100 / 3)}%)`,
              transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            }}
          >
            {clonedSlides.map((slide, index) => (
              <div key={index} className={styles.carouselSlide}>
                <DoctorProfileCard
                  src={slide.src}
                  id={slide.id}
                  doctorName={slide.doctorName}
                  doctorSpecialization={slide.doctorSpecialization}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.carouselDots}>
          {["1", "2", "3"].map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${active - 1 === index ? styles.active : ""}`}
              onClick={() => setCurrentSlide(index + 1)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
