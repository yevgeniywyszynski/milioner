import React, { useRef } from "react";
import styles from "./Start.module.scss";

export default function Start({ setUserName }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };

  return (
    <div className={styles.start}>
      <input
        className={styles.startInput}
        type="text"
        placeholder="Your name"
        ref={inputRef}
      />
      <button onClick={handleClick} className={styles.startBtn}>
        Start Game
      </button>
    </div>
  );
}
