"use client";
import localFont from "next/font/local";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
