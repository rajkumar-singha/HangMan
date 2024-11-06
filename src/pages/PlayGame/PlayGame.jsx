import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../component/MaskedText/MaskedText";
import LetterButtons from "../../component/LetterButtons/LetterButtons";
import HangMan from "../../component/HangMan/HangMan";

function PlayGame() {
  const [usedLetters, setUsedLetters] = useState([]);
  const location = useLocation();
  const wordSelected = location?.state?.wordSelected;
  const [step, setStep] = useState(0);

  const handelLetterClicked = function (letter) {
    if (wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
      setStep(step + 1);
    }
    setUsedLetters([...usedLetters, letter]);
  };
  return (
    <>
      <h1>PlayGame</h1>
      <hr />
      <MaskedText text={wordSelected} usedLetters={usedLetters} />
      <hr />

      <div className="flex justify-between items-center">
        <div className="basis-2/4">
          <LetterButtons
            text={wordSelected}
            usedLetters={usedLetters}
            onLetterClick={handelLetterClicked}
          />
        </div>
        <div className="basis-2/4 flex justify-center items-center">
          <HangMan step={step} />
        </div>
      </div>
      <hr />
      <Link to="/start">Sart Game</Link>
    </>
  );
}

export default PlayGame;
