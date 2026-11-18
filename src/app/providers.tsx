'use client';

import React, { useEffect } from 'react';
import ContextProvider from '@/context/app-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return <ContextProvider>{children}</ContextProvider>;
}
