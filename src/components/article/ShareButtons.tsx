'use client';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard');
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard');
    }
  };

  return (
    <div
      className="flex gap-6 mt-12 pt-8 border-t border-[var(--color-border)]"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <span className="text-[var(--color-text-secondary)] text-sm">Share:</span>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:opacity-70"
      >
        Twitter
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:opacity-70"
      >
        LinkedIn
      </a>

      <button
        onClick={copyToClipboard}
        className="text-sm hover:opacity-70 underline"
      >
        Copy link
      </button>
    </div>
  );
}
