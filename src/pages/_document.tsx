import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Kozera Group - Správa Investic a Rozvoj</title>
        <meta
          name="description"
          content="Kozera Group nabízí profesionální a spolehlivé služby v oblasti správy investic a rozvoje. Společně rozvíjíme vaše podnikání a zajišťujeme maximální spokojenost našich partnerů."
        />
        <meta
          name="keywords"
          content="správa investic, rozvoj podnikání, Kozera Group, investiční služby, podnikatelský rozvoj"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Kozera Group - Správa Investic a Rozvoj"
        />
        <meta
          property="og:description"
          content="Kozera Group nabízí profesionální a spolehlivé služby v oblasti správy investic a rozvoje. Společně rozvíjíme vaše podnikání a zajišťujeme maximální spokojenost našich partnerů."
        />
        <meta
          property="og:image"
          content="https://www.kozeragroup.cz/pics/og-image.jpg"
        />
        <meta property="og:url" content="https://www.kozeragroup.cz/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kozera Group - Správa Investic a Rozvoj"
        />
        <meta
          name="twitter:description"
          content="Kozera Group nabízí profesionální a spolehlivé služby v oblasti správy investic a rozvoje. Společně rozvíjíme vaše podnikání a zajišťujeme maximální spokojenost našich partnerů."
        />
        <meta
          name="twitter:image"
          content="https://www.kozeragroup.cz/pics/twitter-image.jpg"
        />

        {/* Strukturovaná Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kozera Group",
              url: "https://www.kozeragroup.cz",
              logo: "https://www.kozeragroup.cz/logo.png",
              sameAs: [
                "https://www.facebook.com/kozera-group",
                "https://www.instagram.com/kozera-group",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+420608666200",
                contactType: "Customer Service",
                email: "kozera@group.cz",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Harrachov 191",
                addressLocality: "Harrachov",
                postalCode: "468 49",
                addressCountry: "CZ",
              },
            }),
          }}
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.kozeragroup.cz/" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Apple Touch Icon and Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
