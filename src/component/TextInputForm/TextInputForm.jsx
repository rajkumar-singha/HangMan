// presentaion pattern

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const TextInputForm = ({
  value,
  handleInputChange,
  handleSubmit,
  inputType,
  setInputType,
}) => {
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <div className="mr-2 flex-1">
        <TextInput
          label={"input you word"}
          value={value}
          type={inputType}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-end">
        <Button
          styleType="warning"
          text={inputType === "password" ? "Show" : "Hide"}
          buttonType="button"
          onClickHandeler={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        />
      </div>
      <div className="flex items-end ms-2">
        <Button text="OK" buttonType="submit" />
      </div>
    </form>
  );
};

export default TextInputForm;
