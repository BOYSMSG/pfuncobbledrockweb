"use client";

import { SessionProvider } from "next-auth/react";
import { LanguageProvider } from "./LanguageContext";
import LanguageSettings from "./LanguageSettings";
import HalloweenTheme from "./HalloweenTheme";
import { ToastProvider } from "./Toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ToastProvider>
        <LanguageProvider>
          {children}
          <LanguageSettings />
          <HalloweenTheme />
        </LanguageProvider>
      </ToastProvider>
    </SessionProvider>
  );
}
