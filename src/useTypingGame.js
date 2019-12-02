import { useState, useRef, useEffect } from "react";

function useTypingGame(startTime = 5) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const inputRef = useRef(null);

  function handleChange(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  function countWords(text) {
    const words = text.trim().split(" ");
    return words.filter(word => word !== "").length;
  }
  function endGame() {
    setIsTimeRunning(false);
    setWordCount(countWords(text));
  }

  async function startGame() {
    setTimeRemaining(startTime);
    await setIsTimeRunning(true);
    setWordCount(0);
    setText("");
    inputRef.current.focus();
  }

  return {
    inputRef,
    text,
    handleChange,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  };
}

export default useTypingGame;
