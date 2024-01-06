import { useState, useEffect } from "react";

function NumberGenerator() {
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomNumber(generateRandomNumber());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  function generateRandomNumber() {
    const twoDigitsBeforeDecimal = Math.floor(Math.random() * 100);
    const fiveDigitsAfterDecimal = (Math.random() * 100000).toFixed(0);
    const formattedNumber = `${twoDigitsBeforeDecimal}.${fiveDigitsAfterDecimal}`;
    return formattedNumber;
  }

  return (
    <div>
      <span>{randomNumber}</span>
    </div>
  );
}

export default NumberGenerator;
