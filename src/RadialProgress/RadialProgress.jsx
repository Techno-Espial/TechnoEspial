import React, { useState, useEffect } from 'react';

const RadialProgress = ({ percentage }) => {
  const [progress, setProgress] = useState(0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const animateProgress = () => {
      let start = 0;
      const end = percentage;
      const duration = 1000; // 1 second
      const increment = end / duration;
      const interval = 10; // update every 10ms

      const animation = setInterval(() => {
        start += increment * interval;
        if (start >= end) {
          start = end;
          clearInterval(animation);
        }
        setProgress(start);
      }, interval);
    };

    animateProgress();
  }, [percentage]);

  const getColor = () => {
    if (progress <= 35) {
      return '#FF0000'; // Red
    } else if (progress > 35 && progress <= 65) {
      const yellowRatio = (progress - 35) / 30;
      return `rgb(255, ${255 * yellowRatio}, 0)`; // Transition from Red to Yellow
    } else {
      const greenRatio = (progress - 65) / 35;
      const r = Math.round(255 * (1 - greenRatio));
      const g = Math.round(150 * greenRatio + 255 * (1 - greenRatio));
      const b = Math.round(72 * greenRatio);
      return `rgb(${r}, ${g}, ${b})`; // Transition from Yellow to #069648
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 160 160"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="transparent"
          stroke="gray"
          strokeWidth="15"
        />
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="transparent"
          stroke={getColor()}
          strokeWidth="15"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div
        className="absolute font-bold"
        style={{ color: getColor() }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default RadialProgress;
