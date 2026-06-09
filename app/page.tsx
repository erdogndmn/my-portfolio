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
    nav: ["Hakkımda", "Projeler", "Yetenekler", "Deneyim", "İletişim"],
    badge: "Teknoloji ve Dijital Süreçler",
    name: "Halit Erdoğan Duman",
    titleLine:
      "Digital Operations • WordPress • Customer Relations • Web Technologies",
    heroDesc:
      "Satış, müşteri ilişkileri, mağaza operasyonları, dijital içerik yönetimi ve temel web teknolojileri alanlarında deneyim sahibiyim. Yeni sistemleri hızlı öğrenen, çözüm odaklı ve teknolojiye yatkın bir aday olarak operasyonel ve teknik süreçlere katkı sağlamayı hedefliyorum.",
    ctaPrimary: "CV’yi İndir",
    ctaSecondary: "LinkedIn",
    ctaTertiary: "GitHub",

    quick: {
      location: "İstanbul / Kartal",
      openTo: "Operasyon, dijital süreçler, WordPress ve teknik destek rollerine açık",
      phone: links.phone,
      mail: links.mail,
    },

    sections: {
      about: { title: "Hakkımda", subtitle: "Profesyonel profil" },
      highlights: { title: "Öne Çıkanlar", subtitle: "Güçlü yönlerim" },
      projects: { title: "Projeler", subtitle: "Dijital ve teknik çalışmalar" },
      skills: { title: "Yetenekler", subtitle: "Teknik ve profesyonel beceriler" },
      experience: { title: "İş Deneyimi", subtitle: "Çalışma geçmişim" },
      education: { title: "Eğitim", subtitle: "Akademik geçmiş" },
      language: { title: "Yabancı Dil", subtitle: "İngilizce seviyesi" },
      contact: { title: "İletişim", subtitle: "Bana ulaşın" },
    },

    aboutText:
      "Teknolojiye yatkın, hızlı öğrenen ve farklı sektörlerde çalışma deneyimi edinmiş bir adayım. Satış, müşteri ilişkileri, mağaza operasyonları, dijital içerik yönetimi ve temel web teknolojileri alanlarında deneyim sahibiyim. Yoğun çalışma ortamlarında sorumluluk alabilen, ekip çalışmasına uyumlu ve çözüm odaklı bir çalışma anlayışına sahibim.",

    highlights: [
      "Satış, müşteri ilişkileri ve mağaza operasyonları deneyimi",
      "WordPress, içerik yönetimi ve temel SEO bilgisi",
      "HTML, CSS, JavaScript, Git ve GitHub kullanımı",
      "CorelDRAW, Adobe Illustrator ve temel AutoCAD bilgisi",
      "Yoğun tempoda problem çözme ve ekip koordinasyonu",
      "Yeni sistemlere ve teknik süreçlere hızlı adaptasyon",
    ],

    projects: [
      {
        title: "Personal Portfolio Website",
        description:
          "Kişisel bilgileri, bağlantıları, yetenekleri ve projeleri tek sayfada sunan responsive portföy web sitesi.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        live: links.portfolio,
        repo: "https://github.com/erdogndmn/my-portfolio",
      },
      {
        title: "Digital Content & Website Management",
        description:
          "WordPress tabanlı web sitelerinde içerik güncelleme, görsel düzenleme, sayfa yönetimi ve SEO uyumlu içerik düzenleme çalışmaları.",
        stack: ["WordPress", "SEO", "Content Management"],
        live: "",
        repo: "",
      },
      {
        title: "Minecraft Server Config Generator",
        description:
          "Minecraft sunucuları için özelleştirilebilir server.properties dosyası oluşturan interaktif web aracı.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        live: "https://minecraft-server-config-generator.vercel.app",
        repo: "https://github.com/erdogndmn/minecraft-server-config-generator",
      },
    ],

    skills: {
      professional: [
        "Müşteri İlişkileri",
        "Satış Operasyonları",
        "Stok ve Ürün Takibi",
        "Problem Çözme",
        "Takım Çalışması",
        "Operasyonel Süreç Takibi",
        "Hızlı Adaptasyon",
      ],
      web: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Responsive Design",
        "WordPress",
        "Temel SEO",
      ],
      tools: [
        "Microsoft Excel",
        "Microsoft Word",
        "Microsoft PowerPoint",
        "CorelDRAW",
        "Adobe Illustrator",
        "AutoCAD Temel",
        "Git",
        "GitHub",
      ],
    },

    experience: [
      {
        role: "Satış Danışmanı",
        company: "Migros",
        date: "01/2026 – 05/2026",
        bullets: [
          "Müşteri ilişkileri ve satış süreçlerinde aktif görev alma",
          "Ürün yerleşimi ve stok düzeninin sağlanması",
          "Kasiyer işlemleri ve ödeme sistemlerinin kullanılması",
          "Mağaza operasyonlarının günlük işleyişine destek verilmesi",
          "Müşteri memnuniyeti odaklı hizmet sunulması",
        ],
      },
      {
        role: "Mağaza Sorumlusu & Kasiyer",
        company: "Ziyafe Kayseri Mutfağı",
        date: "12/2025 – 01/2026",
        bullets: [
          "Günlük mağaza operasyonlarının yönetimi",
          "POS ve ödeme sistemlerinin kullanımı",
          "Stok kontrolü ve ürün takibi",
          "Müşteri memnuniyetinin sağlanması",
          "Ekip koordinasyonuna destek verilmesi",
        ],
      },
      {
        role: "Tasarım ve Üretim Elemanı",
        company: "Multi Reklam",
        date: "08/2025 – 10/2025",
        bullets: [
          "Web sitesi içerik ve görsel düzenlemeleri",
          "WordPress tabanlı içerik güncellemeleri",
          "Google Ads kampanyalarına operasyonel destek",
          "SEO uyumlu içerik düzenlemeleri",
          "CorelDRAW, Illustrator ve AutoCAD ile tasarım çalışmaları",
        ],
      },
      {
        role: "Kurumsal Satış Temsilcisi",
        company: "Karakaş Medya",
        date: "11/2024 – 12/2024",
        bullets: [
          "Dijital hizmetlerin müşterilere tanıtılması",
          "SEO, sosyal medya ve web hizmetleri konusunda müşteri bilgilendirmesi",
          "Teklif ve müşteri takip süreçlerine destek verilmesi",
          "Müşteri memnuniyeti ve süreç yönetimine katkı sağlanması",
        ],
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
        degree: "Lisans Eğitimi",
        status: "Tamamlanmadı",
      },
    ],

    languageText:
      "İngilizce: Teknik doküman okuyabilme, eğitim içeriklerini takip edebilme ve iş ortamında yazılı iletişim kurabilme.",

    contactText:
      "Operasyon, müşteri ilişkileri, dijital süreçler, WordPress, teknik destek ve web teknolojileri odaklı roller için iletişime açığım.",

    toggleLabel: "EN",
  },

  en: {
    nav: ["About", "Projects", "Skills", "Experience", "Contact"],
    badge: "Technology & Digital Operations",
    name: "Halit Erdoğan Duman",
    titleLine:
      "Digital Operations • WordPress • Customer Relations • Web Technologies",
    heroDesc:
      "I have experience in sales, customer relations, store operations, digital content management and basic web technologies. As a fast-learning, solution-oriented and technology-driven candidate, I aim to contribute to operational and technical processes.",
    ctaPrimary: "Download CV",
    ctaSecondary: "LinkedIn",
    ctaTertiary: "GitHub",

    quick: {
      location: "Istanbul / Kartal",
      openTo:
        "Open to operations, digital processes, WordPress and technical support roles",
      phone: links.phone,
      mail: links.mail,
    },

    sections: {
      about: { title: "About", subtitle: "Professional profile" },
      highlights: { title: "Highlights", subtitle: "Key strengths" },
      projects: { title: "Projects", subtitle: "Digital and technical works" },
      skills: { title: "Skills", subtitle: "Technical and professional skills" },
      experience: { title: "Experience", subtitle: "Work background" },
      education: { title: "Education", subtitle: "Academic background" },
      language: { title: "Language", subtitle: "English level" },
      contact: { title: "Contact", subtitle: "Get in touch" },
    },

    aboutText:
      "I am a technology-oriented and fast-learning candidate with work experience across different sectors. I have experience in sales, customer relations, store operations, digital content management and basic web technologies. I can take responsibility in busy work environments, adapt quickly to new systems and contribute with a solution-focused approach.",

    highlights: [
      "Experience in sales, customer relations and store operations",
      "WordPress, content management and basic SEO knowledge",
      "HTML, CSS, JavaScript, Git and GitHub usage",
      "CorelDRAW, Adobe Illustrator and basic AutoCAD knowledge",
      "Problem solving and team coordination in busy environments",
      "Fast adaptation to new systems and technical processes",
    ],

    projects: [
      {
        title: "Personal Portfolio Website",
        description:
          "A responsive portfolio website that presents personal information, links, skills and projects on a single page.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        live: links.portfolio,
        repo: "https://github.com/erdogndmn/my-portfolio",
      },
      {
        title: "Digital Content & Website Management",
        description:
          "Content updates, visual edits, page management and SEO-friendly content editing on WordPress-based websites.",
        stack: ["WordPress", "SEO", "Content Management"],
        live: "",
        repo: "",
      },
      {
        title: "Minecraft Server Config Generator",
        description:
          "An interactive web tool that generates customizable server.properties files for Minecraft servers.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        live: "https://minecraft-server-config-generator.vercel.app",
        repo: "https://github.com/erdogndmn/minecraft-server-config-generator",
      },
    ],

    skills: {
      professional: [
        "Customer Relations",
        "Sales Operations",
        "Stock & Product Tracking",
        "Problem Solving",
        "Teamwork",
        "Operational Process Tracking",
        "Fast Adaptation",
      ],
      web: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Responsive Design",
        "WordPress",
        "Basic SEO",
      ],
      tools: [
        "Microsoft Excel",
        "Microsoft Word",
        "Microsoft PowerPoint",
        "CorelDRAW",
        "Adobe Illustrator",
        "Basic AutoCAD",
        "Git",
        "GitHub",
      ],
    },

    experience: [
      {
        role: "Sales Assistant",
        company: "Migros",
        date: "01/2026 – 05/2026",
        bullets: [
          "Actively supported customer relations and sales processes",
          "Handled product placement and stock organization",
          "Used cashier systems and payment processes",
          "Supported daily store operations",
          "Provided customer satisfaction-oriented service",
        ],
      },
      {
        role: "Store Supervisor & Cashier",
        company: "Ziyafe Kayseri Mutfağı",
        date: "12/2025 – 01/2026",
        bullets: [
          "Managed daily store operations",
          "Used POS and payment systems",
          "Tracked stock and products",
          "Ensured customer satisfaction",
          "Supported team coordination",
        ],
      },
      {
        role: "Design & Production Assistant",
        company: "Multi Reklam",
        date: "08/2025 – 10/2025",
        bullets: [
          "Updated website content and visuals",
          "Managed WordPress-based content updates",
          "Provided operational support for Google Ads campaigns",
          "Edited SEO-friendly content",
          "Created visual works using CorelDRAW, Illustrator and AutoCAD",
        ],
      },
      {
        role: "Corporate Sales Representative",
        company: "Karakaş Medya",
        date: "11/2024 – 12/2024",
        bullets: [
          "Presented digital services to customers",
          "Informed customers about SEO, social media and web services",
          "Supported offer and customer follow-up processes",
          "Contributed to customer satisfaction and process management",
        ],
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
        degree: "Bachelor’s Education",
        status: "Not Completed",
      },
    ],

    languageText:
      "English: Able to read technical documents, follow educational content and communicate in writing in business contexts.",

    contactText:
      "Open to roles focused on operations, customer relations, digital processes, WordPress, technical support and web technologies.",

    toggleLabel: "TR",
  },
} as const;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-200">
      {children}
    </span>
  );
}

