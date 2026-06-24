import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://learningnow.vercel.app"),

  title: "LearningNow | Podcast, Communication & Learning Resources",

  description:
    "Learn from real conversations, communication masterclasses and practical insights by Shivam Nanda.",

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
    "Communication Is A Game Be A Pro",

    "Bihar Students",
    "Engineering Students",
    "College Students",
  ],

  authors: [
    {
      name: "Shivam Nanda",
    },
  ],

  creator: "Shivam Nanda",

  publisher: "LearningNow",

  openGraph: {
    title: "LearningNow | Podcast, Communication & Learning Resources",

    description:
      "Learn from real conversations, communication masterclasses and practical insights by Shivam Nanda.",

    url: "https://learningnow.vercel.app",

    siteName: "LearningNow",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LearningNow",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "LearningNow | Podcast, Communication & Learning Resources",

    description:
      "Learn from real conversations, communication masterclasses and practical insights by Shivam Nanda.",

    images: ["/og-image.png"],
  },
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
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}