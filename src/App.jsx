// import Button from "./component/Button/Button";

// import TextInput from "./component/TextInput/TextInput";
import { Route, Routes } from "react-router-dom";
import TextInputContainer from "./component/TextInputForm/TextInputContainer";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
  return (
    <>
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      {/* <h1 className="text-3xl font-bold underline">Welcome To Hangman</h1>
      <TextInputContainer
        onSubmit={(value) => {
          console.log("value come from hiden form", value);
        }}
      /> */}
      {/* <TextInput label={"input you word"} value={"J"} onChange={() => {}} /> */}
      {/* <Button
        text="Primary"
        buttonType="submit"
        styleType="primary"
        onClickHandeler={() => {
          console.log("primary");
        }}
      />
      <Button
        text="secondary"
        buttonType="submit"
        styleType="secondary"
        onClickHandeler={() => {
          console.log("secondary");
        }}
      />
      <Button
        text="warning"
        buttonType="submit"
        styleType="warning"
        onClickHandeler={() => {
          console.log("warning");
        }}
      />
      <Button
        text="err"
        buttonType="submit"
        onClickHandeler={() => {
          console.log("err");
        }}
      /> */}
    </>
  );
}

export default App;
