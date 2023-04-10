import { useCallback, useEffect, useState } from "react";

const Letter = () => {

}

const Word = () =>  {
  
}

const Words = () => {
  const prompt = "hello this is a random prompt"
  const [index, setIndex] = useState(0);

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

  return (
    <div className="flex-grow">
      {prompt}
    </div>
  );
}

export default Words;
