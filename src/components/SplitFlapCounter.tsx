'use client';

import { useState, useEffect, useRef } from 'react';

interface SplitFlapDigitProps {
  digit: string;
  delay?: number;
}

// Single digit that flips through values
function SplitFlapDigit({ digit, delay = 0 }: SplitFlapDigitProps) {
  const [displayDigit, setDisplayDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);
  const prevDigit = useRef(digit);

  useEffect(() => {
    if (digit !== prevDigit.current) {
      // Start flip animation
      setIsFlipping(true);

      // Cascade through intermediate digits
      const start = parseInt(prevDigit.current) || 0;
      const end = parseInt(digit) || 0;
      const direction = end > start ? 1 : -1;
      const steps = Math.abs(end - start);

      if (steps > 0) {
        let currentStep = 0;
        const flipInterval = setInterval(() => {
          currentStep++;
          const nextDigit = (start + (direction * currentStep) + 10) % 10;
          setDisplayDigit(nextDigit.toString());

          if (currentStep >= steps) {
            clearInterval(flipInterval);
            setIsFlipping(false);
            prevDigit.current = digit;
          }
        }, 50); // 50ms per digit flip

        return () => clearInterval(flipInterval);
      } else {
        setDisplayDigit(digit);
        setIsFlipping(false);
        prevDigit.current = digit;
      }
    }
  }, [digit]);

  return (
    <span
      className={`split-flap-digit ${isFlipping ? 'flipping' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="split-flap-top">
        <span className="split-flap-text">{displayDigit}</span>
      </span>
      <span className="split-flap-bottom">
        <span className="split-flap-text">{displayDigit}</span>
      </span>
    </span>
  );
}

interface SplitFlapCounterProps {
  value: number;
  suffix?: string;
  padLength?: number;
}

export function SplitFlapCounter({ value, suffix = '%', padLength = 0 }: SplitFlapCounterProps) {
  const valueStr = Math.round(value).toString().padStart(padLength, '0');

  return (
    <span className="split-flap-counter">
      {valueStr.split('').map((digit, i) => (
        <SplitFlapDigit
          key={i}
          digit={digit}
          delay={i * 30}
        />
      ))}
      {suffix && <span className="split-flap-suffix">{suffix}</span>}
    </span>
  );
}
