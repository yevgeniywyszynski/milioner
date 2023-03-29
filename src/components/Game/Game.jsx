import React, { useEffect, useState } from "react";
import styles from "./Game.module.scss";
import useSound from "use-sound";
import play from "../../assets/play.wav";
import wrong from "../../assets/wrong.mp3";
import correct from "../../assets/correct.mp3";

export default function Game({
  setNumberQue,
  questionsData,
  setStop,
  numberQue,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [playSound] = useSound(play);
  const [wrongSound] = useSound(wrong);
  const [correctSound] = useSound(correct);

  const checking = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  useEffect(() => {
    playSound();
  }, [playSound]);

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answerActive");
    checking(2000, () => {
      setClassName(answer.correct ? "answerCorrect" : "answerWrong");
    });
    checking(4000, () => {
      if (answer.correct) {
        correctSound();
        checking(1000, () => {
          setNumberQue((prev) => prev + 1);
          console.log(numberQue);
          setSelectedAnswer(null);
        });
        if (numberQue == 15) {
          setStop(true);
        }
      } else {
        wrongSound();
        checking(1000, () => {
          setStop(true);
        });
      }
    });
  };

  useEffect(() => {
    setQuestion(questionsData[numberQue - 1]);
  }, [questionsData, numberQue]);

  return (
    <div className={styles.qAWrapper}>
      <div className={styles.question}>{question?.question}</div>
      <div className={styles.answers}>
        {question?.answers.map((answer) => (
          <div
            className={
              selectedAnswer?.text === answer?.text
                ? styles[className]
                : styles.answer
            }
            onClick={() => !selectedAnswer && handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}
