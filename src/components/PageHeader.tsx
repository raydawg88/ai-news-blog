'use client';

import { TypewriterTitle } from './TypewriterTitle';

interface PageHeaderProps {
  label: string;
  title: string;
}

export function PageHeader({ label, title }: PageHeaderProps) {
  return (
    <header className="eink-header">
      <p className="eink-header-label">{label}</p>
      <p className="eink-header-title">
        <TypewriterTitle text={title} charDelay={35} startDelay={300} />
      </p>
    </header>
  );
}
