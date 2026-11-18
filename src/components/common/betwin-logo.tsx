'use client';

import React from 'react';
import Link from 'next/link';

interface BetwinLogoProps {
  className?: string;
  height?: number | string;
}

const BetwinLogo: React.FC<BetwinLogoProps> = ({
  className = '',
  height = '38px',
}) => {
  return (
    <Link
      href="/"
      className={`d-inline-flex align-items-center justify-content-center ${className}`}
    >
      <img
        src="/assets/logo/betwin-games-logo.webp"
        alt="Betwin Games"
        style={{
          height,
          width: 'auto',
          aspectRatio: '5/2',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </Link>
  );
};

export default BetwinLogo;
