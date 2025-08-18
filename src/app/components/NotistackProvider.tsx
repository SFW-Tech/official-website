"use client";

import { ReactNode } from "react";
import { SnackbarProvider } from "notistack";

type NotistackProviderProps = {
  children: ReactNode;
};

export default function NotistackProvider({ children }: NotistackProviderProps) {
  return (
    <SnackbarProvider maxSnack={3}> 
      {children}
    </SnackbarProvider>
  );
}

