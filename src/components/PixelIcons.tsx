// Pixel art icons in Susan Kare 1-bit style
// Each icon is a 16x16 grid rendered as CSS

interface PixelIconProps {
  size?: number;
  className?: string;
}

// Helper to render pixel grid as SVG
function PixelIcon({ pixels, size = 16, className = '' }: { pixels: string[], size?: number, className?: string }) {
  const gridSize = pixels.length;
  const pixelSize = size / gridSize;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      className={className}
      style={{ shapeRendering: 'crispEdges' }}
    >
      {pixels.map((row, y) =>
        row.split('').map((cell, x) =>
          cell === '█' ? (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill="currentColor"
            />
          ) : null
        )
      )}
    </svg>
  );
}

// Home icon - simple house shape
const homePixels = [
  '░░░░░░░█░░░░░░░░',
  '░░░░░░███░░░░░░░',
  '░░░░░█████░░░░░░',
  '░░░░███████░░░░░',
  '░░░█████████░░░░',
  '░░███████████░░░',
  '░█████████████░░',
  '███████████████░',
  '░░███████████░░░',
  '░░███████████░░░',
  '░░███░░░░░███░░░',
  '░░███░░░░░███░░░',
  '░░███░░░░░███░░░',
  '░░███░░░░░███░░░',
  '░░███████████░░░',
  '░░░░░░░░░░░░░░░░',
];

export function HomeIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={homePixels} size={size} className={className} />;
}

// Document/Articles icon
const articlesPixels = [
  '░░██████████░░░░',
  '░░█░░░░░░░░██░░░',
  '░░█░░░░░░░░░██░░',
  '░░█░░░░░░░░███░░',
  '░░█████████████░',
  '░░█░░░░░░░░░░░█░',
  '░░█░████████░░█░',
  '░░█░░░░░░░░░░░█░',
  '░░█░████████░░█░',
  '░░█░░░░░░░░░░░█░',
  '░░█░████████░░█░',
  '░░█░░░░░░░░░░░█░',
  '░░█░██████░░░░█░',
  '░░█░░░░░░░░░░░█░',
  '░░█████████████░',
  '░░░░░░░░░░░░░░░░',
];

export function ArticlesIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={articlesPixels} size={size} className={className} />;
}

// RSS icon - classic broadcast waves with dot
const rssPixels = [
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░██░░░░░░░░░░░░',
  '░████░░░░░░░░░░░',
  '░░██░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░███░░░░░░░░░░',
  '░░██░░██░░░░░░░░',
  '░░█░░░░░█░░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░████░░░░░░░░',
  '░░░██░░░██░░░░░░',
  '░░██░░░░░░█░░░░░',
  '░░█░░░░░░░░█░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
];

export function RssIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={rssPixels} size={size} className={className} />;
}

// Search/magnifying glass icon
const searchPixels = [
  '░░░░░░░░░░░░░░░░',
  '░░░░░████░░░░░░░',
  '░░░██░░░░██░░░░░',
  '░░█░░░░░░░░█░░░░',
  '░░█░░░░░░░░█░░░░',
  '░█░░░░░░░░░░█░░░',
  '░█░░░░░░░░░░█░░░',
  '░█░░░░░░░░░░█░░░',
  '░░█░░░░░░░░█░░░░',
  '░░█░░░░░░░░█░░░░',
  '░░░██░░░░██░░░░░',
  '░░░░░████░██░░░░',
  '░░░░░░░░░░░██░░░',
  '░░░░░░░░░░░░██░░',
  '░░░░░░░░░░░░░██░',
  '░░░░░░░░░░░░░░░░',
];

export function SearchIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={searchPixels} size={size} className={className} />;
}

// Sun icon - clean rays with center circle
const sunPixels = [
  '░░░░░░░█░░░░░░░░',
  '░░░░░░░█░░░░░░░░',
  '░░█░░░░░░░░░█░░░',
  '░░░█░░░░░░░█░░░░',
  '░░░░░█████░░░░░░',
  '░░░███████░░░░░░',
  '░█░███████░█░░░░',
  '░░░███████░░░░░░',
  '░░░░█████░░░░░░░',
  '░░░█░░░░░░░█░░░░',
  '░░█░░░░░░░░░█░░░',
  '░░░░░░░█░░░░░░░░',
  '░░░░░░░█░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
];

