import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import CustomHead from "./CustomHead";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Kilang Pertamina Internasional RU VII Kasim",
  description: "Landing page PT Kilang Pertamina Internasional RU VII Kasim ",
  icons: [{ rel: "icon", url: "/logo.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider defaultTheme="dark">
          <NextTopLoader color="#5A8ED4" />
          <CustomHead />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
