import React, { useMemo, useState } from "react";
import styles from "./Home.module.scss";
import MoneyRating from "../MoneyRating/MoneyRating";
import Main from "../Main/Main";
import Start from "../Start/Start";

export default function Home() {
  const [numberQue, setNumberQue] = useState(1);
  const [stop, setStop] = useState(false);
  const [salary, setSalary] = useState("$ 0");
  const [userName, setUserName] = useState(null);

  const levels = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  return (
    <div className={styles.home}>
      {userName ? (
        <>
          <div className={styles.mainPage}>
            {stop ? (
              <span className={styles.finalResult}>You earned: {salary}</span>
            ) : (
              <>
                <Main
                  setStop={setStop}
                  numberQue={numberQue}
                  setNumberQue={setNumberQue}
                  setSalary={setSalary}
                  levels={levels}
                  salary={salary}
                />
              </>
            )}
          </div>
          <div className={styles.winRating}>
            <MoneyRating levels={levels} numberQue={numberQue} />
          </div>
        </>
      ) : (
        <Start userName={userName} setUserName={setUserName} />
      )}
    </div>
  );
}
