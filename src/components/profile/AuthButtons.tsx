'use client';

import { useNetworks } from '@/core-ui/hooks';
import PrivyAuthButtons from './PrivyButtons';

export const AuthButtons = () => {
  const {
    data: { types },
  } = useNetworks();

  if (types.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="flex justify-end gap-1 w-full">
        <PrivyAuthButtons />
      </div>
    </div>
  );
};
