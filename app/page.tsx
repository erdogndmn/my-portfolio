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
    badge: "Junior Web Developer",
    name: "Halit Erdoğan Duman",
    titleLine:
      "Frontend Development • JavaScript Learning • WordPress • Git/GitHub",
    heroDesc:
      "Frontend teknolojileri ve modern web geliştirme üzerine kendini geliştiren, çalışan sistemler üretmeyi ve teknik problemler çözmeyi seven junior developer adayıyım.",
    ctaPrimary: "CV’yi İndir",
    ctaSecondary: "LinkedIn",
    ctaTertiary: "GitHub",

    quick: {
      location: "İstanbul / Kartal",
      openTo: "Junior web rolleri, staj ve proje bazlı çalışmaya açık",
      phone: "+90 545 286 50 78",
      mail: "erdogand159@gmail.com",
    },

    sections: {
      about: { title: "Hakkımda", subtitle: "Kısa profil" },
      projects: { title: "Projeler", subtitle: "Portföy ve gelişim projeleri" },
      learning: { title: "Şu An Öğreniyorum", subtitle: "Aktif gelişim alanlarım" },
      skills: { title: "Teknik Yetenekler", subtitle: "Odaklandığım alanlar" },
      experience: { title: "İş Deneyimi", subtitle: "Deneyimlerim" },
      education: { title: "Eğitim", subtitle: "Akademik geçmiş" },
      language: { title: "Yabancı Dil", subtitle: "İngilizce seviyesi" },
      contact: { title: "İletişim", subtitle: "Bana ulaşın" },
    },

    aboutText:
      "WordPress kurulumu, web sitesi düzenleme, içerik yönetimi ve temel frontend geliştirme konularında deneyim sahibiyim. Teknik sistemleri anlamayı, problem çözmeyi ve çalışan yapılar geliştirmeyi seviyorum. Şu anda JavaScript, React ve modern web teknolojileri üzerine yoğunlaşarak teknik becerilerimi geliştiriyorum.",

    learning: [
      "JavaScript temellerini güçlendirme",
      "React component mantığı",
      "Next.js ile modern web geliştirme",
      "TypeScript temel kullanımı",
      "GitHub üzerinde düzenli proje paylaşımı",
    ],

    projects: [
      {
        title: "Personal Portfolio Website",
        description:
          "Kişisel bilgileri, bağlantıları, teknik yetenekleri ve projeleri tek sayfada sunan responsive portföy sitesi.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        live: links.portfolio,
        repo: "https://github.com/erdogndmn/my-portfolio",
      },
      {
        title: "WordPress Website Edits",
        description:
          "Web sitesi içerik düzenleme, görsel güncelleme ve temel sayfa yönetimi deneyimlerini kapsayan WordPress çalışmaları.",
        stack: ["WordPress", "SEO", "Content Management"],
        live: "",
        repo: "",
      },
      {
        title: "Learning Projects",
        description:
          "JavaScript, React ve frontend geliştirme üzerine geliştirmekte olduğum küçük pratik projeler ve denemeler.",
        stack: ["JavaScript", "React", "Frontend"],
        live: "",
        repo: links.github,
      },
    ],

    skills: {
      web: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React öğrenme süreci",
        "Next.js",
        "TypeScript temel bilgisi",
        "Responsive Design",
        "WordPress",
      ],
      technical: [
        "Git",
        "GitHub",
        "Teknik problem çözme",
        "Config / ini dosyası düzenleme",
        "Minecraft server yapılandırma",
        "Temel bilgisayar donanımı bilgisi",
      ],
      tools: [
        "Microsoft Excel",
        "Microsoft Word",
        "Microsoft PowerPoint",
        "CorelDRAW",
        "Adobe Illustrator",
        "AutoCAD temel bilgisi",
      ],
    },

    experience: [
      {
        role: "Satış Danışmanı",
        company: "Migros",
        date: "2026 – Devam Ediyor",
        bullets: [
          "Müşteri ilişkileri ve mağaza operasyon süreçlerinde görev alma",
          "Ürün yerleşimi, stok düzeni ve mağaza akışının yönetimi",
          "Kasiyer süreçleri ve ödeme sistemleri kullanımı",
          "Yoğun tempoda hızlı problem çözme ve operasyon desteği",
        ],
      },
      {
        role: "Mağaza Sorumlusu & Kasiyer",
        company: "Ziyafe Kayseri Mutfağı — Maltepe Park AVM",
        date: "12/2025 – 01/2026",
        bullets: [
          "POS, nakit ve dijital ödeme sistemlerinin kullanımı",
          "Günlük kasa işlemleri, satış verileri ve stok takibi",
          "Ekip koordinasyonu ve vardiya süreçlerine destek",
          "Yoğun müşteri trafiğinde operasyonel akışın sürdürülmesi",
        ],
      },
      {
        role: "Tasarım ve Üretim Elemanı",
        company: "Multi Reklam",
        date: "08/2025 – 10/2025",
        bullets: [
          "Web sitesi içerik ve görsel düzenlemeleri",
          "WordPress tabanlı içerik güncellemeleri",
          "Google Ads kampanyalarında operasyon desteği",
          "SEO uyumlu içerik düzenlemeleri",
          "CorelDRAW, Illustrator ve AutoCAD ile görsel çalışmalar",
        ],
      },
      {
        role: "Kurumsal Satış Temsilcisi",
        company: "Karakaş Medya",
        date: "11/2024 – 12/2024",
        bullets: [
          "Dijital ajans hizmetlerinin potansiyel müşterilere tanıtılması",
          "SEO, sosyal medya ve web hizmetleri hakkında müşteri bilgilendirmesi",
          "Randevu, teklif ve müşteri iletişim süreçlerinin takibi",
          "Kreatif hizmet projelerinde operasyonel destek",
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
        degree: "Lisans",
        status: "Bırakıldı",
      },
    ],

    languageText:
      "İngilizce: Teknik dokümanları ve eğitim içeriklerini takip edebilecek, günlük ve iş odaklı iletişim kurabilecek düzeyde.",

    contactText:
      "Junior web developer, frontend, WordPress ve teknik destek odaklı roller için iletişime açığım.",

    toggleLabel: "EN",
  },

  en: {
    nav: ["About", "Projects", "Skills", "Experience", "Contact"],
    badge: "Junior Web Developer",
    name: "Halit Erdoğan Duman",
    titleLine:
      "Frontend Development • JavaScript Learning • WordPress • Git/GitHub",
    heroDesc:
      "A junior developer candidate focused on frontend technologies and modern web development, interested in building working systems and solving technical problems.",
    ctaPrimary: "Download CV",
    ctaSecondary: "LinkedIn",
    ctaTertiary: "GitHub",

    quick: {
      location: "Istanbul / Kartal",
      openTo: "Open to junior web roles, internships and project-based work",
      phone: "+90 545 286 50 78",
      mail: "erdogand159@gmail.com",
    },

    sections: {
      about: { title: "About", subtitle: "Short profile" },
      projects: { title: "Projects", subtitle: "Portfolio and learning projects" },
      learning: { title: "Currently Learning", subtitle: "Active growth areas" },
      skills: { title: "Technical Skills", subtitle: "Main focus areas" },
      experience: { title: "Experience", subtitle: "Work background" },
      education: { title: "Education", subtitle: "Academic background" },
      language: { title: "Language", subtitle: "English level" },
      contact: { title: "Contact", subtitle: "Get in touch" },
    },

    aboutText:
      "I have experience with WordPress setup, website editing, content management and basic frontend development. I enjoy understanding technical systems, solving problems and building working structures. I am currently improving my JavaScript, React and modern web development skills.",

    learning: [
      "Strengthening JavaScript fundamentals",
      "React component logic",
      "Modern web development with Next.js",
      "Basic TypeScript usage",
      "Publishing projects regularly on GitHub",
    ],

    projects: [
      {
        title: "Personal Portfolio Website",
        description:
          "A responsive portfolio website that presents personal information, links, technical skills and projects on a single page.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        live: links.portfolio,
        repo: "https://github.com/erdogndmn/my-portfolio",
      },
      {
        title: "WordPress Website Edits",
        description:
          "WordPress experience including website content editing, visual updates and basic page management.",
        stack: ["WordPress", "SEO", "Content Management"],
        live: "",
        repo: "",
      },
      {
        title: "Learning Projects",
        description:
          "Small practice projects and experiments focused on JavaScript, React and frontend development.",
        stack: ["JavaScript", "React", "Frontend"],
        live: "",
        repo: links.github,
      },
    ],

    skills: {
      web: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Learning React",
        "Next.js",
        "Basic TypeScript",
        "Responsive Design",
        "WordPress",
      ],
      technical: [
        "Git",
        "GitHub",
        "Technical problem solving",
        "Config / ini file editing",
        "Minecraft server configuration",
        "Basic computer hardware knowledge",
      ],
      tools: [
        "Microsoft Excel",
        "Microsoft Word",
        "Microsoft PowerPoint",
        "CorelDRAW",
        "Adobe Illustrator",
        "Basic AutoCAD",
      ],
    },

    experience: [
      {
        role: "Sales Assistant",
        company: "Migros",
        date: "2026 – Present",
        bullets: [
          "Supporting customer relations and store operations",
          "Managing product placement, stock order and store flow",
          "Using cashier systems and payment processes",
          "Providing fast problem-solving support in a busy work environment",
        ],
      },
      {
        role: "Store Supervisor & Cashier",
        company: "Ziyafe Kayseri Mutfağı — Maltepe Park AVM",
        date: "12/2025 – 01/2026",
        bullets: [
          "Using POS, cash and digital payment systems",
          "Tracking daily cash operations, sales data and stock",
          "Supporting team coordination and shift processes",
          "Maintaining operational flow during peak customer traffic",
        ],
      },
      {
        role: "Design & Production Assistant",
        company: "Multi Reklam",
        date: "08/2025 – 10/2025",
        bullets: [
          "Website content and visual updates",
          "WordPress-based content edits",
          "Operational support in Google Ads campaigns",
          "SEO-friendly content editing",
          "Visual works with CorelDRAW, Illustrator and AutoCAD",
        ],
      },
      {
        role: "Corporate Sales Representative",
        company: "Karakaş Medya",
        date: "11/2024 – 12/2024",
        bullets: [
          "Presenting digital agency services to potential clients",
          "Informing clients about SEO, social media and web services",
          "Following appointment, offer and customer communication processes",
          "Operational support in creative service projects",
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
        degree: "Bachelor’s Degree",
        status: "Discontinued",
      },
    ],

    languageText:
      "English: Able to follow technical documents and educational content, and communicate in daily and work-related contexts.",

    contactText:
      "Open to junior web developer, frontend, WordPress and technical support focused roles.",

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
        {subtitle ? <p className="mt-1 text-sm text-zinc-400">{subtitle}</p> : null}
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
          <Card id="about" title={c.sections.about.title} subtitle={c.sections.about.subtitle}>
            <p className="leading-relaxed">{c.aboutText}</p>
          </Card>

          <Card title={c.sections.education.title} subtitle={c.sections.education.subtitle}>
            <ul className="space-y-2">
              {c.education.map((e) => (
                <li key={e.school + e.program}>
                  <span className="font-medium text-zinc-100">{e.school}</span>{" "}
                  — {e.program} ({e.degree}, {e.status})
                </li>
              ))}
            </ul>
          </Card>

          <div className="md:col-span-2">
            <Card id="projects" title={c.sections.projects.title} subtitle={c.sections.projects.subtitle}>
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

          <Card title={c.sections.learning.title} subtitle={c.sections.learning.subtitle}>
            <ul className="space-y-2">
              {c.learning.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card id="skills" title={c.sections.skills.title} subtitle={c.sections.skills.subtitle}>
            <div className="space-y-4">
              <div>
                <SectionTitle>Web & Frontend</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {c.skills.web.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle>Technical</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {c.skills.technical.map((s) => (
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

          <Card title={c.sections.language.title} subtitle={c.sections.language.subtitle}>
            <p className="leading-relaxed">{c.languageText}</p>
          </Card>

          <div className="md:col-span-2">
            <Card id="experience" title={c.sections.experience.title} subtitle={c.sections.experience.subtitle}>
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
            <Card id="contact" title={c.sections.contact.title} subtitle={c.sections.contact.subtitle}>
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
          © {new Date().getFullYear()} {c.name} — Built with Next.js & Tailwind CSS
        </footer>
      </div>
    </main>
  );
}