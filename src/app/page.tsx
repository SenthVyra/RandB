"use client";

import { useEffect, useState } from "react";
import { Locale, rtlLocales } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = rtlLocales.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <Hero locale={locale} />
      <Portfolio locale={locale} />
      <Team locale={locale} />
      <About locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
