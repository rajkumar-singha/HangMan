import React from "react";
import TextInputContainer from "../../component/TextInputForm/TextInputContainer";
import { useNavigate } from "react-router-dom";

function StartGame() {
  const navigate = useNavigate();

  function handleSubmit(value) {
    navigate("/play", {state: {wordSelected: value}});
  }

  return (
    <>
      <h1>Start Game</h1>
      <TextInputContainer
        onSubmit={(value) => {
          handleSubmit(value);
          console.log("This form is submitted", value);
        }}
      />
    </>
  );
}

export default StartGame;
