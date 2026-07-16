import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RouteLoader from "@/component/RouteLoader";
import Nav from "@/component/Nav";
// import ClientLayout from "@/component/ClientLayout";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = "https://www.mayankpadmani.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mayank Padmani",
  description:
    "Explore the personal portfolio of Mayank Padmani, a game developer, photo editor, video editor, VFX/CGI artist, and programmer.",
  keywords: [
    "P2 Vortex",
    "Mayank Padmani",
    "personal portfolio",
    "game developer",
    "CGI artist",
    "photo editor",
    "video editor",
    "programmer",
    "VFX/CGI portfolio",
    "Unreal Engine developer",
    "3D modeling portfolio",
  ],
  authors: [{ name: "Mayank Padmani" }],
  verification: {
    google: "nw3QmgKz104UjN3gtyJ-wArZ3OflW3SsQP5KcrbnXi4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Mayank Padmani",
    description:
      "Explore the personal portfolio of Mayank Padmani, a game developer, photo editor, video editor, VFX/CGI artist, and programmer.",
    url: siteUrl,
    siteName: "Mayank Padmani Portfolio",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// New export for viewport
export function generateViewport() {
  return "width=device-width, initial-scale=1.0";
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/photo1.png"  />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RouteLoader/>
        {/* <ClientLayout> */}
        
          {children}
        {/* </ClientLayout> */}
      </body>
    </html>
  );
}
