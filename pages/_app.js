import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Prince Merja | Game Developer, VFX/CGI Artist & Programmer</title>
        <meta
          name="description"
          content="Explore the personal portfolio of Prince Merja — game developer, VFX/CGI artist, full stack, programmer & creative technologist based in Gujarat, India. Discover projects and creative experiments."
        />
        <meta
          name="keywords"
          content="Prince Merja, P2 Vortex, Cinematryx Studio, RoyalVerse, game developer, Unreal Engine, CGI artist, VFX artist, photo editor, video editor, programmer, Next.js, Blender, creative portfolio, full stack developer, 3D modeling, web development, Gujarat, India"
        />
        <meta name="author" content="Prince Merja" />
        <meta name="google-site-verification" content="nw3QmgKz104UjN3gtyJ-wArZ3OflW3SsQP5KcrbnXi4" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Gujarat, India" />

        {/* Open Graph */}
        <meta property="og:title" content="Prince Merja | Game Developer, VFX/CGI Artist & Programmer" />
        <meta property="og:description" content="Explore projects and creative work by Prince Merja blending code & visual art." />
        <meta property="og:url" content="https://princemerja.me" />
        <meta property="og:site_name" content="Prince Merja Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hero.png" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prince Merja | Game Developer & CGI Artist" />
        <meta name="twitter:description" content="Discover the creative portfolio of Prince Merja: game dev, VFX/CGI, programming & more." />
        <meta name="twitter:image" content="/og-cover.png" />

        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://www.princemerja.me" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="apple-mobile-web-app-title" content="Prince Merja Portfolio" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Prince Merja",
                "alternateName": ["P2 Vortex", "Cinematryx Studio", "RoyalVerse"],
                "jobTitle": "Game Developer, VFX/CGI Artist, Programmer",
                "url": "https://www.princemerja.me",
                "email": "merjaprince1020@gmail.com",
                "image": "/logo.png",
                "sameAs": [
                  "https://github.com/princemerja1",
                  "https://www.linkedin.com/in/prince-merja-26532b2a3/",
                  "https://www.instagram.com/prince_merja_.1/"
                ],
                "knowsAbout": [
                  "Unreal Engine", "VFX", "CGI", "Game Development", "3D Modeling", "Full Stack Development", "Next.js", "Blender"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Gujarat",
                  "addressCountry": "IN"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Cinematryx Studio",
                "url": "https://cinematryxstudio.com",
                "logo": "/logo.png",
                "sameAs": ["https://www.instagram.com/cinematryx.studio/"]
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "RoyalVerse",
                "url": "https://royalverse.com"
              },
              {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "name": "Expense Income Tracker",
                "url": "https://expense-income-tracker-one.vercel.app/",
                "author": { "@type": "Person", "name": "Prince Merja" }
              },
              {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "name": "ToDo App",
                "url": "https://todo-frontend-one-iota.vercel.app/",
                "author": { "@type": "Person", "name": "Prince Merja" }
              }
            ])
          }}
        />
      </Head>

      <main>
        <h1>Welcome to the Portfolio of Prince Merja</h1>
        {/* Your content here... */}
      </main>
    </>
  );
}
