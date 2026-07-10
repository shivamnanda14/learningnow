import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import StructuredData from "../components/StructuredData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learningnow.in"),

  title: {
    default: "LearningNow | Podcast, Communication & Learning Resources",
    template: "%s | LearningNow",
  },

  description:
    "Learn from real conversations, communication masterclasses, books and practical insights by Shivam Nanda. Explore podcasts, communication skills and lifelong learning.",

  keywords: [
    "LearningNow",
    "Learning Now",
    "Shivam Nanda",
    "Shivam Kumar Nanda",
    "Podcast",
    "Indian Podcast",
    "Education Podcast",
    "Student Podcast",
    "Communication Skills",
    "Communication Masterclass",
    "Public Speaking",
    "Confidence Building",
    "Speaking Skills",
    "Self Improvement",
    "Personal Development",
    "Learning",
    "Book on Communication",
    "Communication Is a Game Be a Pro",
    "Engineering Students",
    "College Students",
    "Bihar Students",
  ],

  authors: [
    {
      name: "Shivam Nanda",
      url: "https://learningnow.in/about",
    },
  ],

  creator: "Shivam Nanda",

  publisher: "LearningNow",

  alternates: {
    canonical: "https://learningnow.in",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "LearningNow | Podcast, Communication & Learning Resources",

    description:
      "Learn from real conversations, communication masterclasses, books and practical insights by Shivam Nanda.",

    url: "https://learningnow.in",

    siteName: "LearningNow",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LearningNow by Shivam Nanda",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "LearningNow | Podcast, Communication & Learning Resources",

    description:
      "Learn from real conversations, communication masterclasses and practical insights by Shivam Nanda.",

    creator: "@LearningNow25",

    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],

    shortcut: ["/favicon.ico"],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <StructuredData />

        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        <Toaster
          position="top-right"
          richColors
          closeButton
          theme="dark"
        />
      </body>
    </html>
  );
}