import Image from 'next/image';

interface DitheredImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function DitheredImage({
  src,
  alt,
  width = 1200,
  height = 630,
  className = '',
  priority = false,
}: DitheredImageProps) {
  return (
    <div className={`dithered-image-container ${className}`}>
      {/* The actual image with CSS halftone filter */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="dithered-image"
        priority={priority}
      />

      {/* Dot pattern overlay - creates the halftone effect */}
      <div className="dithered-dots" aria-hidden="true" />
    </div>
  );
}
