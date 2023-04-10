import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

const Word = ({letter, index}: any) => {
  return (
    <span
      className={clsx()}
    >{letter}</span>
  )
}

const Words = () => {
  const prompt = "hello this is a random prompt"
  const [index, setIndex] = useState(0);

  console.log("inds", index);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === prompt[index]) {
      setIndex(index+1);
    }
  }, [index]);
  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [index]);

  console.log(prompt.split(""));

  return (
    <div className="flex flex-grow flex-wrap gap-1">
      {prompt.split(" ").map((letter, i) => {
        return <Word key={i} letter={letter} index={index}/>
      })}
    </div>
  );
}

export default Words;
