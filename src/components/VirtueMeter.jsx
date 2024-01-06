import React, { useState } from "react";

const VirtueMeterLine = () => {
  const totalButtons = 21;
  const startingButton = Math.floor(totalButtons / 2);
  const [selectedButton, setSelectedButton] = useState(startingButton);

  const virtueMeter = Array.from({ length: totalButtons }, (_, index) => index);

  const handleButtonClick = (index) => {
    setSelectedButton(index);

    // Light up buttons between the clicked button and the starting point
    const minIndex = Math.min(index, startingButton);
    const maxIndex = Math.max(index, startingButton);

    for (let i = minIndex + 1; i < maxIndex; i++) {
      virtueMeter[i] = true; // You might want to add a property to track the "lit up" state
    }
  };

  return (
    <div>
      <h3 id="virtue">Virtue</h3>
      <div>
        {virtueMeter.map((index) => (
          <input
            key={index}
            type="radio"
            id={`radio${index}`}
            name="virtueMeter"
            checked={index === selectedButton}
            onChange={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VirtueMeterLine;
