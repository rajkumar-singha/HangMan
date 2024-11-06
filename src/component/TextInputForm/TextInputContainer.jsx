// container pattern

import React, { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputContainer({ onSubmit }) {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted", value);
    onSubmit?.(value);
  }

  function handleInputChange(event) {
    console.log("Input Changed");
    console.log(event.target.value);
    setValue(event.target.value);
  }
  return (
    <div>
      <TextInputForm
        value={value}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        inputType={inputType}
        setInputType={setInputType}
      />
    </div>
  );
}

export default TextInputContainer;
