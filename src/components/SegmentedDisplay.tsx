'use client';

// LCD 7-segment style display for dates and numbers

interface SegmentedDisplayProps {
  value: string;
  className?: string;
}

// 7-segment digit patterns (a-g segments)
// Each segment: top, topRight, bottomRight, bottom, bottomLeft, topLeft, middle
const digitPatterns: Record<string, boolean[]> = {
  '0': [true, true, true, true, true, true, false],
  '1': [false, true, true, false, false, false, false],
  '2': [true, true, false, true, true, false, true],
  '3': [true, true, true, true, false, false, true],
  '4': [false, true, true, false, false, true, true],
  '5': [true, false, true, true, false, true, true],
  '6': [true, false, true, true, true, true, true],
  '7': [true, true, true, false, false, false, false],
  '8': [true, true, true, true, true, true, true],
  '9': [true, true, true, true, false, true, true],
};

function SegmentedDigit({ digit }: { digit: string }) {
  const pattern = digitPatterns[digit] || [false, false, false, false, false, false, false];
  const [a, b, c, d, e, f, g] = pattern;

  return (
    <svg viewBox="0 0 20 32" className="segmented-digit">
      {/* Segment A - top */}
      <polygon
        points="3,2 17,2 15,5 5,5"
        className={a ? 'segment-on' : 'segment-off'}
      />
      {/* Segment B - top right */}
      <polygon
        points="17,3 17,15 15,13 15,6"
        className={b ? 'segment-on' : 'segment-off'}
      />
      {/* Segment C - bottom right */}
      <polygon
        points="17,17 17,29 15,27 15,19"
        className={c ? 'segment-on' : 'segment-off'}
      />
      {/* Segment D - bottom */}
      <polygon
        points="3,30 17,30 15,27 5,27"
        className={d ? 'segment-on' : 'segment-off'}
      />
      {/* Segment E - bottom left */}
      <polygon
        points="3,17 3,29 5,27 5,19"
        className={e ? 'segment-on' : 'segment-off'}
      />
      {/* Segment F - top left */}
      <polygon
        points="3,3 3,15 5,13 5,6"
        className={f ? 'segment-on' : 'segment-off'}
      />
      {/* Segment G - middle */}
      <polygon
        points="4,16 5,14 15,14 16,16 15,18 5,18"
        className={g ? 'segment-on' : 'segment-off'}
      />
    </svg>
  );
}

function SegmentedSeparator({ char }: { char: string }) {
  if (char === ':') {
    return (
      <svg viewBox="0 0 8 32" className="segmented-separator">
        <circle cx="4" cy="10" r="2" className="segment-on" />
        <circle cx="4" cy="22" r="2" className="segment-on" />
      </svg>
    );
  }
  if (char === '_' || char === '-') {
    return (
      <svg viewBox="0 0 12 32" className="segmented-separator">
        <rect x="2" y="14" width="8" height="4" className="segment-on" />
      </svg>
    );
  }
  if (char === '.') {
    return (
      <svg viewBox="0 0 8 32" className="segmented-separator">
        <circle cx="4" cy="28" r="2" className="segment-on" />
      </svg>
    );
  }
  // Space
  return <span className="segmented-space" />;
}

export function SegmentedDisplay({ value, className = '' }: SegmentedDisplayProps) {
  const chars = value.split('');

  return (
    <div className={`segmented-display ${className}`}>
      {chars.map((char, i) => {
        if (/[0-9]/.test(char)) {
          return <SegmentedDigit key={i} digit={char} />;
        }
        return <SegmentedSeparator key={i} char={char} />;
      })}
    </div>
  );
}

// Segmented date display with month abbreviation
interface SegmentedDateProps {
  date: string; // ISO date string
  className?: string;
}

export function SegmentedDate({ date, className = '' }: SegmentedDateProps) {
  const d = new Date(date);
  const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = d.getDate().toString().padStart(2, '0');
  const year = d.getFullYear().toString();

  return (
    <div className={`segmented-date ${className}`}>
      <span className="segmented-date-month">{month}</span>
      <SegmentedDisplay value={day} />
      <span className="segmented-date-separator">.</span>
      <SegmentedDisplay value={year} />
    </div>
  );
}

// Segmented time display (reading time)
interface SegmentedTimeProps {
  minutes: number;
  className?: string;
}

export function SegmentedTime({ minutes, className = '' }: SegmentedTimeProps) {
  const value = minutes.toString().padStart(2, '0');

  return (
    <div className={`segmented-time ${className}`}>
      <SegmentedDisplay value={value} />
      <span className="segmented-time-unit">MIN</span>
    </div>
  );
}
