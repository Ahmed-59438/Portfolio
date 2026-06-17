import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ahmed | AI Systems Builder & Backend Engineer",
  description: "Electronics & Computing builder focused on AI systems, backend engineering, autonomous agents, and intelligent product design.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#050505] text-[#ededed] font-sans antialiased selection:bg-[#FFB347] selection:text-[#050505] overflow-x-hidden">
        {/* Global Cinematic Noise Overlay */}
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
