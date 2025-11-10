import { NewsCard } from "../../common/NewsCard";
import styles from "./NewsSection.module.css";
import image from "../../../assets/images/News/newsImage.png";
import userImage from "../../../assets/images/News/userImage.png";

export const NewsSection = () => {
  const newsDetails = [
    {
      id: 1,
      image: image,
      category: "Medical",
      date: new Date(),
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      userImage: userImage,
      userName: "Rebecca Lee",
    },
    {
      id: 2,
      image: image,
      category: "Medical",
      date: new Date(),
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      userImage: userImage,
      userName: "Rebecca Lee",
    },
    {
      id: 3,
      image: image,
      category: "Medical",
      date: new Date(),
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      userImage: userImage,
      userName: "Rebecca Lee",
    },
  ];
  return (
    <section className={styles.container}>
      <h2 className={styles.subtitle}>Blog & News</h2>
      <h1 className={styles.title}>Read Our Latest News</h1>
      <div className={styles.cardsContainer}>
        {newsDetails.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
