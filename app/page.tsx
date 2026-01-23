"use client";
import React from "react";

type Lang = "tr" | "en";

const links = {
  mail: "erdogand159@gmail.com",
  phone: "+90 545 286 50 78",
  github: "https://github.com/erdogndmn",
  linkedin: "https://www.linkedin.com/in/halit-erdogan-duman/",
  portfolio: "https://my-portfolio-ebon-three-67.vercel.app",
  cv: "/cv.pdf",
} as const;

const content = {
  tr: {
    badge: "Junior Web & Dijital Çözümler Geliştirici",
    name: "Halit Erdoğan Duman",
    titleLine:
      "HTML/CSS • Python (temel) • Git/GitHub • Google Ads kampanya desteği • Operasyon sorumluluğu",
    heroDesc:
      "Çözüm odaklı, hızlı öğrenen ve güçlü iletişim becerilerine sahip bir bilgisayar programcılığı öğrencisiyim. HTML, temel Python ve dijital pazarlama alanlarında edindiğim teknik yetkinliklerimi saha deneyimiyle pekiştirdim. Web içerik yönetimi, Google Ads kampanya desteği ve mağaza operasyonlarında görev alarak hem teknik hem operasyonel alanlarda sorumluluk üstlendim.",

    ctaPrimary: "CV’yi İndir (PDF)",
    ctaSecondary: "LinkedIn",
    ctaTertiary: "GitHub",

    quick: {
      location: "📍 İstanbul / Kartal",
      openTo: "🎯 Junior rol / staj / proje bazlı çalışmaya açık",
      phone: "📞 +90 545 286 50 78",
      mail: "✉️ erdogand159@gmail.com",
    },

    sections: {
      about: { title: "Profesyonel Profil", subtitle: "Kısa özet" },
      experience: { title: "İş Deneyimi", subtitle: "Rol ve sorumluluklar" },
      skills: { title: "Teknik Beceriler", subtitle: "Gruplu yetkinlikler" },
      projects: { title: "Projeler", subtitle: "Mini projeler + portföy" },
      education: { title: "Eğitim", subtitle: "Akademik geçmiş" },
      language: { title: "Yabancı Dil", subtitle: "Seviye" },
      contact: { title: "İletişim", subtitle: "Bağlantılar" },
    },

    aboutText:
      "Takım içinde uyumlu çalışır, gerektiğinde sorumluluk alarak liderlik ederim. Farklı sektörlerde edindiğim kısa süreli deneyimler, çok yönlü bir bakış açısı ve geniş bir beceri yelpazesi kazanmamı sağladı. Hedefim; teknolojiyi, insan ilişkilerini ve pratik çözümleri bir araya getirerek değer üreten projelerde yer almak.",

    experience: [
      {
        role: "Mağaza Sorumlusu & Kasiyer",
        company: "Ziyafe Kayseri Mutfağı — Maltepe Park AVM",
        date: "12/2025 – 01/2026",
        bullets: [
          "POS, nakit ve dijital ödeme sistemlerinin yönetimi",
          "Günlük kasa işlemleri, Z raporu ve satış verilerinin kontrolü",
          "6 kişilik mağaza ekibinin vardiya planlaması, görev dağılımı ve koordinasyonu",
          "Yoğun saatlerde operasyonel akışın kesintisiz sürdürülmesi",
          "Stok takibi, tedarikçi siparişlerinin verilmesi ve depo yönetimi",
          "Gıda hizmetleri mevzuatına uygunluk, hijyen ve iş güvenliği süreçleri",
          "Franchise sahibi bulunmadığında mağazanın tüm operasyonel sorumluluğunun üstlenilmesi",
        ],
      },
      {
        role: "Tasarım ve Üretim Elemanı",
        company: "Multi Reklam",
        date: "08/2025 – 10/2025",
        bullets: [
          "Web sitesi içerik ve görsel düzenlemeleri",
          "Google Ads kampanyalarında aktif görev: anahtar kelime analizi ve seçimi",
          "SEO uyumlu içerik düzenlemeleri",
          "Reklam başlığı ve metni hazırlama",
          "Bütçe planlaması ve hedef konum ayarlarına destek",
          "Arama sonuçları performans analizleri",
          "CorelDRAW, Illustrator ve AutoCAD ile görsel tasarımlar",
        ],
      },
      {
        role: "Kurumsal Satış Temsilcisi",
        company: "Karakaş Medya",
        date: "11/2024 – 12/2024",
        bullets: [
          "Soğuk aramalar yoluyla potansiyel müşterilere ulaşarak dijital ajans hizmetlerinin tanıtımını gerçekleştirme",
          "Hizmet tanıtımı sırasında karşılaştırmalı piyasa analizi, değer odaklı yaklaşım ve müşteri hizmetleri avantajlarını vurgulama",
          "SEO danışmanlığı, sosyal medya yönetimi, portföy oluşturma ve fiyatlandırma gibi hizmetlerin ihtiyaç analizine göre sunumu",
          "Randevu alarak yüz yüze görüşmeler organize etme ve satış kapama süreçlerinde aktif rol alma",
          "Çat kapı saha ziyaretleri, yerinde tanıtım ve teklif sunumu",
          "Ajansın sunduğu video çekimi ve kreatif hizmetlere dair projelerde operasyonel destek",
        ],
      },
    ],

    skills: {
      web: [
        "HTML5, Temel CSS",
        "Python (veri işleme, temel otomasyon, mantıksal algoritmalar)",
        "Git & GitHub kullanımı",
        "Responsive tasarım mantığına aşinalık",
        "Temel SEO uyumlu içerik yapısı oluşturma",
      ],
      marketing: [
        "Google Ads (kampanya oluşturma, anahtar kelime planlaması, bütçe yönetimi)",
        "Temel dijital kampanya analizi & raporlama",
        "Web içerik yönetimi (statik siteler, düzenlemeler)",
        "SEO temelleri ve içerik eşleştirme",
      ],
      tools: [
        "CorelDRAW (vektörel çizim, baskı hazırlığı)",
        "Adobe Illustrator (logo & grafik çalışmaları)",
        "AutoCAD (temel teknik çizim bilgisi)",
        "Microsoft Word, Excel, PowerPoint (orta seviye)",
      ],
    },

    projects: [
      {
        title: "Kişisel Portföy Web Sitesi",
        description:
          "HTML ile geliştirilmiş, responsive (mobil uyumlu) tek sayfalık tanıtım sitesi. Kişisel bilgiler, bağlantılar ve projelerin yer aldığı düzenli bölümler. SEO dostu yapı ve sade kullanıcı deneyimi.",
        stack: ["HTML", "CSS"],
        live: "",
        repo: "",
      },
      {
        title: "Bu Portfolyo (Next.js)",
        description:
          "CV, bağlantılar ve projeleri tek sayfada toplayan hızlı ve mobil uyumlu portföy. Basit tasarım dili ve okunabilir içerik yapısı.",
        stack: ["Next.js", "TypeScript", "Tailwind"],
        live: links.portfolio,
        repo: links.github,
      },
    ],

    education: [
      {
        school: "Anadolu Üniversitesi",
        program: "Bilgisayar Programcılığı",
        degree: "Ön Lisans",
        status: "Devam Ediyor",
      },
      {
        school: "Selçuk Üniversitesi",
        program: "İngiliz Dili ve Edebiyatı",
        degree: "Lisans",
        status: "Bırakıldı",
      },
    ],

    languageText:
      "İngilizce: B2–C1 (Teknik belgeleri anlayabilir, temel yazışmaları sürdürebilir, günlük konuşmaları takip edebilir düzeyde)",

    contactText:
      "Junior roller, staj ve proje bazlı işler için iletişime açığım. E-posta veya LinkedIn üzerinden ulaşabilirsin.",

    toggleLabel: "EN",
  },

  en: {
    badge: "Junior Web & Digital Solutions Developer",
    name: "Halit Erdoğan Duman",
    titleLine:
      "HTML/CSS • Python (basic) • Git/GitHub • Google Ads campaign support • Operational ownership",
    heroDesc:
      "I am a solution-oriented Computer Programming student with strong communication skills and a fast learning mindset. I strengthened my technical skills in HTML, basic Python, and digital marketing through hands-on field experience. I took responsibility in both technical and operational areas by working in web content management, Google Ads campaign support, and store operations.",

    ctaPrimary: "Download CV (PDF)",
    ctaSecondary: "LinkedIn",
    ctaTertiary: "GitHub",

    quick: {
      location: "📍 Istanbul / Kartal",
      openTo: "🎯 Open to junior roles / internships / projects",
      phone: "📞 +90 545 286 50 78",
      mail: "✉️ erdogand159@gmail.com",
    },

    sections: {
      about: { title: "Professional Summary", subtitle: "Quick overview" },
      experience: { title: "Experience", subtitle: "Roles & responsibilities" },
      skills: { title: "Technical Skills", subtitle: "Grouped capabilities" },
      projects: { title: "Projects", subtitle: "Mini projects + portfolio" },
      education: { title: "Education", subtitle: "Academic background" },
      language: { title: "Language", subtitle: "Level" },
      contact: { title: "Contact", subtitle: "Links" },
    },

    aboutText:
      "I work well within teams and take initiative when needed. My short-term experiences across different industries helped me build a versatile perspective and a broad skill set. My goal is to contribute to value-driven projects by combining technology, people skills, and practical solutions.",

    experience: [
      {
        role: "Store Supervisor & Cashier",
        company: "Ziyafe Kayseri Mutfağı — Maltepe Park Shopping Center",
        date: "12/2025 – 01/2026",
        bullets: [
          "Management of POS, cash, and digital payment systems",
          "Daily cash handling, Z-reports, and sales data checks",
          "Shift planning and coordination for a 6-person store team",
          "Ensuring uninterrupted operational flow during peak hours",
          "Stock tracking, supplier orders, and inventory management",
          "Compliance with food service regulations, hygiene, and workplace safety",
          "Full operational responsibility in the absence of the franchise owner",
        ],
      },
      {
        role: "Design & Production Assistant",
        company: "Multi Reklam",
        date: "08/2025 – 10/2025",
        bullets: [
          "Website content and visual edits",
          "Active role in Google Ads campaigns: keyword research and selection",
          "SEO-friendly content optimization",
          "Ad headline and copy preparation",
          "Support in budget planning and location targeting",
          "Basic performance analysis of search campaign results",
          "Visual designs using CorelDRAW, Illustrator, and AutoCAD",
        ],
      },
      {
        role: "Corporate Sales Representative",
        company: "Karakaş Medya",
        date: "11/2024 – 12/2024",
        bullets: [
          "Reaching potential clients through cold calling and presenting digital agency services",
          "Highlighting market comparisons, value-driven approach, and customer service advantages during service presentations",
          "Offering services such as SEO consulting, social media management, portfolio building, and pricing based on needs analysis",
          "Scheduling face-to-face meetings and actively supporting sales closing processes",
          "On-site visits and proposal presentations",
          "Operational support in video production and creative service projects",
        ],
      },
    ],

    skills: {
      web: [
        "HTML5, Basic CSS",
        "Python (data handling, basic automation, logical thinking)",
        "Git & GitHub",
        "Responsive design fundamentals",
        "SEO-friendly content structure basics",
      ],
      marketing: [
        "Google Ads (campaign support, keyword planning, budget management)",
        "Basic campaign analysis & reporting",
        "Website content management",
        "SEO fundamentals and content mapping",
      ],
      tools: [
        "CorelDRAW (vector & print preparation)",
        "Adobe Illustrator (logo & graphics)",
        "AutoCAD (basic)",
        "Microsoft Word, Excel, PowerPoint (intermediate)",
      ],
    },

    projects: [
      {
        title: "Personal Landing Website",
        description:
          "A responsive, single-page personal introduction website built with HTML/CSS. Includes personal info, links, and project sections. SEO-friendly structure and a clean user experience.",
        stack: ["HTML", "CSS"],
        live: "",
        repo: "",
      },
      {
        title: "This Portfolio (Next.js)",
        description:
          "A fast, mobile-friendly portfolio that brings my CV, links, and projects into a single page with a clean and readable content structure.",
        stack: ["Next.js", "TypeScript", "Tailwind"],
        live: links.portfolio,
        repo: links.github,
      },
    ],

    education: [
      {
        school: "Anadolu University",
        program: "Computer Programming",
        degree: "Associate Degree",
        status: "Ongoing",
      },
      {
        school: "Selçuk University",
        program: "English Language and Literature",
        degree: "Bachelor’s Degree",
        status: "Discontinued",
      },
    ],

    languageText:
      "English: B2–C1 (Able to understand technical documents, handle basic written communication, and follow everyday conversations.)",

    contactText:
      "Open to junior roles, internships, and project-based work. Feel free to reach out via email or LinkedIn.",

    toggleLabel: "TR",
  },
} as const;

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-200">
      {children}
    </span>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="h-px w-6 bg-zinc-700" />
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>
          ) : null}
        </div>
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/5 transition group-hover:scale-[1.03]" />
      </div>
      <div className="mt-4 text-zinc-300">{children}</div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-sm font-medium text-zinc-200">{children}</p>
  );
}

