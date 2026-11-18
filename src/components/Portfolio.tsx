"use client";

import Image from "next/image";
import { translations, Locale, regionLabels } from "@/lib/i18n";
import { ExternalLink, MapPin, Factory } from "lucide-react";
import Reveal from "./Reveal";

interface PortfolioProps {
  locale: Locale;
}

type Region = "switzerland" | "srilanka" | "worldwide";

const companyMeta: {
  key: "tschannen" | "leuta" | "rbcompany" | "guesthouse" | "farm" | "habbGlobal";
  logo: string;
  flag: string;
  region: Region;
}[] = [
  {
    key: "tschannen",
    logo: "/logos/Logo_Tschannen.png",
    flag: "🇨🇭",
    region: "switzerland",
  },
  {
    key: "leuta",
    logo: "/logos/LEUTA_Logo_Final_final.png",
    flag: "🇨🇭",
    region: "switzerland",
  },
  {
    key: "rbcompany",
    logo: "/logos/Logo_RAndB_Company_GmbH.png",
    flag: "🇨🇭",
    region: "switzerland",
  },
  {
    key: "guesthouse",
    logo: "/logos/Banner_Final.png",
    flag: "🇱🇰",
    region: "srilanka",
  },
  {
    key: "farm",
    logo: "/logos/RAndB_Organic_Farmin.png",
    flag: "🇱🇰",
    region: "srilanka",
  },
  {
    key: "habbGlobal",
    logo: "/logos/HABB Global Logo.png",
    flag: "🌐",
    region: "worldwide",
  },
];

const regionOrder: Region[] = ["switzerland", "srilanka", "worldwide"];

export default function Portfolio({ locale }: PortfolioProps) {
  const t = translations[locale];
  const labels = regionLabels[locale];

  return (
    <section id="portfolio" className="relative py-28 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge mb-4 inline-flex">
              <Factory size={12} />
              {t.portfolio.title}
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--text-heading)] mb-5 tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {t.portfolio.title}
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
              {t.portfolio.subtitle}
            </p>
          </div>
        </Reveal>

        {regionOrder.map((region) => {
          const items = companyMeta.filter((c) => c.region === region);
          if (items.length === 0) return null;
          return (
            <div key={region} className="mb-16 last:mb-0">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <h3
                    className="text-lg sm:text-xl font-bold text-[var(--text-heading)]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {labels[region]}
                  </h3>
                  <div className="h-px flex-1 bg-[var(--border-light)]" />
                </div>
              </Reveal>

              {/* Company Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((company, index) => {
                  const data = t.portfolio.companies[company.key];
                  return (
                    <Reveal key={company.key} delay={index * 80}>
                      <div className="card h-full flex flex-col overflow-hidden group">
                        {/* Logo area */}
                        <div className="relative h-44 bg-gradient-to-br from-white to-[var(--gray-100)] flex items-center justify-center p-6 border-b border-[var(--border-light)] overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(11,31,63,0.02)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <Image
                            src={company.logo}
                            alt={data.name}
                            width={180}
                            height={80}
                            className="object-contain max-h-16 relative z-10 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-6 min-h-0">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <h4
                              className="text-lg font-bold text-[var(--text-heading)] leading-snug"
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              {data.name}
                            </h4>
                            <span className="text-lg shrink-0">{company.flag}</span>
                          </div>

                          <div className="flex items-center gap-2 mb-3 text-sm text-[var(--text-muted)]">
                            <MapPin size={13} className="text-[var(--gray-400)]" />
                            {data.location}
                          </div>

                          <div className="mb-4">
                            <span className="tag-pill">{data.sector}</span>
                          </div>

                          <p className="text-sm text-[var(--text-body)] leading-relaxed mb-5 flex-1 min-h-0 break-words">
                            {data.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-5">
                            {data.tags.map((tag: string) => (
                              <span
                                key={tag}
                                className="text-[10px] font-semibold text-[var(--gray-500)] bg-[var(--gray-100)] px-2.5 py-1 rounded-md uppercase tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTA */}
                          {data.website !== "#" && (
                            <a
                              href={data.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal-light)] hover:text-[var(--navy)] transition-colors group/link"
                            >
                              {t.portfolio.visitWebsite}
                              <ExternalLink
                                size={14}
                                className="transition-transform group-hover/link:translate-x-0.5"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
