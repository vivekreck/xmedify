import { useState } from "react";
import styles from "./FAQSection.module.css";

import faqImage from "../../../assets/images/FAQSection/faqImage.png";
import smileIcon from "../../../assets/images/FAQSection/smileIcon.png";
import heartIcon from "../../../assets/images/FAQSection/heartIcon.png";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Why choose our medical for your family?",
    answer: "We provide trusted, comprehensive medical services tailored for your family's needs.",
  },
  {
    question: "Why we are different from others?",
    answer: "We combine experience, compassion, and innovation to deliver top-notch healthcare.",
  },
  {
    question: "Trusted & experience senior care & love",
    answer: "Our expert team offers personalized senior care with empathy and dedication.",
  },
  {
    question: "How to get appointment for emergency cases?",
    answer: "You can call our 24/7 emergency helpline or book online for instant support.",
  },
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <p className={styles.subTitle}>Get Your Answer</p>
      <h2 className={styles.title}>Frequently Asked Questions</h2>

      <div className={styles.faqContainer}>
        <div className={styles.imageWrapper}>
          <img src={faqImage} alt="FAQ" className={styles.faqImage} />
          <div className={styles.statsCard}>
            <img src={smileIcon} alt="Happy Patients" />
            <div>
              <h3>84k+</h3>
              <p>Happy Patients</p>
            </div>
          </div>
          <div className={styles.heartIcon}>
            <img src={heartIcon} alt="Heart Icon" />
          </div>
        </div>

        <div className={styles.questionsWrapper}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqQuestion}>
                <p>{faq.question}</p>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
