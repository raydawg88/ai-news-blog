// Icons component - combines original HomeIcon with Lucide icons
// HomeIcon is the original pixel art house - DO NOT CHANGE
// Other icons use Lucide for clean, consistent line icons

import {
  FileText,
  User,
  Rss,
  Search,
  Sun,
  Moon,
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
} from 'lucide-react';

interface IconProps {
  size?: number;
  className?: string;
}

// ============================================
// HOME ICON - ORIGINAL PIXEL ART - LOCKED IN
// ============================================
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

export function HomeIcon({ size = 16, className = '' }: IconProps) {
  const gridSize = homePixels.length;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      className={className}
      style={{ shapeRendering: 'crispEdges' }}
    >
      {homePixels.map((row, y) =>
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

// ============================================
// LUCIDE ICONS - Clean minimalist line icons
// ============================================

export function ArticleIcon({ size = 24, className = '' }: IconProps) {
  return <FileText size={size} className={className} strokeWidth={1.5} />;
}

export function UserIcon({ size = 24, className = '' }: IconProps) {
  return <User size={size} className={className} strokeWidth={1.5} />;
}

export function RssIcon({ size = 24, className = '' }: IconProps) {
  return <Rss size={size} className={className} strokeWidth={1.5} />;
}

export function SearchIcon({ size = 24, className = '' }: IconProps) {
  return <Search size={size} className={className} strokeWidth={1.5} />;
}

export function SunIcon({ size = 24, className = '' }: IconProps) {
  return <Sun size={size} className={className} strokeWidth={1.5} />;
}

export function MoonIcon({ size = 24, className = '' }: IconProps) {
  return <Moon size={size} className={className} strokeWidth={1.5} />;
}

export function CalendarIcon({ size = 24, className = '' }: IconProps) {
  return <Calendar size={size} className={className} strokeWidth={1.5} />;
}

export function ClockIcon({ size = 24, className = '' }: IconProps) {
  return <Clock size={size} className={className} strokeWidth={1.5} />;
}

export function ArrowLeftIcon({ size = 24, className = '' }: IconProps) {
  return <ArrowLeft size={size} className={className} strokeWidth={1.5} />;
}

export function ShareIcon({ size = 24, className = '' }: IconProps) {
  return <Share2 size={size} className={className} strokeWidth={1.5} />;
}
