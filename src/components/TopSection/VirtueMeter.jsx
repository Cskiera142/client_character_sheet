import React, { useEffect, useState } from "react";

const VirtueMeterLine = () => {
  const TOTAL_BUTTONS = 21;

  const [totalButtons, setTotalButtons] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rangeButton, setRangeButton] = useState({ min: 0, max: 0 });
  const [virtueMeter, setVirtueMeter] = useState([]);

  useEffect(() => {
    setTotalButtons(TOTAL_BUTTONS);
  }, []);

  useEffect(() => {
    const startingIndex = Math.floor(totalButtons / 2);
    setCurrentIndex(startingIndex);
  }, [totalButtons]);

  useEffect(() => {
    const startingIndex = Math.floor(totalButtons / 2);

    const newRangeButton = {
      min: Math.min(currentIndex, startingIndex),
      max: Math.max(currentIndex, startingIndex),
    };
    setRangeButton(newRangeButton);
  }, [currentIndex, totalButtons]);

  useEffect(() => {
    const newVirtueMeter = Array.from({ length: totalButtons }, (_, index) => ({
      selected: index >= rangeButton.min && index <= rangeButton.max,
      position: index,
    }));
    setVirtueMeter(newVirtueMeter);
  }, [currentIndex, rangeButton.max, rangeButton.min, totalButtons]);

  return (
    <div>
      <h3 id="virtue">Virtue</h3>
      <div>
        {virtueMeter.map((item, index) => (
          <input
            key={index}
            type="radio"
            id={`radio${index}`}
            name={`virtueMeter${index}`}
            checked={item.selected}
            onChange={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VirtueMeterLine;
