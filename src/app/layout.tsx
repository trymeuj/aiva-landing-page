import type { Metadata } from "next";
import "./globals.css";
import AnimatedNavbar from "@/components/ui/AnimatedNavbar";

export const metadata: Metadata = {
  title: "AI Interns - Meet Your New Teammates",
  description: "Build your AI team today and experience the difference of teammates who never forget, never leave, and always deliver.",
  icons: {
    icon: '/aiva-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AI Interns - Meet Your New Teammates</title>
        <link rel="icon" href="/aiva-logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <AnimatedNavbar />
        {children}
      </body>
    </html>
  );
}
