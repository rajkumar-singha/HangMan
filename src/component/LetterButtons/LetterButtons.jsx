import React from "react";
function LetterButtons({ text, usedLetters, onLetterClick }) {
  const originalCharacters = new Set(text.toUpperCase().split(""));
  const Alphabet = new Array(26)
    .fill("")
    .map((e, index) => String.fromCharCode(65 + index));
  const selectedLetters = new Set(usedLetters.join("").toUpperCase().split(""));

  const buttonStyle = function (letter) {
    if (selectedLetters.has(letter)) {
      return `${originalCharacters.has(letter) ? 'bg-green-500 border border-green-800' : "bg-red-500 border border-red-800"}`;
    } else {
      return "bg-blue-500 border border-blue-800 hover:bg-blue-800";
    }
  };

  const handleClicked = function (event) {
    const character = event.target.value;
    onLetterClick?.(character);
  };

  const button = Alphabet.map((letter) => {
    return (
      <button
        className={`w-12 h-12 m-1 rounded-md focus:outline-none text-white ${buttonStyle(
          letter
        )}`}
        key={letter}
        value={letter}
        onClick={handleClicked}
        disabled={selectedLetters.has(letter)}
      >
        {letter}
      </button>
    );
  });

  return <div>{button}</div>;
}

export default LetterButtons;