export function SunIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={sunPixels} size={size} className={className} />;
}

// Moon icon - clean crescent
const moonPixels = [
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░███░░░░░░',
  '░░░░░██░░░██░░░░',
  '░░░░█░░░░░░░█░░░',
  '░░░█░░░░░░░░░░░░',
  '░░░█░░░░░░░░░░░░',
  '░░█░░░░░░░░░░░░░',
  '░░█░░░░░░░░░░░░░',
  '░░█░░░░░░░░░░░░░',
  '░░░█░░░░░░░░░░░░',
  '░░░█░░░░░░░░░░░░',
  '░░░░█░░░░░░░█░░░',
  '░░░░░██░░░██░░░░',
  '░░░░░░░███░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
];

export function MoonIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={moonPixels} size={size} className={className} />;
}

// Calendar icon
const calendarPixels = [
  '░░░░░░░░░░░░░░░░',
  '░░░█░░░░░░█░░░░░',
  '░░░█░░░░░░█░░░░░',
  '░██████████████░',
  '░█░░░░░░░░░░░░█░',
  '░█░░░░░░░░░░░░█░',
  '░██████████████░',
  '░█░░█░░█░░█░░░█░',
  '░█░░░░░░░░░░░░█░',
  '░█░░█░░█░░█░░░█░',
  '░█░░░░░░░░░░░░█░',
  '░█░░█░░█░░█░░░█░',
  '░█░░░░░░░░░░░░█░',
  '░██████████████░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
];

export function CalendarIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={calendarPixels} size={size} className={className} />;
}

// Clock icon
const clockPixels = [
  '░░░░░░░░░░░░░░░░',
  '░░░░░█████░░░░░░',
  '░░░██░░░░░██░░░░',
  '░░█░░░░░░░░░█░░░',
  '░█░░░░░█░░░░░█░░',
  '░█░░░░░█░░░░░█░░',
  '█░░░░░░█░░░░░░█░',
  '█░░░░░░█████░░█░',
  '█░░░░░░░░░░░░░█░',
  '░█░░░░░░░░░░░█░░',
  '░█░░░░░░░░░░░█░░',
  '░░█░░░░░░░░░█░░░',
  '░░░██░░░░░██░░░░',
  '░░░░░█████░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
];

export function ClockIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={clockPixels} size={size} className={className} />;
}

// User/About icon - clean head and shoulders
const userPixels = [
  '░░░░░░░░░░░░░░░░',
  '░░░░░░████░░░░░░',
  '░░░░░█████░░░░░░',
  '░░░░░██████░░░░░',
  '░░░░░██████░░░░░',
  '░░░░░█████░░░░░░',
  '░░░░░░████░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░██████░░░░░',
  '░░░██████████░░░',
  '░░██████████░░░░',
  '░░████████████░░',
  '░░████████████░░',
  '░░████████████░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
];

export function UserIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={userPixels} size={size} className={className} />;
}

// Arrow left icon
const arrowLeftPixels = [
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░█░░░░░░░░░░',
  '░░░░██░░░░░░░░░░',
  '░░░███░░░░░░░░░░',
  '░░████░░░░░░░░░░',
  '░█████████████░░',
  '░██████████████░',
  '░█████████████░░',
  '░░████░░░░░░░░░░',
  '░░░███░░░░░░░░░░',
  '░░░░██░░░░░░░░░░',
  '░░░░░█░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
];

export function ArrowLeftIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={arrowLeftPixels} size={size} className={className} />;
}

// Share icon
const sharePixels = [
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░██░░░░',
  '░░░░░░░░░████░░░',
  '░░░░░░░░░░██░░░░',
  '░░░░░░░░██░░░░░░',
  '░░░░░░██░░░░░░░░',
  '░░░██░░░░░░░░░░░',
  '░░████░░░░░░░░░░',
  '░░░██░░░░░░░░░░░',
  '░░░░░░██░░░░░░░░',
  '░░░░░░░░██░░░░░░',
  '░░░░░░░░░░██░░░░',
  '░░░░░░░░░████░░░',
  '░░░░░░░░░░██░░░░',
  '░░░░░░░░░░░░░░░░',
  '░░░░░░░░░░░░░░░░',
];

export function ShareIcon({ size = 16, className }: PixelIconProps) {
  return <PixelIcon pixels={sharePixels} size={size} className={className} />;
}
