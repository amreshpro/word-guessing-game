/* eslint-disable react/prop-types */
import "./style.css";
import Input from "../input";
import Text from "../text";

export default function Hint({ value, setAnswerByUser,answerByUser='' }) {
  function handleInput(e) {
    console.log(e.target.value);
    const newValue = e.target.value || "";
    if (newValue)
      setAnswerByUser((prevValue) => {
        return prevValue + newValue;
      });
  }
  if (value == "*") {
    return <Input value={answerByUser} onInput={handleInput} maxLength={1} />;
  } else return <Text content={value} className="hint-text" />;
}
