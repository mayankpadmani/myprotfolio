import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RouteLoader from "@/component/RouteLoader";
import Nav from "@/component/Nav";
// import ClientLayout from "@/component/ClientLayout";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = "https://www.mayankpadmani.me";
const socialProfiles = [
  "https://www.linkedin.com/in/padmani-mayank-402a66373",
  "https://github.com/mayankpadmani",
  "https://github.com/Mayankpadmani29",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mayank Padmani | Python, Full Stack & MERN Developer in Anand, Surat, Nadiad",
  description:
    "Hire Mayank Padmani, a freelance Python and web developer and technology consultant in Anand, Surat, and Nadiad, specializing in full stack MERN development, React, Next.js, Node.js, Express, MongoDB, Django, backend APIs, automation, and business growth solutions.",
  keywords: [
    "Mayank Padmani",
    "padmani",
    "padmani mayank",
    "mayank web developer",
    "mayank padmani mern stack developer",
    "LinkedIn profile",
    "GitHub profile",
    "Mayank Padmani LinkedIn",
    "Mayank Padmani GitHub",
    "Python developer",
    "Python freelancer",
    "freelance Python developer",
    "Python web developer",
    "Django developer",
    "Python backend developer",
    "web developer",
    "web developer in Anand",
    "web developer in Surat",
    "web developer in Nadiad",
    "freelance web developer in Anand",
    "freelance web developer in Surat",
    "freelance web developer in Nadiad",
    "best web developer in Anand",
    "best web developer in Surat",
    "best web developer in Nadiad",
    "best mernstack developer in Anand",
    "best mernstack developer in Surat",
    "best mernstack developer in Nadiad",
    "best full stack developer in Anand",
    "best full stack developer in Surat",
    "best full stack developer in Nadiad",
    "full stack developer",
    "full stack web developer",
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "Express developer",
    "MongoDB developer",
    "backend developer",
    "frontend developer",
    "API development",
    "freelance web developer",
    "web developer for hire",
    "technology consultant",
    "tech consultant",
    "business growth consultant",
    "new technology consultant",
    "digital business growth",
    "automation scripts",
    "programmer",
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
    title: "Mayank Padmani | Python, Full Stack & MERN Developer in Anand, Surat, Nadiad",
    description:
      "Hire Mayank Padmani, a freelance Python and web developer and technology consultant in Anand, Surat, and Nadiad, specializing in full stack MERN development, React, Next.js, Node.js, Express, MongoDB, Django, backend APIs, automation, and business growth solutions.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mayank Padmani",
              url: siteUrl,
              sameAs: socialProfiles,
              jobTitle: [
                "Python Developer",
                "Full Stack Developer",
                "MERN Stack Developer",
                "Web Developer",
                "Technology Consultant",
              ],
              areaServed: ["Anand", "Surat", "Nadiad", "India"],
            }),
          }}
        />
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
