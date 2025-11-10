import { type FC } from "react";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  id?: number;
  image: string;
  category: string;
  date: Date;
  title: string;
  userImage: string;
  userName: string;
}

export const NewsCard: FC<NewsCardProps> = ({ image, category, date, title, userImage, userName }) => {
  const _date = new Date(date);

  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = _date.toLocaleDateString("en-US", options);

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <span className={styles.category}>{category}</span>|<span className={styles.date}>{formattedDate}</span>
        </div>

        <h3 className={styles.cardTitle}>{title}</h3>

        <div className={styles.cardAuthor}>
          <img src={userImage} alt={userName} className={styles.authorAvatar} />
          <span className={styles.authorName}>{userName}</span>
        </div>
      </div>
    </div>
  );
};
