import React from "react";
import styles from "./MoneyRating.module.scss";

export default function MoneyRating({ numberQue, levels }) {
  return (
    <>
      <ul className={styles.ratingList}>
        {levels.map((level) => (
          <li
            key={level.id}
            className={
              numberQue === level.id
                ? styles.ratingItemActive
                : styles.ratingItem
            }
          >
            <span className={styles.ratingItemNumber}>{level.id}</span>
            <span className={styles.ratingItemAmount}>{level.amount}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
