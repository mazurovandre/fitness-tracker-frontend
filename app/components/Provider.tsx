import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';

export const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Provider;
