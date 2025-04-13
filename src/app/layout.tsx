import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Aiva - Your AI Personal Assistant",
  description: "We are to you what Jarvis is to Stark - an autonomous AI agent that connects to all your apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </head>
      <body className="font-serif antialiased">
        {children}
      </body>
    </html>
  );
}