function Card({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/50"
    >
      <div>
        <h2 className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span className="h-px w-6 bg-zinc-700" />
          {title}
        </h2>

        {subtitle ? (
          <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>
        ) : null}
      </div>

      <div className="mt-4 text-zinc-300">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 text-sm font-medium text-zinc-200">{children}</p>;
}

export default function Page() {
  const [lang, setLang] = React.useState<Lang>("tr");
  const c = content[lang];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[420px] w-[420px] rounded-full bg-violet-900/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection("top")}
            className="text-sm font-semibold tracking-tight text-zinc-100"
          >
            HED
          </button>

          <div className="hidden items-center gap-4 text-sm text-zinc-400 md:flex">
            {[
              ["about", c.nav[0]],
              ["projects", c.nav[1]],
              ["skills", c.nav[2]],
              ["experience", c.nav[3]],
              ["contact", c.nav[4]],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="transition hover:text-zinc-100"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setLang((p) => (p === "tr" ? "en" : "tr"))}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
          >
            {c.toggleLabel}
          </button>
        </nav>
      </header>

      <div id="top" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {c.badge}
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            {c.name}
          </h1>

          <p className="max-w-3xl text-sm text-zinc-300 sm:text-base">
            {c.titleLine}
          </p>

          <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
            {c.heroDesc}
          </p>

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

          <div className="flex flex-wrap gap-2 pt-2">
            <Chip>{c.quick.location}</Chip>
            <Chip>{c.quick.openTo}</Chip>
            <Chip>{c.quick.phone}</Chip>
            <Chip>{c.quick.mail}</Chip>
          </div>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <Card
            id="about"
            title={c.sections.about.title}
            subtitle={c.sections.about.subtitle}
          >
            <p className="leading-relaxed">{c.aboutText}</p>
          </Card>

          <Card
            title={c.sections.highlights.title}
            subtitle={c.sections.highlights.subtitle}
          >
            <ul className="space-y-2">
              {c.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="md:col-span-2">
            <Card
              id="projects"
              title={c.sections.projects.title}
              subtitle={c.sections.projects.subtitle}
            >
              <div className="grid gap-4 md:grid-cols-3">
                {c.projects.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 transition hover:-translate-y-0.5 hover:border-zinc-700"
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
                          className="text-zinc-200 underline transition hover:text-zinc-50"
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live
                        </a>
                      ) : null}

                      {p.repo ? (
                        <a
                          className="text-zinc-200 underline transition hover:text-zinc-50"
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

          <Card
            id="skills"
            title={c.sections.skills.title}
            subtitle={c.sections.skills.subtitle}
          >
            <div className="space-y-4">
              <div>
                <SectionTitle>
                  {lang === "tr" ? "Profesyonel" : "Professional"}
                </SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {c.skills.professional.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle>Web & Digital</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {c.skills.web.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle>Tools</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {c.skills.tools.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </Card>

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

          <Card
            title={c.sections.language.title}
            subtitle={c.sections.language.subtitle}
          >
            <p className="leading-relaxed">{c.languageText}</p>
          </Card>

          <div className="md:col-span-2">
            <Card
              id="experience"
              title={c.sections.experience.title}
              subtitle={c.sections.experience.subtitle}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {c.experience.map((e) => (
                  <div
                    key={e.role + e.company}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5"
                  >
                    <p className="font-semibold text-zinc-100">{e.role}</p>
                    <p className="text-sm text-zinc-400">
                      {e.company} • {e.date}
                    </p>

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

          <div className="md:col-span-2">
            <Card
              id="contact"
              title={c.sections.contact.title}
              subtitle={c.sections.contact.subtitle}
            >
              <p className="leading-relaxed">{c.contactText}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${links.mail}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
                >
                  Email
                </a>

                <a
                  href={`tel:${links.phone.replaceAll(" ", "")}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
                >
                  Phone
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
          © {new Date().getFullYear()} {c.name} — Designed & Developed by Halit
          Erdoğan Duman
        </footer>
      </div>
    </main>
  );
}