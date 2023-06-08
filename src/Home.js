import React, { useState, useRef } from "react";
import Timer from "./Timer/Timer";
import Word from './Word/Word'
import { getData } from "./data";

export default function Home() {
  const [userText, setUserText] = useState("");
  const [result, setResult] = useState(false);
  const data = useRef(getData());

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const [correctWordArray, setCorrectWordArray] = useState([]);

  function handleChange(value) {
    setStartCounter(true);

    if (value.endsWith(" ")) {
      if (activeWordIndex === data.current.length) {
        setUserText("");
        setResult(true);
        setStartCounter(false);
        return;
      }

      setActiveWordIndex((index) => index + 1);
      setUserText("");

      setCorrectWordArray((_data) => {
        const word = value.trim();
        const newResult = [..._data];
        newResult[activeWordIndex] = word === data.current[activeWordIndex];
        return newResult;
      });
    } else {
      setUserText(value);
    }
  }

  return (
    <div className="Container">
      <div className="Main">
        <h1>Typing Speed Task</h1>
        <Timer
          startCounter={startCounter}
          correctWords={correctWordArray.filter(Boolean).length}
        />
        {result ? null : (
          <div className="text">
            {data.current.map((word, index) => {
              return (
                <Word
                  text={word}
                  active={index === activeWordIndex}
                  correct={correctWordArray[index]}
                />
              );
            })}
          </div>
        )}
        {result ? (
          <p className="Congratulations">Congrats Buddy</p>
        ) : (
          <input className="Input"
            type='text'
            value={userText}
            onChange={(e) => handleChange(e.target.value)}
            placeholder='Start typing...'
          />
        )}
      </div>
    </div>
  );
}
