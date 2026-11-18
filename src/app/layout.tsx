import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "R&B Rajh Holding AG â€“ Strategische Investitionen & Industrielle Exzellenz",
  description:
    "R&B Rajh Holding AG ist eine Schweizer Holdinggesellschaft mit Sitz in Burgdorf. Mit strategischen Beteiligungen in Industrie, OberflÃ¤chenbehandlung, Gastgewerbe und Landwirtschaft.",
  keywords: [
    "R&B Rajh Holding AG",
    "Burgdorf",
    "Schweizer Holding",
    "Tschannen Spritzwerk",
    "Leuta Korrosionsschutz",
    "Swiss holding company",
  ],
  metadataBase: new URL("https://rbrajhholding.ch"),
  icons: {
    icon: "/logos/RB_Holdings_Logo.webp",
    shortcut: "/logos/RB_Holdings_Logo.webp",
    apple: "/logos/RB_Holdings_Logo.webp",
  },
  openGraph: {
    title: "R&B Rajh Holding AG",
    description: "Strategische Investitionen. Industrielle Exzellenz.",
    type: "website",
    url: "https://rbrajhholding.ch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <Script id="remove-extension-attrs" strategy="beforeInteractive">
          {`(function(){try{var b=document && document.body;if(b){b.removeAttribute('data-new-gr-c-s-check-loaded');b.removeAttribute('data-gr-ext-installed');var attrs=Array.from(b.attributes||[]).map(a=>a.name).filter(n=>n&&n.indexOf('data-gr')===0);attrs.forEach(function(n){b.removeAttribute(n)});} }catch(e){}})();`}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
