"use client";

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
