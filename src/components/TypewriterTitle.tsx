'use client';

import { useState, useEffect } from 'react';

interface TypewriterTitleProps {
  text: string;
  className?: string;
  charDelay?: number;
  startDelay?: number;
}

export function TypewriterTitle({
  text,
  className = '',
  charDelay = 50,
  startDelay = 200,
}: TypewriterTitleProps) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start delay before typing begins
    const startTimer = setTimeout(() => {
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        charIndex++;
        setDisplayedChars(charIndex);

        if (charIndex >= text.length) {
          clearInterval(typeInterval);
          setIsComplete(true);
        }
      }, charDelay);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, charDelay, startDelay]);

  return (
    <span className={`typewriter-title ${className} ${isComplete ? 'complete' : ''}`}>
      <span className="typewriter-text">
        {text.split('').map((char, i) => (
          <span
            key={i}
            className={`typewriter-char ${i < displayedChars ? 'visible' : ''}`}
            style={{ animationDelay: `${i * 20}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
      {!isComplete && <span className="typewriter-cursor">_</span>}
    </span>
  );
}
