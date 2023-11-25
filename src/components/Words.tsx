import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Letter from './Letter';

const Words = () => {
  const prompt = "hello this is a random prompt"
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    //preventing scrolling behavior from pressing spacebar
    if (e.key === ' ') {
      e.preventDefault();
    }

    if (e.key === 'Backspace' && cursorPosition > 0) {
      setCursorPosition((position) => position - 1);
    }

    const currentLetter = prompt[cursorPosition];
    if (e.key === prompt[cursorPosition]) {
      setCursorPosition(cursorPosition + 1);
    }

    //TODO: this only works once a letter is typed after the final letter
    //create a better way to signal a game over
    if (cursorPosition === prompt.length) {
      alert('game over');
    }

    console.log('Cursor Position', cursorPosition);
  }, [cursorPosition]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [cursorPosition]);

  return (
    <div className="flex flex-grow justify-center flex-wrap text-xl p-8">
      {prompt.split("").map((letter, i) => {
        //TODO: figure out how to group the letters into an element by their groups
        return <Letter key={i} letterPosition={i} letter={letter} cursorPosition={cursorPosition} />
      })}
    </div>
  );
}

export default Words;
