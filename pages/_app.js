import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Mayank Padmani | AI Developer, Machine Learning Engineer & Full-Stack Developer</title>
        <meta
          name="description"
          content="Explore the personal portfolio of Mayank Padmani — AI developer, machine learning engineer, full stack developer & creative technologist based in Gujarat, India. Discover projects and creative experiments."
        />
        <meta
          name="keywords"
          content="Mayank Padmani, P2 Vortex, Cinematryx Studio, RoyalVerse, AI developer, machine learning engineer, game developer, Unreal Engine, CGI artist, VFX artist, photo editor, video editor, programmer, Next.js, Blender, creative portfolio, full stack developer, 3D modeling, web development, Gujarat, India"
        />
        <meta name="author" content="Mayank Padmani" />
        <meta name="google-site-verification" content="nw3QmgKz104UjN3gtyJ-wArZ3OflW3SsQP5KcrbnXi4" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Gujarat, India" />

        {/* Open Graph */}
        <meta property="og:title" content="Mayank Padmani | AI Developer, Machine Learning Engineer & Full-Stack Developer" />
        <meta property="og:description" content="Explore projects and creative work by Mayank Padmani blending code & visual art." />
        <meta property="og:url" content="https://mayankpadmani.me" />
        <meta property="og:site_name" content="Mayank Padmani Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/photo1.png" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mayank Padmani | AI Developer & Full-Stack Developer" />
        <meta name="twitter:description" content="Discover the creative portfolio of Mayank Padmani: game dev, VFX/CGI, programming & more." />
        <meta name="twitter:image" content="/og-cover.png" />

        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://www.mayankpadmani.me" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="apple-mobile-web-app-title" content="Mayank Padmani Portfolio" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Mayank Padmani",
                "alternateName": ["P2 Vortex", "Cinematryx Studio", "RoyalVerse"],
                "jobTitle": "AI Developer, Machine Learning Engineer & Full-Stack Developer",
                "url": "https://www.mayankpadmani.me",
                "email": "padmanimayank12@gmail.com",
                "image": "/logo.png",
                "sameAs": [
                  "https://github.com/Mayankpadmani29",
                  "www.linkedin.com/in/padmani-mayank-402a66373",
                  "https://www.instagram.com/mr._padmani_/?hl=en"
                ],
                "knowsAbout": [
                  "ML-Model",  "AI-AGENTS",  "Full Stack Development", "Next.js", 
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
                "author": { "@type": "Person", "name": "Mayank Padmani" }
              },
              {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "name": "ToDo App",
                "url": "https://todo-frontend-one-iota.vercel.app/",
                "author": { "@type": "Person", "name": "Mayank Padmani" }
              }
            ])
          }}
        />
      </Head>

      <main>
        <h1>Welcome to the Portfolio of Mayank Padmani</h1>
        {/* Your content here... */}
      </main>
    </>
  );
}
