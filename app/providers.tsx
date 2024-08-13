'use client';

import { NextUIProvider } from '@nextui-org/react';

interface ProvidersProps {
  children: React.ReactNode;
}

const providers = ({ children }: ProvidersProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default providers;
