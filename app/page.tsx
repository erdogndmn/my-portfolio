"use client";
import React from "react";

const links = {
  mail: "erdogand159@gmail.com",
  phone: "+90 545 286 50 78",
  github: "https://github.com/erdogndmn",
  linkedin: "https://www.linkedin.com/in/halit-erdogan-duman/",
  cv: "/cv-2025.pdf",
};

const skills = [
  "HTML (Giriş Seviye)",
  "Python (Giriş Seviye)",
  "Web İçerik Düzenleme",
  "Google Ads (Temel)",
  "CorelDRAW",
  "Adobe Illustrator",
  "AutoCAD",
];

const experience = [
  {
    role: "Kurumsal Satış Temsilcisi",
    company: "Karakaş Medya",
    date: "11/2024 – 12/2024",
    bullets: [
      "Kurumsal müşteriler için ihtiyaç analizi",
      "Yeni müşteri kazanımı ve satış süreçlerinin yürütülmesi",
      "Satış sonrası müşteri ilişkileri ve koordinasyon",
      "Pazar araştırması ve çözüm sunma",
    ],
  },
  {
    role: "Tasarım ve Üretim Elemanı",
    company: "Multi Reklam",
    date: "08/2025 – 10/2025",
    bullets: [
      "Firma web sitelerinde içerik ve görsel düzenlemeleri",
      "Google Ads çalışmaları ile dijital görünürlüğün artırılmasına destek",
      "CorelDRAW, Adobe Illustrator ve AutoCAD ile tasarım uygulamaları",
      "Dijital reklam ve üretim süreçlerinde teknik destek",
    ],
  },
];

const projects = [
  {
    title: "Kişisel Tanıtım Web Sitesi",
    description:
      "HTML kullanarak kişisel tanıtım amaçlı tek sayfalık (statik) web sitesi. Öğrenme ve portföy amaçlı geliştirildi.",
    stack: ["HTML", "CSS"],
    live: "",
    repo: "",
  },
  {
    title: "Bu Portfolyo (Next.js)",
    description:
      "CV, bağlantılar ve projelerimi tek sayfada topladığım portfolyo. Basit, hızlı, mobil uyumlu.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "",
    repo: "",
  },
];

type Lang = "tr" | "en";

