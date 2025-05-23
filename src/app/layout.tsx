import type { Metadata } from "next";
import { Arima } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const arima = Arima({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palette des amis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={arima.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
