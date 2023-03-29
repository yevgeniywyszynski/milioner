import React, { useEffect } from "react";
import Game from "../Game/Game";
import styles from "./Main.module.scss";
import Timer from "../Timer/Timer";

export default function Main({
  setNumberQue,
  numberQue,
  setStop,
  setSalary,
  levels,
}) {
  const questionsData = [
    {
      id: 1,
      question:
        "W którym roku Titanic zatonął na Oceanie Atlantyckim 15 kwietnia podczas dziewiczej podróży z Southampton?",
      answers: [
        {
          text: "1900",
          correct: false,
        },
        {
          text: "1992",
          correct: false,
        },
        {
          text: "1912",
          correct: true,
        },
        {
          text: "1886",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Jak nazywa się największa firma technologiczna w Korei Południowej?",
      answers: [
        {
          text: "Samsung",
          correct: true,
        },
        {
          text: "iPhone",
          correct: false,
        },
        {
          text: "Polenez",
          correct: false,
        },
        {
          text: "Casio",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Jaka jest stolica Portugalii?",
      answers: [
        {
          text: "Warszawa",
          correct: false,
        },
        {
          text: "Barcelona",
          correct: false,
        },
        {
          text: "Lizbona",
          correct: true,
        },
        {
          text: "Porto",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Jaki jest najmniejszy ptak na świecie?",
      answers: [
        {
          text: "Koliber",
          correct: true,
        },
        {
          text: "Kruk",
          correct: false,
        },
        {
          text: "Papuga",
          correct: false,
        },
        {
          text: "Wrobel",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Ile serc ma ośmiornica?",
      answers: [
        {
          text: "Cztery",
          correct: false,
        },
        {
          text: "Jedno",
          correct: false,
        },
        {
          text: "Dwa",
          correct: false,
        },
        {
          text: "Trzy",
          correct: true,
        },
      ],
    },
  ];

  useEffect(() => {
    if (numberQue > 1 && numberQue < 15) {
      setSalary(levels.find((e) => e.id === numberQue - 1).amount);
    } else {
      setSalary(levels.find((e) => e.id === numberQue).amount);
    }
  }, [levels, numberQue]);

  return (
    <>
      <div className={styles.timerWrapper}>
        <div className={styles.timer}>
          <Timer setStop={setStop} numberQue={numberQue} />
        </div>
      </div>
      <div className={styles.questionWrapper}>
        <Game
          setNumberQue={setNumberQue}
          questionsData={questionsData}
          setStop={setStop}
          numberQue={numberQue}
        />
      </div>
    </>
  );
}
