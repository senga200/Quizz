import "./Quizz.css";
import React from "react";
import { useRef, useState } from "react";
import { data } from "../../assets/data";

function Quizz() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [showScore, setShowScore] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let optionsArray = [Option1, Option2, Option3, Option4];

  const checkAnswer = (e, answer) => {
    if (lock === false) {
      if (answer === question.answer) {
        console.log(`correct !! la reponse est",${answer}`);
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        console.log("incorrect");
        e.target.classList.add("incorrect");
        setLock(true);
        optionsArray[question.answer - 1].current.classList.add("correct");
      }
    }
  };

  const nextQuestion = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setShowScore(true);
        console.log("score", score);
        return;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      console.log(score, "suivant");
      optionsArray.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("incorrect");
        return null;
      });
    }
  };

  return (
    <div className="container">
      <h1>hello world</h1>
      <hr />
      <h2>
        {index + 1}.{question.question}
      </h2>
      <ul>
        <li
          ref={Option1}
          onClick={(e) => {
            checkAnswer(e, 1);
          }}
        >
          {question.option1}
        </li>
        <li
          ref={Option2}
          onClick={(e) => {
            checkAnswer(e, 2);
          }}
        >
          {question.option2}
        </li>
        <li
          ref={Option3}
          onClick={(e) => {
            checkAnswer(e, 3);
          }}
        >
          {question.option3}
        </li>
        <li
          ref={Option4}
          onClick={(e) => {
            checkAnswer(e, 4);
          }}
        >
          {question.option4}
        </li>
      </ul>
      <button onClick={nextQuestion}>suivant</button>
      <div className="index">
        question {index + 1} de {data.length}
      </div>
    </div>
  );
}

export default Quizz;
