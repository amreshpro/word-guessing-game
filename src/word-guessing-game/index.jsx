import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Button from "./components/button";
import Input from "./components/input";
import { QUESTIONS } from "./data";
import { useState } from "react";
import Score from "./components/score";
import Text from "./components/text";
import "./style.css";
const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function WordGuessingGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
 

  function onLeftClick() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      console.log("left click");
    }
  }
  function onRightClick() {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      console.log("right clicked");
    }
  }
  return (
    <div>
      <div className="input-keyboard">

        <div className="input-container">
          {QUESTIONS[currentQuestionIndex].hint.split("")?.map((char, i) => {
            console.log("render",i);
            return <Input key={i} value={char} />;
          })}
        </div>

        <div className="alphabet-container">
          {ALPHABET?.map((alphabet, i) => {
            return (
              <Button
                key={i}
                label={alphabet}
                type={Button.ButtonType.ROUNDED}
              />
            );
          })}
        </div>
      </div>

      <div className="question-container">
        <Text size={Text.TextSize.MEDIUM}>
          {QUESTIONS[currentQuestionIndex].question}
        </Text>
      </div>

      <div className="score">
        <Score />
      </div>

      <div className="slider">
        <Button className="btn_left" onClick={onLeftClick}>
          <FaArrowAltCircleLeft />
        </Button>
        <Button className="btn_right" onClick={onRightClick}>
          <FaArrowAltCircleRight />
        </Button>
      </div>
    </div>
  );
}

export default WordGuessingGame;
