import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const mont = Montserrat({ subsets: ["latin"], variable: "--display-font" });
const popin = Poppins({
  subsets: ["latin"],
  variable: "--body-font",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ark",
  description: "cialabs datacenter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(mont.variable, popin.variable, popin.className, "dark")}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
