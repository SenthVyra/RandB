import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "R&B Rajh Holding AG – Strategic Investments & Industrial Excellence",
  description:
    "R&B Holdings is a worldwide holding group with strategic participations in industry, surface treatment, hospitality, agriculture and digital engineering. Its Swiss holding company is registered in Burgdorf as R&B Rajh Holding AG.",
  keywords: [
    "R&B Holdings",
    "R&B Rajh Holding AG",
    "Burgdorf",
    "Swiss holding company",
    "Tschannen Spritzwerk",
    "Leuta Korrosionsschutz",
    "HABB Global",
  ],
  metadataBase: new URL("https://randbholdings.com"),
  icons: {
    icon: "/logos/RB_Holdings_Logo.webp",
    shortcut: "/logos/RB_Holdings_Logo.webp",
    apple: "/logos/RB_Holdings_Logo.webp",
  },
  openGraph: {
    title: "R&B Rajh Holding AG",
    description: "Strategic Investments. Industrial Excellence.",
    type: "website",
    url: "https://randbholdings.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
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
