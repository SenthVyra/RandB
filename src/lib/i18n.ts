export const defaultLocale = "en";
export const locales = ["en", "de", "ta", "si", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  ta: "தமிழ்",
  si: "සිංහල",
  fr: "Français",
  ar: "العربية",
};

export const rtlLocales: Locale[] = ["ar"];

export const regionLabels: Record<
  Locale,
  { switzerland: string; srilanka: string; worldwide: string }
> = {
  en: { switzerland: "Switzerland · R&B Rajh Holding AG", srilanka: "R&B Holdings · Sri Lanka", worldwide: "Worldwide" },
  de: { switzerland: "Schweiz · R&B Rajh Holding AG", srilanka: "R&B Holdings · Sri Lanka", worldwide: "Weltweit" },
  ta: { switzerland: "சுவிட்சர்லாந்து · R&B Rajh Holding AG", srilanka: "R&B Holdings · இலங்கை", worldwide: "உலகளாவிய" },
  si: { switzerland: "ස්විට්සර්ලන්තය · R&B Rajh Holding AG", srilanka: "R&B Holdings · ශ්‍රී ලංකාව", worldwide: "ලොව පුරා" },
  fr: { switzerland: "Suisse · R&B Rajh Holding AG", srilanka: "R&B Holdings · Sri Lanka", worldwide: "Mondial" },
  ar: { switzerland: "سويسرا · R&B Rajh Holding AG", srilanka: "R&B Holdings · سريلانكا", worldwide: "عالمي" },
};

