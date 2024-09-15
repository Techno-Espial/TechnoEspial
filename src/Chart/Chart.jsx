import React, { useState, useEffect } from 'react';
import RadialProgress from "../RadialProgress/RadialProgress"; // Import RadialProgress

const ProgressBar = ({ label, widthPercentage, progressPercentage }) => {
  const [width, setWidth] = useState(0); // Initially set width to 0 for animation

  // Trigger the width animation when the component is mounted
  useEffect(() => {
    setTimeout(() => {
      setWidth(widthPercentage); // Set the width to the passed percentage
    }, 200); // Delay for smooth animation
  }, [widthPercentage]);

  const getColor = () => {
    if (progressPercentage <= 35) {
      return '#FF0000'; // Red
    } else if (progressPercentage > 35 && progressPercentage <= 65) {
      const yellowRatio = (progressPercentage - 35) / 30;
      return `rgb(255, ${255 * yellowRatio}, 0)`; // Transition from Red to Yellow
    } else {
      const greenRatio = (progressPercentage - 65) / 35;
      const r = Math.round(255 * (1 - greenRatio));
      const g = Math.round(150 * greenRatio + 255 * (1 - greenRatio));
      const b = Math.round(72 * greenRatio);
      return `rgb(${r}, ${g}, ${b})`; // Transition from Yellow to #069648
    }
  };

  return (
    <div className="w-[92%] h-full ml-[8%] border-l-2 py-4 relative flex items-center">
      <p className="absolute left-[-75px] rotate-[-30deg] text-white">{label}</p>
      <div
        className="h-[40px] relative transition-all duration-1000 ease-in-out" // Tailwind's ease-in-out timing
        style={{
          width: `${width}%`,
          backgroundColor: getColor(), // Apply dynamic background color based on progressPercentage
        }}
      ></div>
      <div className="w-[40px] h-[40px] mx-1 text-sm">
        <RadialProgress percentage={progressPercentage} />
      </div>
    </div>
  );
};

const Chart = () => {
  return (
    <div>
      <div className="py-8">
        <ProgressBar label="06 Sep" widthPercentage={85} progressPercentage={85} />
        <ProgressBar label="07 Sep" widthPercentage={80} progressPercentage={80} />
        <ProgressBar label="08 Sep" widthPercentage={30} progressPercentage={30} />
        <ProgressBar label="09 Sep" widthPercentage={70} progressPercentage={70} />
        <ProgressBar label="10 Sep" widthPercentage={100} progressPercentage={100} />
        <ProgressBar label="11 Sep" widthPercentage={91} progressPercentage={91} />
      </div>
    </div>
  );
};

export default Chart;
