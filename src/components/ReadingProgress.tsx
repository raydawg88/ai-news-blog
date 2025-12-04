'use client';

import { useState, useEffect } from 'react';
import { SplitFlapCounter } from './SplitFlapCounter';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const segments = 20; // Number of pill segments

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const filledSegments = Math.round((progress / 100) * segments);

  return (
    <div className="reading-progress-container" aria-hidden="true">
      <div className="reading-progress-bar">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={`reading-progress-segment ${i < filledSegments ? 'filled' : ''}`}
          />
        ))}
      </div>
      <SplitFlapCounter value={progress} suffix="%" />
    </div>
  );
}