export const translations = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
    },
    hero: {
      tagline: "Strategic Investments. Industrial Excellence.",
      description:
        "R&B Holdings is a worldwide holding group, based in Switzerland and now expanding internationally. Its Swiss holding company, R&B Rajh Holding AG in Burgdorf, anchors the group, with strategic participations, industrial services and international partnerships.",
      cta: "Explore Portfolio",
      cta2: "Get in Touch",
      founded: "Founded",
      capital: "Capital",
      headquarters: "Headquarters",
      companies: "Companies",
    },
    stats: {
      founded: "2019",
      capital: "CHF 100K",
      hq: "Burgdorf, CH",
      companies: "6+",
    },
    portfolio: {
      title: "Our Portfolio",
      subtitle:
        "A diversified portfolio of industrial companies and service businesses across Switzerland and Sri Lanka.",
      learnMore: "Learn More",
      visitWebsite: "Visit Website",
      companies: {
        tschannen: {
          name: "Tschannen Spritzwerk AG",
          location: "Burgdorf, Switzerland",
          sector: "Surface Treatment",
          description:
            "Expert in powder coating and wet painting with comprehensive pre-treatment, quality control and packaging services for industrial and commercial clients.",
          tags: ["Powder Coating", "Wet Painting", "Surface Technology"],
          website: "https://tschannenspritzwerk.ch",
        },
        leuta: {
          name: "Leuta Korrosionsschutz AG",
          location: "Gretzenbach, Switzerland",
          sector: "Corrosion Protection",
          description:
            "Swiss specialist in metal finishing and corrosion protection active since 1966. Offers sandblasting, spray galvanizing, primers, topcoats, and duplex coatings.",
          tags: [
            "Corrosion Protection",
            "Metal Finishing",
            "Spray Galvanizing",
          ],
          website: "https://leutakorrosionsschutz.ch",
        },
        rbcompany: {
          name: "R&B Company GmbH",
          location: "Switzerland",
          sector: "Industrial Services",
          description:
            "Core operating company of the group with close collaboration between Leuta Korrosionsschutz AG and Tschannen Spritzwerk – uniting processes from start to finish.",
          tags: ["Industrial Services", "Partnership", "Quality"],
          website: "https://www.rbcompany.ch/en",
        },
        guesthouse: {
          name: "R&B Guest House pvt. Ltd.",
          location: "Thirunelvely, Jaffna, Sri Lanka",
          sector: "Hospitality",
          description:
            "A family-run guest house in the heart of Thirunelvely, Jaffna. Offering Deluxe, Standard, and Family rooms with free Wi-Fi, breakfast, airport transfer, and guided tours.",
          tags: ["Guest House", "Jaffna", "Sri Lanka"],
          website: "https://rbguesthouse.ch",
        },
        farm: {
          name: "R&B Organic Farming pvt. Ltd.",
          location: "Thirunelvely, Jaffna, Sri Lanka",
          sector: "Agriculture",
          description:
            "Organic farming operation in Jaffna, Sri Lanka. Specializing in marigold cultivation and vegetable production, embracing local cultivation and sustainable practices.",
          tags: ["Organic Farming", "Jaffna", "Sustainability"],
          website: "https://rbbio.ch",
        },
        habbGlobal: {
          name: "HABB Global",
          location: "Worldwide",
          sector: "Digital Engineering",
          description:
            "Your worldwide digital engineering partner, designing and building secure, scalable products for web, mobile, cloud and AI. With real offices in Sri Lanka and Switzerland, one accountable team takes projects from strategy to support, and we also build our own SaaS products. Services include digital marketing (HABB DIGI), AI automation (HABB AI) and access control (HABBGate).",
          tags: ["Software Development", "AI Automation", "Digital Engineering"],
          website: "https://habbglobal.com",
        },
      },
    },
    team: {
      title: "Group Leadership",
      subtitle: "The people behind our success.",
    },
    about: {
      title: "About R&B Holdings",
      subtitle: "A Holding Company with Vision and Strength",
      description:
        "R&B Rajh Holding AG was founded on March 12, 2019 in Burgdorf, Switzerland. It is a dynamic holding company with a registered capital of CHF 100,000 and serves as the Swiss holding company of R&B Holdings. Under the leadership of Suyarajh Kanagaratnam as board member and legal representative, the company actively builds a portfolio of industrial, service, and hospitality businesses.",
      mission: "Our Mission",
      missionText:
        "Strategically bundling competencies in industry, technology, and hospitality to create sustainable value.",
      vision: "Our Vision",
      visionText:
        "Leading Swiss holding company with global influence – from industry to hospitality.",
      values: "Our Values",
      valuesText:
        "Quality, integrity, innovation, and partnership are the cornerstones of our corporate culture.",
      ceo: "Suyarajh Kanagaratnam",
      ceoTitle: "Founder, Board Member & Managing Director",
      incorporated: "Incorporated",
      registeredCapital: "Registered Capital",
      legalForm: "Legal Form",
      agForm: "Corporation (AG)",
    },
    contact: {
      title: "Contact",
      subtitle: "Get in Touch",
      address: "Address",
      email: "Email",
      phone: "Phone",
      send: "Send Message",
      name: "Your Name",
      emailLabel: "Your Email",
      message: "Your Message",
    },
    footer: {
      rights: "All rights reserved.",
      registered: "Registered in Switzerland as R&B Rajh Holding AG.",
      tagline: "Strategic Investments. Industrial Excellence.",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
    },
    ui: {
      sendError: "Failed to send",
      genericError: "An error occurred",
      sentTitle: "Message Sent!",
      sentText: "Thank you! We will get back to you shortly.",
      sending: "Sending...",
      aboutUs: "About Us",
      addressSriLanka: "Address Sri Lanka",
      commercialRegister: "Commercial Register",
    },
  },
  de: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      about: "Über uns",
      contact: "Kontakt",
    },
    hero: {
      tagline: "Strategische Investitionen. Industrielle Exzellenz.",
      description:
        "R&B Holdings ist eine weltweit tätige Holdinggruppe mit Sitz in der Schweiz, die nun international expandiert. Die Schweizer Holdinggesellschaft R&B Rajh Holding AG in Burgdorf bildet das Fundament der Gruppe und steht für strategische Beteiligungen, Industriedienstleistungen und internationale Partnerschaften.",
      cta: "Portfolio entdecken",
      cta2: "Kontakt aufnehmen",
      founded: "Gegründet",
      capital: "Kapital",
      headquarters: "Hauptsitz",
      companies: "Unternehmen",
    },
    stats: {
      founded: "2019",
      capital: "CHF 100K",
      hq: "Burgdorf, CH",
      companies: "6+",
    },
    portfolio: {
      title: "Unser Portfolio",
      subtitle:
        "Ein diversifiziertes Portfolio aus Industrieunternehmen und Dienstleistungsbetrieben in der Schweiz und Sri Lanka.",
      learnMore: "Mehr erfahren",
      visitWebsite: "Website besuchen",
      companies: {
        tschannen: {
          name: "Tschannen Spritzwerk AG",
          location: "Burgdorf, Schweiz",
          sector: "Oberflächenbehandlung",
          description:
            "Spezialist für Pulverbeschichtung und Nassmalerei mit umfassenden Vorbehandlungs-, Qualitätskontroll- und Verpackungsdienstleistungen für Industrie- und Gewerbebetriebe.",
          tags: ["Pulverbeschichtung", "Nassmalerei", "Oberflächentechnik"],
          website: "https://tschannenspritzwerk.ch",
        },
        leuta: {
          name: "Leuta Korrosionsschutz AG",
          location: "Gretzenbach, Schweiz",
          sector: "Korrosionsschutz",
          description:
            "Seit 1966 aktiver Schweizer Spezialist für Metallveredelung und Korrosionsschutz. Bietet Sandstrahlen, Spritzverzinken, Grundierung, Decklack und Duplex-Beschichtungen an.",
          tags: ["Korrosionsschutz", "Metallveredelung", "Spritzverzinken"],
          website: "https://leutakorrosionsschutz.ch",
        },
        rbcompany: {
          name: "R&B Company GmbH",
          location: "Schweiz",
          sector: "Industriedienstleistungen",
          description:
            "Operatives Kernunternehmen der Gruppe mit engem Zusammenspiel zwischen Leuta Korrosionsschutz AG und Tschannen Spritzwerk ag – vereint Prozesse von Anfang bis Ende.",
          tags: ["Industriedienste", "Partnerschaft", "Qualität"],
          website: "https://www.rbcompany.ch/",
        },
        guesthouse: {
          name: "R&B Guest House pvt. Ltd.",
          location: "Thirunelvely, Jaffna, Sri Lanka",
          sector: "Gastgewerbe",
          description:
            "Familiäres Gasthaus im Herzen von Thirunelvely, Jaffna. Bietet Deluxe-, Standard- und Familienzimmer mit WLAN, Frühstück, Flughafentransfer und geführten Touren.",
          tags: ["Gasthaus", "Jaffna", "Sri Lanka"],
          website: "https://rbguesthouse.ch",
        },
        farm: {
          name: "R&B Organic Farming pvt. Ltd.",
          location: "Thirunelvely, Jaffna, Sri Lanka",
          sector: "Landwirtschaft",
          description:
            "Bio-Landwirtschaftsbetrieb in Jaffna, Sri Lanka. Spezialisiert auf Ringelblumenanbau und Gemüseproduktion, verbunden mit lokalem Anbau und nachhaltiger Landwirtschaft.",
          tags: ["Bio-Farming", "Jaffna", "Nachhaltigkeit"],
          website: "https://rbbio.ch",
        },
        habbGlobal: {
          name: "HABB Global",
          location: "Weltweit",
          sector: "Digital Engineering",
          description:
            "Ihr weltweiter Digital-Engineering-Partner für den Entwurf und Bau sicherer, skalierbarer Produkte für Web, Mobile, Cloud und KI. Mit eigenen Büros in Sri Lanka und der Schweiz begleitet ein verantwortliches Team Projekte von der Strategie bis zum Support und entwickelt auch eigene SaaS-Produkte. Leistungen umfassen digitales Marketing (HABB DIGI), KI-Automatisierung (HABB AI) und Zugangskontrolle (HABBGate).",
          tags: ["Softwareentwicklung", "KI-Automatisierung", "Digital Engineering"],
          website: "https://habbglobal.com",
        },
      },
    },
    team: {
      title: "Führung der Gruppe",
      subtitle: "Leitung der Beteiligungsgesellschaften und strategische Partner",
    },
    about: {
      title: "Über R&B Holdings",
      subtitle: "Eine Holdinggesellschaft mit Vision und Stärke",
      description:
        "Die R&B Rajh Holding AG wurde am 12. März 2019 in Burgdorf, Schweiz, gegründet. Sie ist eine dynamische Holdinggesellschaft mit einem eingetragenen Kapital von 100.000 CHF und die Schweizer Holdinggesellschaft der R&B Holdings. Unter der Führung von Suyarajh Kanagaratnam als Vorstandsmitglied und gesetzlichem Vertreter baut das Unternehmen aktiv ein Portfolio aus Industrie-, Dienstleistungs- und Gastgewerbeunternehmen auf.",
      mission: "Unsere Mission",
      missionText:
        "Strategische Bündelung von Kompetenzen in Industrie, Technologie und Gastgewerbe zur Schaffung nachhaltiger Werte.",
      vision: "Unsere Vision",
      visionText:
        "Führende Schweizer Holding mit globalem Einfluss – von der Industrie bis zur Hospitality.",
      values: "Unsere Werte",
      valuesText:
        "Qualität, Integrität, Innovation und Partnerschaft sind die Grundpfeiler unserer Unternehmenskultur.",
      ceo: "Suyarajh Kanagaratnam",
      ceoTitle: "Gründer, Vorstandsmitglied & Geschäftsführer",
      incorporated: "Eingetragen",
      registeredCapital: "Eingetragenes Kapital",
      legalForm: "Rechtsform",
      agForm: "Aktiengesellschaft (AG)",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Nehmen Sie Kontakt auf",
      address: "Adresse",
      email: "E-Mail",
      phone: "Telefon",
      send: "Nachricht senden",
      name: "Ihr Name",
      emailLabel: "Ihre E-Mail",
      message: "Ihre Nachricht",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      registered: "In der Schweiz eingetragen als R&B Rajh Holding AG.",
      tagline: "Strategische Investitionen. Industrielle Exzellenz.",
      portfolio: "Portfolio",
      about: "Über uns",
      contact: "Kontakt",
    },
    ui: {
      sendError: "Fehler beim Senden",
      genericError: "Ein Fehler ist aufgetreten",
      sentTitle: "Nachricht gesendet!",
      sentText: "Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.",
      sending: "Wird gesendet...",
      aboutUs: "Über uns",
      addressSriLanka: "Adresse Sri Lanka",
      commercialRegister: "Handelsregister",
    },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      portfolio: "போர்ட்ஃபோலியோ",
      about: "எங்களைப் பற்றி",
      contact: "தொடர்பு",
    },
    hero: {
      tagline: "மூலோபாய முதலீடுகள். தொழில்துறை சிறப்பு.",
      description:
        "R&B Holdings என்பது சுவிட்சர்லாந்தை அடிப்படையாகக் கொண்டு, இப்போது சர்வதேச அளவில் விரிவடைந்து வரும் உலகளாவிய ஹோல்டிங் குழு. பர்க்டோர்ஃபில் உள்ள அதன் சுவிஸ் ஹோல்டிங் நிறுவனம் R&B Rajh Holding AG குழுவின் அடித்தளமாக உள்ளது; மூலோபாய பங்கேற்புகள், தொழில்துறை சேவைகள் மற்றும் சர்வதேச கூட்டாண்மைகளில் கவனம் செலுத்துகிறது.",
      cta: "போர்ட்ஃபோலியோவை ஆராயுங்கள்",
      cta2: "தொடர்பு கொள்ளுங்கள்",
      founded: "நிறுவப்பட்டது",
      capital: "மூலதனம்",
      headquarters: "தலைமையகம்",
      companies: "நிறுவனங்கள்",
    },
    stats: {
      founded: "2019",
      capital: "CHF 100K",
      hq: "Burgdorf, CH",
      companies: "6+",
    },
    portfolio: {
      title: "எங்கள் போர்ட்ஃபோலியோ",
      subtitle:
        "சுவிட்சர்லாந்து மற்றும் இலங்கையில் உள்ள தொழில்துறை நிறுவனங்கள் மற்றும் சேவை வணிகங்களின் பல்வகைப்பட்ட போர்ட்ஃபோலியோ.",
      learnMore: "மேலும் அறிக",
      visitWebsite: "இணையதளத்தைப் பார்வையிடுங்கள்",
      companies: {
        tschannen: {
          name: "Tschannen Spritzwerk AG",
          location: "பர்க்டோர்ஃப், சுவிட்சர்லாந்து",
          sector: "மேற்பரப்பு சிகிச்சை",
          description:
            "தொழில்துறை மற்றும் வணிக வாடிக்கையாளர்களுக்கு விரிவான முன்-சிகிச்சை, தர கட்டுப்பாடு மற்றும் பேக்கேஜிங் சேவைகளுடன் பவுடர் கோட்டிங் மற்றும் ஈர பெயிண்டிங்கில் நிபுணர்.",
          tags: ["பவுடர் கோட்டிங்", "ஈர பெயிண்டிங்", "மேற்பரப்பு தொழில்நுட்பம்"],
          website: "https://tschannenspritzwerk.ch",
        },
        leuta: {
          name: "Leuta Korrosionsschutz AG",
          location: "கிரெட்சன்பாக், சுவிட்சர்லாந்து",
          sector: "துரு தடுப்பு",
          description:
            "1966 முதல் செயல்பட்டு வரும் சுவிஸ் உலோக முடித்தல் மற்றும் துரு தடுப்பு நிபுணர். சாண்ட்பிளாஸ்டிங், ஸ்ப்ரே கால்வனைசிங், ப்ரைமர்கள், டாப்கோட்டுகள் மற்றும் டூப்ளக்ஸ் கோட்டிங்குகளை வழங்குகிறது.",
          tags: ["துரு தடுப்பு", "உலோக முடித்தல்", "ஸ்ப்ரே கால்வனைசிங்"],
          website: "https://leutakorrosionsschutz.ch",
        },
        rbcompany: {
          name: "R&B Company GmbH",
          location: "சுவிட்சர்லாந்து",
          sector: "தொழில்துறை சேவைகள்",
          description:
            "Leuta Korrosionsschutz AG மற்றும் Tschannen Spritzwerk ஆகியவற்றுக்கு இடையே நெருங்கிய ஒத்துழைப்புடன் கூடிய குழுவின் முக்கிய செயல்பாட்டு நிறுவனம் – தொடக்கம் முதல் முடிவு வரை செயல்முறைகளை ஒருங்கிணைக்கிறது.",
          tags: ["தொழில்துறை சேவைகள்", "கூட்டாண்மை", "தரம்"],
          website: "https://www.rbcompany.ch/en",
        },
        guesthouse: {
          name: "R&B Guest House pvt. Ltd.",
          location: "திருநெல்வேலி, யாழ்ப்பாணம், இலங்கை",
          sector: "விருந்தோம்பல்",
          description:
            "யாழ்ப்பாணம் திருநெல்வேலியின் மையத்தில் உள்ள குடும்பம் நடத்தும் விருந்தினர் இல்லம். இலவச வைஃபை, காலை உணவு, விமான நிலைய போக்குவரத்து மற்றும் வழிகாட்டப்பட்ட சுற்றுலாக்களுடன் டீலக்ஸ், ஸ்டாண்டர்ட் மற்றும் குடும்ப அறைகளை வழங்குகிறது.",
          tags: ["விருந்தினர் இல்லம்", "யாழ்ப்பாணம்", "இலங்கை"],
          website: "https://rbguesthouse.ch",
        },
        farm: {
          name: "R&B Organic Farming pvt. Ltd.",
          location: "திருநெல்வேலி, யாழ்ப்பாணம், இலங்கை",
          sector: "வேளாண்மை",
          description:
            "யாழ்ப்பாணம், இலங்கையில் உள்ள இயற்கை வேளாண் பண்ணை. சாமந்தி சாகுபடி மற்றும் காய்கறி உற்பத்தியில் நிபுணத்துவம், உள்ளூர் சாகுபடி மற்றும் நிலையான விவசாய முறைகளைப் பின்பற்றுகிறது.",
          tags: ["இயற்கை வேளாண்மை", "யாழ்ப்பாணம்", "நிலைத்தன்மை"],
          website: "https://rbbio.ch",
        },
        habbGlobal: {
          name: "HABB Global",
          location: "உலகளாவிய",
          sector: "டிஜிட்டல் பொறியியல்",
          description:
            "உங்கள் உலகளாவிய டிஜிட்டல் பொறியியல் கூட்டாளி; பாதுகாப்பான, அளவிடக்கூடிய இணையம், மொபைல், கிளவுட் மற்றும் AI தயாரிப்புகளை வடிவமைத்து உருவாக்குகிறது. இலங்கை மற்றும் சுவிட்சர்லாந்தில் உண்மையான அலுவலகங்களுடன், ஒரே பொறுப்புள்ள குழு உத்தியிலிருந்து ஆதரவு வரை திட்டங்களை கையாள்கிறது; சொந்த SaaS தயாரிப்புகளையும் உருவாக்குகிறது. சேவைகள்: டிஜிட்டல் மார்க்கெட்டிங் (HABB DIGI), AI ஆட்டோமேஷன் (HABB AI), அணுகல் கட்டுப்பாடு (HABBGate).",
          tags: ["மென்பொருள் மேம்பாடு", "AI ஆட்டோமேஷன்", "டிஜிட்டல் பொறியியல்"],
          website: "https://habbglobal.com",
        },
      },
    },
    team: {
      title: "குழு தலைமை",
      subtitle: "எங்கள் வெற்றியின் பின்னால் உள்ள மனிதர்கள்.",
    },
    about: {
      title: "R&B Holdings பற்றி",
      subtitle: "தொலைநோக்கும் வலிமையும் கொண்ட ஒரு ஹோல்டிங் நிறுவனம்",
      description:
        "2019 மார்ச் 12 அன்று சுவிட்சர்லாந்தின் பர்க்டோர்ஃபில் நிறுவப்பட்ட R&B Rajh Holding AG, CHF 100,000 பதிவு செய்யப்பட்ட மூலதனத்துடன் கூடிய ஒரு இயக்கமான ஹோல்டிங் நிறுவனம்; இது R&B Holdings-இன் சுவிஸ் ஹோல்டிங் நிறுவனம். குழு உறுப்பினரும் சட்டப் பிரதிநிதியுமான Suyarajh Kanagaratnam தலைமையில், தொழில்துறை, சேவை மற்றும் விருந்தோம்பல் வணிகங்களின் போர்ட்ஃபோலியோவை நிறுவனம் தீவிரமாக உருவாக்கி வருகிறது.",
      mission: "எங்கள் நோக்கம்",
      missionText:
        "நிலையான மதிப்பை உருவாக்க தொழில், தொழில்நுட்பம் மற்றும் விருந்தோம்பலில் உள்ள திறன்களை மூலோபாய ரீதியாக ஒருங்கிணைத்தல்.",
      vision: "எங்கள் தொலைநோக்கு",
      visionText:
        "உலகளாவிய செல்வாக்குடன் முன்னணி சுவிஸ் ஹோல்டிங் – தொழில் முதல் விருந்தோம்பல் வரை.",
      values: "எங்கள் மதிப்புகள்",
      valuesText:
        "தரம், நேர்மை, புதுமை மற்றும் கூட்டாண்மை எங்கள் நிறுவன கலாச்சாரத்தின் அடித்தளங்கள்.",
      ceo: "Suyarajh Kanagaratnam",
      ceoTitle: "நிறுவனர், குழு உறுப்பினர் & நிர்வாக இயக்குநர்",
      incorporated: "பதிவு செய்யப்பட்டது",
      registeredCapital: "பதிவு செய்யப்பட்ட மூலதனம்",
      legalForm: "சட்ட வடிவம்",
      agForm: "பொதுப் பங்கு நிறுவனம் (AG)",
    },
    contact: {
      title: "தொடர்பு",
      subtitle: "எங்களைத் தொடர்பு கொள்ளுங்கள்",
      address: "முகவரி",
      email: "மின்னஞ்சல்",
      phone: "தொலைபேசி",
      send: "செய்தி அனுப்பு",
      name: "உங்கள் பெயர்",
      emailLabel: "உங்கள் மின்னஞ்சல்",
      message: "உங்கள் செய்தி",
    },
    footer: {
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      registered: "சுவிட்சர்லாந்தில் R&B Rajh Holding AG என பதிவு செய்யப்பட்டது.",
      tagline: "மூலோபாய முதலீடுகள். தொழில்துறை சிறப்பு.",
      portfolio: "போர்ட்ஃபோலியோ",
      about: "எங்களைப் பற்றி",
      contact: "தொடர்பு",
    },
    ui: {
      sendError: "அனுப்புவதில் பிழை",
      genericError: "ஒரு பிழை ஏற்பட்டது",
      sentTitle: "செய்தி அனுப்பப்பட்டது!",
      sentText: "நன்றி! விரைவில் உங்களைத் தொடர்புகொள்வோம்.",
      sending: "அனுப்பப்படுகிறது...",
      aboutUs: "எங்களைப் பற்றி",
      addressSriLanka: "இலங்கை முகவரி",
      commercialRegister: "வணிகப் பதிவு",
    },
  },
  si: {
    nav: {
      home: "මුල් පිටුව",
      portfolio: "ව්‍යාපෘති",
      about: "අප ගැන",
      contact: "සම්බන්ධ වන්න",
    },
    hero: {
      tagline: "උපායශීලී ආයෝජන. කාර්මික විශිෂ්ටත්වය.",
      description:
        "R&B Holdings යනු ස්විට්සර්ලන්තය පදනම් කරගත් හා දැන් ජාත්‍යන්තරව ව්‍යාප්ත වන ලොව පුරා ආයෝජන සමූහයකි. බර්ක්ඩෝෆ් හි ඇති එහි ස්විස් මව් සමාගම වන R&B Rajh Holding AG සමූහයේ මූලය වන අතර, උපායශීලී ආයෝජන, කාර්මික සේවා සහ ජාත්‍යන්තර හවුල්කාරිත්වය කෙරෙහි අවධානය යොමු කරයි.",
      cta: "ව්‍යාපෘති සොයන්න",
      cta2: "අප හා සම්බන්ධ වන්න",
      founded: "ආරම්භ වූ වර්ෂය",
      capital: "ප්‍රාග්ධනය",
      headquarters: "මූලස්ථානය",
      companies: "සමාගම්",
    },
    stats: {
      founded: "2019",
      capital: "CHF 100K",
      hq: "Burgdorf, CH",
      companies: "6+",
    },
    portfolio: {
      title: "අපේ ව්‍යාපෘති",
      subtitle:
        "ස්විට්සර්ලන්තයේ සහ ශ්‍රී ලංකාවේ කාර්මික සමාගම් සහ සේවා ව්‍යාපාර අඩංගු විවිධාංගීකෘත ව්‍යාපෘති සංග්‍රහය.",
      learnMore: "තවත් දැනගන්න",
      visitWebsite: "වෙබ් අඩවිය බලන්න",
      companies: {
        tschannen: {
          name: "Tschannen Spritzwerk AG",
          location: "බර්ක්ඩෝෆ්, ස්විට්සර්ලන්තය",
          sector: "මතුපිට ප්‍රතිකාර",
          description:
            "කාර්මික හා වාණිජ ගනුදෙනුකරුවන් සඳහා පූර්ව-ප්‍රතිකාර, තත්ත්ව පාලනය සහ ඇසුරුම් සේවා සහිත කුඩු ආලේපන සහ තෙත් තීන්ත ආලේපන පිළිබඳ විශේෂඥයෙකි.",
          tags: ["කුඩු ආලේපනය", "තෙත් තීන්ත", "මතුපිට තාක්ෂණය"],
          website: "https://tschannenspritzwerk.ch",
        },
        leuta: {
          name: "Leuta Korrosionsschutz AG",
          location: "ග්‍රෙට්සෙන්බාක්, ස්විට්සර්ලන්තය",
          sector: "මළකඩ ආරක්ෂාව",
          description:
            "1966 සිට ක්‍රියාකාරී ස්විස් ලෝහ නිමකිරීම් සහ මළකඩ ආරක්ෂණ විශේෂඥයෙකි. වැලි විස්ඵෝටනය, ස්ප්‍රේ ගැල්වනයිසිං, ප්‍රයිමර්, ඉහළ ආලේපන සහ ද්විත්ව ආලේපන සපයයි.",
          tags: ["මළකඩ ආරක්ෂාව", "ලෝහ නිමකිරීම", "ස්ප්‍රේ ගැල්වනයිසිං"],
          website: "https://leutakorrosionsschutz.ch",
        },
        rbcompany: {
          name: "R&B Company GmbH",
          location: "ස්විට්සර්ලන්තය",
          sector: "කාර්මික සේවා",
          description:
            "Leuta Korrosionsschutz AG සහ Tschannen Spritzwerk අතර සමීප සහයෝගීතාවයෙන් යුත් කණ්ඩායමේ මූලික මෙහෙයුම් සමාගම – ආරම්භයේ සිට අවසානය දක්වා ක්‍රියාවලීන් එක්සත් කරයි.",
          tags: ["කාර්මික සේවා", "හවුල්කාරිත්වය", "ගුණාත්මකභාවය"],
          website: "https://www.rbcompany.ch/en",
        },
        guesthouse: {
          name: "R&B Guest House pvt. Ltd.",
          location: "තිරුනෙල්වේලි, යාපනය, ශ්‍රී ලංකාව",
          sector: "සත්කාරක සේවා",
          description:
            "යාපනය, තිරුනෙල්වේලි හි හදවතේ පිහිටි පවුලක් විසින් පවත්වාගෙන යන අමුත්තන් නවාතැන්ගෘහයකි. නොමිලේ Wi-Fi, උදෑසන ආහාර, ගුවන්තොටුපළ ප්‍රවාහනය සහ මඟපෙන්වන සංචාර සහිත ඩීලක්ස්, සම්මත සහ පවුල් කාමර සපයයි.",
          tags: ["අමුත්තන් නවාතැන", "යාපනය", "ශ්‍රී ලංකාව"],
          website: "https://rbguesthouse.ch",
        },
        farm: {
          name: "R&B Organic Farming pvt. Ltd.",
          location: "තිරුනෙල්වේලි, යාපනය, ශ්‍රී ලංකාව",
          sector: "කෘෂිකර්මය",
          description:
            "යාපනය, ශ්‍රී ලංකාවේ කාබනික ගොවිපල මෙහෙයුමකි. ගෙන්ඩි (මැරිගෝල්ඩ්) වගාව සහ එළවළු නිෂ්පාදනය පිළිබඳ විශේෂඥ වන අතර දේශීය වගාව සහ තිරසාර කෘෂිකාර්මික ක්‍රම අනුගමනය කරයි.",
          tags: ["කාබනික ගොවිපල", "යාපනය", "තිරසාරභාවය"],
          website: "https://rbbio.ch",
        },
        habbGlobal: {
          name: "HABB Global",
          location: "ලොව පුරා",
          sector: "ඩිජිටල් ඉංජිනේරු විද්‍යාව",
          description:
            "ආරක්ෂිත, පරිමාණය කළ හැකි වෙබ්, ජංගම, ක්ලවුඩ් සහ AI නිෂ්පාදන සැලසුම් කර ගොඩනඟන ඔබේ ලොව පුරා ඩිජිටල් ඉංජිනේරු හවුල්කරුවා. ශ්‍රී ලංකාවේ සහ ස්විට්සර්ලන්තයේ සැබෑ කාර්යාල සහිතව, එක් වගකීම් සහගත කණ්ඩායමක් ව්‍යාපෘති උපායමාර්ගයේ සිට සහාය දක්වා කටයුතු කරන අතර, තමන්ගේම SaaS නිෂ්පාදන ද ගොඩනඟයි. සේවා: ඩිජිටල් අලෙවිකරණය (HABB DIGI), AI ස්වයංක්‍රීයකරණය (HABB AI) සහ ප්‍රවේශ පාලනය (HABBGate).",
          tags: ["මෘදුකාංග සංවර්ධනය", "AI ස්වයංක්‍රීයකරණය", "ඩිජිටල් ඉංජිනේරු විද්‍යාව"],
          website: "https://habbglobal.com",
        },
      },
    },
    team: {
      title: "කණ්ඩායම් නායකත්වය",
      subtitle: "අපගේ සාර්ථකත්වය පිටුපස සිටින පුද්ගලයෝ.",
    },
    about: {
      title: "R&B Holdings ගැන",
      subtitle: "දැක්මෙන් හා ශක්තියෙන් යුත් ආයෝජන සමාගමක්",
      description:
        "2019 මාර්තු 12 වන දින ස්විට්සර්ලන්තයේ බර්ක්ඩෝෆ් හි ආරම්භ කළ R&B Rajh Holding AG, ලියාපදිංචි කළ ප්‍රාග්ධනය CHF 100,000 වන ගතික ආයෝජන සමාගමක් වන අතර, R&B Holdings හි ස්විස් මව් සමාගම වේ. මණ්ඩල සාමාජික සහ නීත්‍යානුකූල නියෝජිත Suyarajh Kanagaratnam ගේ මෙහෙයවීම යටතේ, කාර්මික, සේවා සහ සත්කාරක ව්‍යාපාරවල ව්‍යාපෘති සංග්‍රහයක් සක්‍රීයව ගොඩනඟමින් සිටී.",
      mission: "අපගේ මෙහෙවර",
      missionText:
        "තිරසාර වටිනාකම් නිර්මාණය කිරීම සඳහා කර්මාන්තය, තාක්ෂණය සහ සත්කාරක සේවාවන්හි හැකියාවන් උපායශීලීව එකතු කිරීම.",
      vision: "අපගේ දැක්ම",
      visionText:
        "ගෝලීය බලපෑමක් ඇති ප්‍රමුඛ ස්විස් ආයෝජන සමාගම – කර්මාන්තයේ සිට සත්කාරක සේවා දක්වා.",
      values: "අපගේ වටිනාකම්",
      valuesText:
        "ගුණාත්මකභාවය, අඛණ්ඩතාව, නවෝත්පාදනය සහ හවුල්කාරිත්වය අපගේ corporate සංස්කෘතියේ පදනම් ය.",
      ceo: "Suyarajh Kanagaratnam",
      ceoTitle: "නිර්මාතෘ, මණ්ඩල සාමාජික සහ කළමනාකාර අධ්‍යක්ෂ",
      incorporated: "ලියාපදිංචි කළ දිනය",
      registeredCapital: "ලියාපදිංචි ප්‍රාග්ධනය",
      legalForm: "නීත්‍යානුකූල ආකෘතිය",
      agForm: "පොදු සමාගම (AG)",
    },
    contact: {
      title: "සම්බන්ධ වන්න",
      subtitle: "අප හා සම්බන්ධ වන්න",
      address: "ලිපිනය",
      email: "විද්‍යුත් තැපෑල",
      phone: "දුරකථනය",
      send: "පණිවිඩය යවන්න",
      name: "ඔබගේ නම",
      emailLabel: "ඔබගේ විද්‍යුත් තැපෑල",
      message: "ඔබගේ පණිවිඩය",
    },
    footer: {
      rights: "සියලු හිමිකම් ඇවිරිණි.",
      registered: "ස්විට්සර්ලන්තයේ R&B Rajh Holding AG ලෙස ලියාපදිංචි කර ඇත.",
      tagline: "උපායශීලී ආයෝජන. කාර්මික විශිෂ්ටත්වය.",
      portfolio: "ව්‍යාපෘති",
      about: "අප ගැන",
      contact: "සම්බන්ධ වන්න",
    },
    ui: {
      sendError: "යැවීමේ දෝෂයක්",
      genericError: "දෝෂයක් ඇති විය",
      sentTitle: "පණිවිඩය යවන ලදී!",
      sentText: "ස්තූතියි! ඉක්මනින් ඔබ හා සම්බන්ධ වන්නෙමු.",
      sending: "යවමින්...",
      aboutUs: "අප ගැන",
      addressSriLanka: "ශ්‍රී ලංකා ලිපිනය",
      commercialRegister: "වාණිජ ලේඛනය",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      portfolio: "Portefeuille",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      tagline: "Investissements stratégiques. Excellence industrielle.",
      description:
        "R&B Holdings est un groupe de holdings mondial basé en Suisse qui se développe désormais à l'international. Sa société holding suisse, R&B Rajh Holding AG à Burgdorf, constitue la base du groupe, axé sur les participations stratégiques, les services industriels et les partenariats internationaux.",
      cta: "Découvrir le portefeuille",
      cta2: "Nous contacter",
      founded: "Fondée",
      capital: "Capital",
      headquarters: "Siège social",
      companies: "Entreprises",
    },
    stats: {
      founded: "2019",
      capital: "CHF 100K",
      hq: "Burgdorf, CH",
      companies: "6+",
    },
    portfolio: {
      title: "Notre portefeuille",
      subtitle:
        "Un portefeuille diversifié d'entreprises industrielles et de services en Suisse et au Sri Lanka.",
      learnMore: "En savoir plus",
      visitWebsite: "Visiter le site",
      companies: {
        tschannen: {
          name: "Tschannen Spritzwerk AG",
          location: "Burgdorf, Suisse",
          sector: "Traitement de surface",
          description:
            "Spécialiste du thermolaquage et de la peinture liquide, avec des services complets de prétraitement, de contrôle qualité et de conditionnement pour les clients industriels et commerciaux.",
          tags: ["Thermolaquage", "Peinture liquide", "Technologie de surface"],
          website: "https://tschannenspritzwerk.ch",
        },
        leuta: {
          name: "Leuta Korrosionsschutz AG",
          location: "Gretzenbach, Suisse",
          sector: "Protection anticorrosion",
          description:
            "Spécialiste suisse de la finition des métaux et de la protection anticorrosion depuis 1966. Propose le sablage, la galvanisation par projection, les primaires, les finitions et les revêtements duplex.",
          tags: ["Protection anticorrosion", "Finition des métaux", "Galvanisation par projection"],
          website: "https://leutakorrosionsschutz.ch",
        },
        rbcompany: {
          name: "R&B Company GmbH",
          location: "Suisse",
          sector: "Services industriels",
          description:
            "Entreprise opérationnelle centrale du groupe, en étroite collaboration avec Leuta Korrosionsschutz AG et Tschannen Spritzwerk – réunit les processus de bout en bout.",
          tags: ["Services industriels", "Partenariat", "Qualité"],
          website: "https://www.rbcompany.ch/en",
        },
        guesthouse: {
          name: "R&B Guest House pvt. Ltd.",
          location: "Thirunelvely, Jaffna, Sri Lanka",
          sector: "Hôtellerie",
          description:
            "Maison d'hôtes familiale au cœur de Thirunelvely, Jaffna. Chambres Deluxe, Standard et Familiales avec Wi-Fi gratuit, petit-déjeuner, transfert aéroport et visites guidées.",
          tags: ["Maison d'hôtes", "Jaffna", "Sri Lanka"],
          website: "https://rbguesthouse.ch",
        },
        farm: {
          name: "R&B Organic Farming pvt. Ltd.",
          location: "Thirunelvely, Jaffna, Sri Lanka",
          sector: "Agriculture",
          description:
            "Exploitation agricole biologique à Jaffna, Sri Lanka. Spécialisée dans la culture du souci et la production de légumes, dans le respect des pratiques locales et durables.",
          tags: ["Agriculture biologique", "Jaffna", "Durabilité"],
          website: "https://rbbio.ch",
        },
        habbGlobal: {
          name: "HABB Global",
          location: "Mondial",
          sector: "Ingénierie numérique",
          description:
            "Votre partenaire mondial en ingénierie numérique, qui conçoit et développe des produits web, mobiles, cloud et IA sécurisés et évolutifs. Avec de véritables bureaux au Sri Lanka et en Suisse, une équipe unique et responsable accompagne les projets de la stratégie au support, et nous développons aussi nos propres produits SaaS. Services : marketing digital (HABB DIGI), automatisation IA (HABB AI) et contrôle d'accès (HABBGate).",
          tags: ["Développement logiciel", "Automatisation IA", "Ingénierie numérique"],
          website: "https://habbglobal.com",
        },
      },
    },
    team: {
      title: "Direction du groupe",
      subtitle: "Les personnes derrière notre réussite.",
    },
    about: {
      title: "À propos de R&B Holdings",
      subtitle: "Une société holding avec vision et force",
      description:
        "R&B Rajh Holding AG a été fondée le 12 mars 2019 à Burgdorf, en Suisse. C'est une société holding dynamique dont le capital social est de CHF 100 000, et la holding suisse de R&B Holdings. Sous la direction de Suyarajh Kanagaratnam, membre du conseil d'administration et représentant légal, la société développe activement un portefeuille d'entreprises industrielles, de services et d'hôtellerie.",
      mission: "Notre mission",
      missionText:
        "Regrouper stratégiquement les compétences dans l'industrie, la technologie et l'hôtellerie pour créer une valeur durable.",
      vision: "Notre vision",
      visionText:
        "Première société holding suisse au rayonnement mondial – de l'industrie à l'hôtellerie.",
      values: "Nos valeurs",
      valuesText:
        "La qualité, l'intégrité, l'innovation et le partenariat sont les piliers de notre culture d'entreprise.",
      ceo: "Suyarajh Kanagaratnam",
      ceoTitle: "Fondateur, membre du conseil & directeur général",
      incorporated: "Immatriculée le",
      registeredCapital: "Capital social",
      legalForm: "Forme juridique",
      agForm: "Société anonyme (AG)",
    },
    contact: {
      title: "Contact",
      subtitle: "Entrer en contact",
      address: "Adresse",
      email: "E-mail",
      phone: "Téléphone",
      send: "Envoyer le message",
      name: "Votre nom",
      emailLabel: "Votre e-mail",
      message: "Votre message",
    },
    footer: {
      rights: "Tous droits réservés.",
      registered: "Immatriculée en Suisse sous le nom R&B Rajh Holding AG.",
      tagline: "Investissements stratégiques. Excellence industrielle.",
      portfolio: "Portefeuille",
      about: "À propos",
      contact: "Contact",
    },
    ui: {
      sendError: "Échec de l'envoi",
      genericError: "Une erreur est survenue",
      sentTitle: "Message envoyé !",
      sentText: "Merci ! Nous vous répondrons dans les plus brefs délais.",
      sending: "Envoi en cours...",
      aboutUs: "À propos",
      addressSriLanka: "Adresse Sri Lanka",
      commercialRegister: "Registre du commerce",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      portfolio: "المحفظة",
      about: "من نحن",
      contact: "اتصل بنا",
    },
    hero: {
      tagline: "استثمارات استراتيجية. تميز صناعي.",
      description:
        "R&B Holdings مجموعة قابضة عالمية مقرها سويسرا وتتوسع الآن دوليًا. تمثل شركتها القابضة السويسرية، R&B Rajh Holding AG في بورغدورف، ركيزة المجموعة، وتركز على المشاركات الاستراتيجية والخدمات الصناعية والشراكات الدولية.",
      cta: "استكشف المحفظة",
      cta2: "تواصل معنا",
      founded: "تأسست عام",
      capital: "رأس المال",
      headquarters: "المقر الرئيسي",
      companies: "الشركات",
    },
    stats: {
      founded: "2019",
      capital: "CHF 100K",
      hq: "Burgdorf, CH",
      companies: "6+",
    },
    portfolio: {
      title: "محفظتنا",
      subtitle:
        "محفظة متنوعة من الشركات الصناعية وشركات الخدمات في سويسرا وسريلانكا.",
      learnMore: "اعرف المزيد",
      visitWebsite: "زيارة الموقع",
      companies: {
        tschannen: {
          name: "Tschannen Spritzwerk AG",
          location: "بورغدورف، سويسرا",
          sector: "معالجة الأسطح",
          description:
            "متخصصة في الطلاء بالمسحوق والطلاء الرطب، مع خدمات شاملة للمعالجة الأولية ومراقبة الجودة والتغليف للعملاء الصناعيين والتجاريين.",
          tags: ["الطلاء بالمسحوق", "الطلاء الرطب", "تقنية الأسطح"],
          website: "https://tschannenspritzwerk.ch",
        },
        leuta: {
          name: "Leuta Korrosionsschutz AG",
          location: "غريتزنباخ، سويسرا",
          sector: "الحماية من التآكل",
          description:
            "متخصصة سويسرية في تشطيب المعادن والحماية من التآكل منذ عام 1966. تقدم التنظيف بالرمل، والجلفنة بالرش، والبرايمر، والطبقات النهائية، والطلاءات المزدوجة.",
          tags: ["الحماية من التآكل", "تشطيب المعادن", "الجلفنة بالرش"],
          website: "https://leutakorrosionsschutz.ch",
        },
        rbcompany: {
          name: "R&B Company GmbH",
          location: "سويسرا",
          sector: "الخدمات الصناعية",
          description:
            "الشركة التشغيلية الرئيسية للمجموعة، بتعاون وثيق مع Leuta Korrosionsschutz AG وTschannen Spritzwerk – توحد العمليات من البداية إلى النهاية.",
          tags: ["الخدمات الصناعية", "الشراكة", "الجودة"],
          website: "https://www.rbcompany.ch/en",
        },
        guesthouse: {
          name: "R&B Guest House pvt. Ltd.",
          location: "ثيرونيلفيلي، يافنا، سريلانكا",
          sector: "الضيافة",
          description:
            "بيت ضيافة عائلي في قلب ثيرونيلفيلي بيافنا. يقدم غرف ديلوكس وستاندرد وعائلية مع واي فاي مجاني، وفطور، ونقل من المطار، وجولات إرشادية.",
          tags: ["بيت ضيافة", "يافنا", "سريلانكا"],
          website: "https://rbguesthouse.ch",
        },
        farm: {
          name: "R&B Organic Farming pvt. Ltd.",
          location: "ثيرونيلفيلي، يافنا، سريلانكا",
          sector: "الزراعة",
          description:
            "مزرعة عضوية في يافنا، سريلانكا. متخصصة في زراعة الأقحوان وإنتاج الخضروات، مع تبني الزراعة المحلية والممارسات المستدامة.",
          tags: ["الزراعة العضوية", "يافنا", "الاستدامة"],
          website: "https://rbbio.ch",
        },
        habbGlobal: {
          name: "HABB Global",
          location: "عالمي",
          sector: "الهندسة الرقمية",
          description:
            "شريككم العالمي في الهندسة الرقمية، نصمم ونبني منتجات آمنة وقابلة للتوسع للويب والجوال والسحابة والذكاء الاصطناعي. مع مكاتب حقيقية في سريلانكا وسويسرا، يتولى فريق واحد ومسؤول المشاريع من الاستراتيجية حتى الدعم، ونطور كذلك منتجات SaaS الخاصة بنا. الخدمات: التسويق الرقمي (HABB DIGI)، وأتمتة الذكاء الاصطناعي (HABB AI)، والتحكم في الوصول (HABBGate).",
          tags: ["تطوير البرمجيات", "أتمتة الذكاء الاصطناعي", "الهندسة الرقمية"],
          website: "https://habbglobal.com",
        },
      },
    },
    team: {
      title: "قيادة المجموعة",
      subtitle: "الأشخاص وراء نجاحنا.",
    },
    about: {
      title: "عن R&B Holdings",
      subtitle: "شركة قابضة برؤية وقوة",
      description:
        "تأسست R&B Rajh Holding AG في 12 مارس 2019 في بورغدورف، سويسرا، وهي شركة قابضة ديناميكية برأس مال مسجل قدره 100,000 فرنك سويسري، وهي الشركة القابضة السويسرية لمجموعة R&B Holdings. تحت قيادة Suyarajh Kanagaratnam، عضو مجلس الإدارة والممثل القانوني، تبني الشركة بنشاط محفظة من الأعمال الصناعية والخدمية والضيافة.",
      mission: "رسالتنا",
      missionText:
        "الجمع الاستراتيجي للكفاءات في الصناعة والتكنولوجيا والضيافة لخلق قيمة مستدامة.",
      vision: "رؤيتنا",
      visionText:
        "شركة القابضة السويسرية الرائدة ذات التأثير العالمي – من الصناعة إلى الضيافة.",
      values: "قيمنا",
      valuesText:
        "الجودة والنزاهة والابتكار والشراكة هي ركائز ثقافتنا المؤسسية.",
      ceo: "Suyarajh Kanagaratnam",
      ceoTitle: "المؤسس وعضو مجلس الإدارة والمدير التنفيذي",
      incorporated: "تاريخ التسجيل",
      registeredCapital: "رأس المال المسجل",
      legalForm: "الشكل القانوني",
      agForm: "شركة مساهمة (AG)",
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "تواصل معنا",
      address: "العنوان",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      send: "إرسال الرسالة",
      name: "اسمك",
      emailLabel: "بريدك الإلكتروني",
      message: "رسالتك",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      registered: "مسجلة في سويسرا باسم R&B Rajh Holding AG.",
      tagline: "استثمارات استراتيجية. تميز صناعي.",
      portfolio: "المحفظة",
      about: "من نحن",
      contact: "اتصل بنا",
    },
    ui: {
      sendError: "فشل الإرسال",
      genericError: "حدث خطأ",
      sentTitle: "تم إرسال الرسالة!",
      sentText: "شكراً لك! سنتواصل معك قريباً.",
      sending: "جارٍ الإرسال...",
      aboutUs: "من نحن",
      addressSriLanka: "عنوان سريلانكا",
      commercialRegister: "السجل التجاري",
    },
  },
};