const t = {
  tr: {
    readyBadge: "Görüşmeye hazır • Junior Web / Yazılım Adayı",
    heroDesc:
      "Bilgisayar Programcılığı öğrencisi. HTML ve Python giriş seviyesinde. Dijital reklam ajansı deneyimiyle içerik, görünürlük ve kullanıcı odaklı bakış açısını birleştiriyorum.",
    cvBtn: "CV’yi İndir (PDF)",
    location: "📍 İstanbul / Kartal",

    aboutTitle: "Profesyonel Profil",
    aboutSubtitle: "Kısa özet",
    aboutText:
      "Multi Reklam bünyesinde web sitesi içerik ve görsel düzenlemeleri, Google Ads çalışmaları ve üretim süreçlerinde teknik destek sağladım. Kariyerimi web ve yazılım alanında, kullanıcı ve ticari ihtiyaçları birlikte anlayan bir bakış açısıyla geliştirmeyi hedefliyorum.",

    eduTitle: "Eğitim",
    eduSubtitle: "Akademik geçmiş",

    expTitle: "İş Deneyimi",
    expSubtitle: "Rol ve sorumluluklar",

    projTitle: "Projeler",
    projSubtitle: "Mini proje + portfolyo",

    skillsTitle: "Teknik Beceriler",
    skillsSubtitle: "Araçlar & yetkinlikler",

    langTitle: "Yabancı Dil",
    langSubtitle: "İletişim & okuma",
    langText:
      "İngilizce — teknik dokümantasyon ve yazılım içeriklerini okuyabilme.",

    toggleLabel: "EN",
  },
  en: {
    readyBadge: "Available for interviews • Junior Web / Software Candidate",
    heroDesc:
      "Computer Programming student. Beginner level in HTML and Python. I combine digital agency experience with a user-focused mindset and an eye for visibility and content quality.",
    cvBtn: "Download CV (PDF)",
    location: "📍 Istanbul / Kartal",

    aboutTitle: "Professional Summary",
    aboutSubtitle: "Short overview",
    aboutText:
      "At Multi Reklam, I supported website content & visual edits, Google Ads work, and provided technical support in production processes. I aim to grow my career in web/software with a perspective that understands both user needs and business goals.",

    eduTitle: "Education",
    eduSubtitle: "Academic background",

    expTitle: "Experience",
    expSubtitle: "Roles & responsibilities",

    projTitle: "Projects",
    projSubtitle: "Mini projects + portfolio",

    skillsTitle: "Technical Skills",
    skillsSubtitle: "Tools & capabilities",

    langTitle: "Language",
    langSubtitle: "Communication & reading",
    langText:
      "English — able to read technical documentation and software-related content.",

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
          <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="h-px w-6 bg-zinc-700" />
            {title}
          </h3>

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

export default function Page() {
  const [lang, setLang] = React.useState<Lang>("tr");
  const copy = t[lang];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* üstte hafif ışık efekti */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-zinc-800/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* HERO */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-zinc-400" />
              {copy.readyBadge}
            </div>

            <button
              type="button"
              onClick={() => setLang((p) => (p === "tr" ? "en" : "tr"))}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
            >
              {copy.toggleLabel}
            </button>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Halit Erdoğan Duman
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">
            {copy.heroDesc}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <a
              href={links.cv}
              download="Halit-Erdogan-Duman-CV.pdf"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90"
            >
              {copy.cvBtn}
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
            >
              GitHub
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900/60"
            >
              LinkedIn
            </a>
          </div>

          {/* quick info */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Chip>{copy.location}</Chip>
            <Chip>📞 {links.phone}</Chip>
            <Chip>✉️ {links.mail}</Chip>
          </div>
        </section>

        {/* GRID */}
        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <Card title={copy.aboutTitle} subtitle={copy.aboutSubtitle}>
            <p className="leading-relaxed">{copy.aboutText}</p>
          </Card>

          <Card title={copy.eduTitle} subtitle={copy.eduSubtitle}>
            <ul className="space-y-2">
              <li>
                <span className="font-medium text-zinc-100">
                  Anadolu Üniversitesi
                </span>{" "}
                — Bilgisayar Programcılığı (Önlisans, Devam Ediyor)
              </li>
              <li>
                <span className="font-medium text-zinc-100">
                  Selçuk Üniversitesi
                </span>{" "}
                — İngiliz Dili ve Edebiyatı (Lisans, Bırakıldı)
              </li>
            </ul>
          </Card>

          <div className="md:col-span-2">
            <Card title={copy.expTitle} subtitle={copy.expSubtitle}>
              <div className="grid gap-4 md:grid-cols-2">
                {experience.map((e) => (
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

          <div className="md:col-span-2">
            <Card title={copy.projTitle} subtitle={copy.projSubtitle}>
              <div className="grid gap-4 md:grid-cols-2">
                {projects.map((p) => (
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
                      {p.live && (
                        <a
                          className="underline text-zinc-200 transition hover:text-zinc-50"
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live
                        </a>
                      )}
                      {p.repo && (
                        <a
                          className="underline text-zinc-200 transition hover:text-zinc-50"
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card title={copy.skillsTitle} subtitle={copy.skillsSubtitle}>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </Card>

          <Card title={copy.langTitle} subtitle={copy.langSubtitle}>
            <p className="leading-relaxed">{copy.langText}</p>
          </Card>
        </section>

        <footer className="mt-16 text-sm text-zinc-500">
          © {new Date().getFullYear()} Halit Erdoğan Duman
        </footer>
      </div>
    </main>
  );
}
