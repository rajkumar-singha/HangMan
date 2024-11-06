import React from "react";
import { GetAllChar } from "./MaskedTextUtility";

function MaskedText({ text, usedLetters }) {
  const letters = GetAllChar(text, usedLetters);
  return (
    <>
      <div>{letters}</div>
    </>
  );
}  

export default MaskedText;
