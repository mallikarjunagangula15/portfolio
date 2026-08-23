import { useState } from "react";
import portrait from "./assets/mallikarjuna.png";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Git & GitHub",
  "Responsive UI",
  "REST APIs",
  "Bootstrap",
  "Node.js",
  "MongoDB",
];
const certifications = [
  "Front-End Development Internship[Cogifyz Technologies]",
  "Python Full Stack Development",
  "ICRCSET 2025",
  "Digital Productivity",
];
const projects = [
  {
    title: "Blockchain AI Data Security",
    kind: "Full-stack application",
    description:
      "A secure data-storage system combining encrypted authentication with a blockchain-inspired audit trail.",
    stack: ["Python", "Flask", "SQLite"],
    mark: "01",
  },
  {
    title: "Mourya Pizza",
    kind: "Responsive web experience",
    description:
      "A restaurant website designed around clear menus, responsive layouts, and easy discovery.",
    stack: ["HTML", "CSS", "Responsive UI"],
    mark: "02",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certificates",
    "Education",
    "Contact",
  ];
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#075985] text-slate-100 selection:bg-sky-200 selection:text-[#082f49]">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(circle_at_12%_8%,rgba(125,211,252,.3),transparent_24%),radial-gradient(circle_at_88%_24%,rgba(14,165,233,.22),transparent_22%),linear-gradient(135deg,#075985_0%,#0c4a6e_48%,#082f49_100%)]" />
      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-sky-200/40 bg-sky-300 text-xs font-black text-[#082f49]">
            MG
          </span>
          <span className="text-base font-bold tracking-tight text-white">
            Mallikarjuna<span className="text-sky-300">.Gangula</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition hover:text-teal-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-teal-300/70 px-4 py-2 text-sm font-semibold text-teal-200 transition hover:bg-teal-300 hover:text-[#082126] md:block"
        >
          Let&apos;s talk
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/15 p-2 lg:hidden"
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="my-1 block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>
      </header>
      {menuOpen && (
        <nav className="relative z-20 mx-6 rounded-2xl border border-white/10 bg-[#0c2a2d] p-4 lg:hidden">
          {links.map((link) => (
            <a
              onClick={() => setMenuOpen(false)}
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5"
            >
              {link}
            </a>
          ))}
        </nav>
      )}

      <section
        id="home"
        className="relative z-10 mx-auto grid max-w-6xl items-start gap-10 px-6 pb-20 pt-10 sm:grid-cols-[minmax(0,1fr)_16rem] md:grid-cols-[minmax(0,1fr)_18rem] md:gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-8 lg:pb-28 lg:pt-14"
      >
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-sky-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-300" />{" "}
            Frontend Developer at Staticval
          </p>
          <h1 className="max-w-2xl text-3xl font-black leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl">
            Frontend developer creating{" "}
            <span className="text-sky-200">clear, useful</span> digital
            experiences.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-100">
            Hi, I&apos;m{" "}
            <span className="font-bold text-sky-200">Mallikarjuna.Gangula</span>
            . I build responsive, accessible interfaces that give products a
            polished and purposeful presence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-bold text-[#082f49] transition hover:-translate-y-0.5 hover:bg-sky-200"
            >
              View my work <Arrow />
            </a>
            <a
              href="/Mallikarjuna_Gangula_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-200 hover:text-sky-100"
            >
              Download resume <Arrow />
            </a>
          </div>
          <div className="mt-11 flex gap-8 border-t border-white/20 pt-6">
            <div>
              <p className="text-xl font-bold text-white">02+</p>
              <p className="mt-1 text-xs text-sky-100/70">Projects built</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white">12</p>
              <p className="mt-1 text-xs text-sky-100/70">Core technologies</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white">03</p>
              <p className="mt-1 text-xs text-sky-100/70">Certifications</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[20rem] self-start">
          <div className="absolute -inset-4 rounded-[2rem] bg-sky-300/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/25 bg-sky-950/30 p-2 shadow-2xl shadow-sky-950/30">
            <img
              src={portrait}
              alt="Mallikarjuna Gangula"
              className="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-top"
            />
          </div>
          <div className="mt-4 border-l-2 border-sky-300 pl-3">
            <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-sky-200">
              Currently
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Frontend Developer - Staticval
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 border-y border-white/10 bg-white/[.035]"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-300">
            01 / About me
          </p>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Thoughtful interfaces, built for people.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              I am a frontend developer focused on turning ideas into smooth,
              responsive experiences. I enjoy the details, from clear content
              hierarchy to the small interactions that make an interface feel
              effortless.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              My foundation is React, JavaScript, HTML, CSS and Bootstrap, and I
              am continuously expanding into full-stack development.
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8"
      >
        <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-300">
          02 / Toolkit
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          Tools I work with.
        </h2>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="flex min-h-24 flex-col justify-between rounded-2xl border border-white/10 bg-white/[.045] p-5 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-teal-300/10"
            >
              <span className="text-xs font-bold text-teal-300/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-semibold text-white">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="relative z-10 border-y border-white/10 bg-[#062025]"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-300">
            03 / Experience
          </p>
          <div className="mt-9 space-y-5">
            <article className="grid gap-5 rounded-3xl border border-white/10 bg-white/[.04] p-7 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-teal-200">Staticval - Present</p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  Frontend Developer
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Developing modern, responsive frontend interfaces with a focus
                  on usability, visual consistency, and dependable
                  implementation.
                </p>
              </div>
              <span className="h-fit rounded-full bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-200">
                Current role
              </span>
            </article>
            <article className="grid gap-5 rounded-3xl border border-white/10 bg-white/[.04] p-7 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm text-teal-200">
                  Cognifyz Technologies - Nov-Dec 2025
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  Frontend Development Intern
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Built responsive web interfaces with HTML, CSS, JavaScript and
                  React, including reusable UI components.
                </p>
              </div>
              <span className="h-fit rounded-full bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-200">
                Internship
              </span>
            </article>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8"
      >
        <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-300">
          04 / Selected work
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
          A few things I&apos;ve made.
        </h2>
        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[.045] p-7 transition hover:border-teal-300/40"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-300 text-xs font-black text-[#082126]">
                  {project.mark}
                </span>
                <span className="text-sm text-slate-400">{project.kind}</span>
              </div>
              <h3 className="mt-12 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="certificates"
        className="relative z-10 border-y border-white/10 bg-white/[.035]"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-300">
            05 / Certifications
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Continuous learning.
          </h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {certifications.map((certificate, index) => (
              <article
                key={certificate}
                className="rounded-2xl border border-white/10 bg-[#0b2b2e] p-6"
              >
                <p className="text-sm font-bold text-teal-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-lg font-bold text-white">
                  {certificate}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Certificate of completion
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="education"
        className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-8"
      >
        <p className="text-sm font-bold uppercase tracking-[.2em] text-teal-300">
          06 / Education & personal details
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[.045] p-7">
            <h2 className="text-2xl font-bold text-white">Education</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Education details will be added once verified, keeping this
              portfolio accurate and professional.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[.045] p-7">
            <h2 className="text-2xl font-bold text-white">
              Professional profile
            </h2>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              <a
                href="http://www.linkedin.com/in/mallikarjunagangula"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200"
              >
                LinkedIn <Arrow />
              </a>
              <a
                href="https://github.com/arjun15-prop"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200"
              >
                GitHub <Arrow />
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Frontend Developer at Staticval
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-teal-200/20 bg-teal-300 px-7 py-10 text-[#082126] sm:p-11">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-[#0a5b58]">
            07 / Contact
          </p>
          <div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-xl text-3xl font-black tracking-[-.045em] sm:text-4xl">
                Let&apos;s build something people enjoy using.
              </h2>
              <p className="mt-4 max-w-lg text-[#0d4b4d]">
                Have an idea, project, or opportunity to discuss? Send me an
                email and let&apos;s talk.
              </p>
              <a
                href="mailto:mallikarjunagangula48@gmail.com"
                className="mt-3 inline-block text-sm font-semibold text-[#0a5b58] underline decoration-[#0a5b58]/40 underline-offset-4 hover:text-[#082126]"
              >
                mallikarjunagangula48@gmail.com
              </a>
            </div>
            <a
              href="mailto:mallikarjunagangula48@gmail.com?subject=Portfolio%20enquiry%20for%20Mallikarjuna"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#082126] px-6 py-3.5 font-bold text-white transition hover:bg-[#10383b]"
            >
              Send an email <Arrow />
            </a>
          </div>
        </div>
      </section>
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        Copyright 2026 Mallikarjuna Gangula. Crafted with React and Tailwind
        CSS.
      </footer>
    </main>
  );
}
