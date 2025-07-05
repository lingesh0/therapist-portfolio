import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles",
  description: "Dr. Serena Blake is a licensed clinical psychologist in Los Angeles offering therapy for anxiety, stress management, relationship counseling, and trauma recovery. Book your free consultation today.",
  keywords: "therapy, psychologist, Los Angeles, anxiety, stress, relationships, trauma, Dr. Serena Blake, clinical psychologist",
  authors: [{ name: "Dr. Serena Blake" }],
  openGraph: {
    title: "Dr. Serena Blake, PsyD - Clinical Psychologist",
    description: "Professional therapy services in Los Angeles. Specializing in anxiety, relationships, and trauma recovery.",
    url: "https://blakepsychology.com",
    siteName: "Dr. Serena Blake Psychology",
    images: [
      {
        url: "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_1150-18266.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Serena Blake, Clinical Psychologist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Serena Blake, PsyD - Clinical Psychologist",
    description: "Professional therapy services in Los Angeles. Specializing in anxiety, relationships, and trauma recovery.",
    images: ["https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_1150-18266.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://blakepsychology.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
