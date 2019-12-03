import React from "react";
import useTypingGame from "./useTypingGame";

function App() {
  const {
    inputRef,
    text,
    handleChange,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  } = useTypingGame(15);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={inputRef}
        name="text"
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word Count: {wordCount ? wordCount : "???"}</h1>
    </div>
  );
}

export default App;