export default function Page() {
  const [lang, setLang] = React.useState<Lang>("tr");
  const c = content[lang];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-zinc-800/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* HERO */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-zinc-400" />
              {c.badge}
            </div>

            <button
              type="button"
              onClick={() => setLang((p) => (p === "tr" ? "en" : "tr"))}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
            >
              {c.toggleLabel}
            </button>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {c.name}
          </h1>

          <p className="max-w-3xl text-sm text-zinc-300">{c.titleLine}</p>

          <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
            {c.heroDesc}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <a
              href={links.cv}
              download="Halit-Erdogan-Duman-CV.pdf"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90"
            >
              {c.ctaPrimary}
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
            >
              {c.ctaSecondary}
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
            >
              {c.ctaTertiary}
            </a>
          </div>

          {/* quick info */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Chip>{c.quick.location}</Chip>
            <Chip>{c.quick.openTo}</Chip>
            <Chip>{c.quick.phone}</Chip>
            <Chip>{c.quick.mail}</Chip>
          </div>
        </section>

        {/* GRID */}
        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {/* About */}
          <Card title={c.sections.about.title} subtitle={c.sections.about.subtitle}>
  <p className="leading-relaxed">{c.heroDesc}</p>
  <p className="mt-3 leading-relaxed">{c.aboutText}</p>
</Card>

          {/* Education */}
          <Card
            title={c.sections.education.title}
            subtitle={c.sections.education.subtitle}
          >
            <ul className="space-y-2">
              {c.education.map((e) => (
                <li key={e.school + e.program}>
                  <span className="font-medium text-zinc-100">{e.school}</span>{" "}
                  — {e.program} ({e.degree}, {e.status})
                </li>
              ))}
            </ul>
          </Card>

          {/* Experience */}
          <div className="md:col-span-2">
            <Card
              title={c.sections.experience.title}
              subtitle={c.sections.experience.subtitle}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {c.experience.map((e) => (
                  <div
                    key={e.role + e.company}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-zinc-100">{e.role}</p>
                        <p className="text-sm text-zinc-400">
                          {e.company} • {e.date}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Projects */}
          <div className="md:col-span-2">
            <Card
              title={c.sections.projects.title}
              subtitle={c.sections.projects.subtitle}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {c.projects.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 transition hover:border-zinc-700"
                  >
                    <p className="font-semibold text-zinc-100">{p.title}</p>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {p.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                      {p.live ? (
                        <a
                          className="underline text-zinc-200 transition hover:text-zinc-50"
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live
                        </a>
                      ) : null}
                      {p.repo ? (
                        <a
                          className="underline text-zinc-200 transition hover:text-zinc-50"
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Skills */}
          <Card title={c.sections.skills.title} subtitle={c.sections.skills.subtitle}>
            <div className="space-y-4">
              <div>
                <SectionTitle>Web & Programming</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {c.skills.web.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle>Digital Marketing</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {c.skills.marketing.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle>Design & Tools</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {c.skills.tools.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Language */}
          <Card
            title={c.sections.language.title}
            subtitle={c.sections.language.subtitle}
          >
            <p className="leading-relaxed">{c.languageText}</p>
          </Card>

          {/* Contact */}
          <div className="md:col-span-2">
            <Card title={c.sections.contact.title} subtitle={c.sections.contact.subtitle}>
              <p className="leading-relaxed">{c.contactText}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${links.mail}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
                >
                  Email
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
                >
                  LinkedIn
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
                >
                  GitHub
                </a>
              </div>
            </Card>
          </div>
        </section>

        <footer className="mt-16 text-sm text-zinc-500">
          © {new Date().getFullYear()} {c.name}
        </footer>
      </div>
    </main>
  );
}
