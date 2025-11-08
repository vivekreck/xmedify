import { useState, useEffect, useRef } from "react";
import styles from "./PromotionalBanner.module.css";
import promotional_banner_1 from "../../../assets/images/promotional_banner_1.png";
import promotional_banner_2 from "../../../assets/images/promotional_banner_2.png";

const slides = [
  { id: 1, src: promotional_banner_1 },
  { id: 2, src: promotional_banner_2 },
  { id: 3, src: promotional_banner_1 },
  { id: 4, src: promotional_banner_2 },
];

export const PromotionalBanner = () => {
  const totalSlides = slides.length;
  const clonedSlides = [...slides, ...slides];

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
        if (prev + 1 > slides.length) return 1;
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
              <img src={slide.src} alt={`banner ${slide.id}`} className={styles.promotionalImage} />
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
  );
};
