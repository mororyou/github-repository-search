'use client';

import { useLinkStatus } from 'next/link';

export default function LoadingIndicator() {
  const { pending } = useLinkStatus();
  return (
    pending && (
      <span className="loading-indicator fixed top-0 left-0 z-1 h-[6px] w-full opacity-50" />
    )
  );
}
