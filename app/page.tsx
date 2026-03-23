import Image from "next/image";
import { IntroLoader } from "@/components/IntroLoader";

const disciplines = [
  "Trompettiste",
  "Auteur",
  "Compositeur",
  "Chanteur",
  "Arrangeur",
  "Bassiste",
  "Percussionniste",
];

const stats = [
  { value: "7", label: "rôles artistiques" },
  { value: "12", label: "pays parcourus en tournée" },
  { value: "8", label: "festivals et grands rendez-vous" },
  { value: "20+", label: "artistes, groupes et scènes majeures" },
];

const foundations = [
  {
    title: "Origine musicale",
    description:
      "Les premiers pas se construisent dans la fanfare de l'Armée du Salut à Brazzaville, avec une exigence de précision, d'ensemble et de souffle.",
  },
  {
    title: "Formation académique",
    description:
      "Le parcours se prolonge à l'École nationale des beaux-arts de Brazzaville, avec une sortie comme enseignant de musique, en solfège et trompette.",
  },
  {
    title: "Déclic jazz",
    description:
      "La rencontre avec Mike Samba, Armel Malonga et Faustin Nsanda ouvre une direction artistique plus libre, tournée vers le jazz et la scène.",
  },
];

const formations = [
  {
    title: "Stage de trompette",
    description:
      "Armée du Salut, sous la direction du chef de la fanfare territoriale d'Afrique du Sud.",
    meta: "Prince Lengossa",
  },
  {
    title: "Perfectionnement brass band",
    description:
      "Stage dirigé par le chef de la fanfare de Manchester, dans une logique d'orchestre et de discipline d'ensemble.",
    meta: "Brean Johnson",
  },
  {
    title: "Jazz ambassadors",
    description:
      "Stage de jazz organisé par l'ambassade des États-Unis, orienté performance et improvisation.",
    meta: "Jazz Ambassadors (USA)",
  },
  {
    title: "Centre culturel français",
    description:
      "Stage de jazz à Brazzaville, mené autour des codes de la scène et de l'écriture musicale.",
    meta: "Maestro Rido Bayonne",
  },
  {
    title: "Ateliers Big Band",
    description:
      "Participation à plusieurs ateliers de jazz en RDC avec une forte couleur belge, entre saxophone, guitare et chant.",
    meta: "Pierre Vaiana, Fabien Degryse, Régine Logen",
  },
];

const groups = [
  "ZAO",
  "Tout Brazza",
  "SOS Salsa",
  "Fa-k-diese",
  "Fanfare salutiste",
  "Africa Brass",
  "Ultra Son",
  "Biya Lunkoyi",
  "Sila Lemvo",
];

const collaborations = [
  "Papa Wemba",
  "Fally Ipupa",
  "Reddy Amissy",
  "Alexis Murillo",
  "Bantous de la Capitale",
  "Sam Mangwana",
  "Cosmos Muntwarie",
  "Pierre Muntwarie",
  "Tabu Ley",
  "Frère Jean René Balekita",
];

const festivals = [
  "FESPAM",
  "Brazza Jazz Fusion",
  "Festival Mantsina sur scène",
  "Arica Fête",
  "Festival de jazz de Kinshasa",
  "Festival mondial des arts nègres",
  "South African Association for Jazz Education",
  "Festival Mawazine",
];

const countries = [
  "Congo",
  "RDC",
  "Éthiopie",
  "Rwanda",
  "Burundi",
  "Ghana",
  "Sénégal",
  "Bénin",
  "Nigeria",
  "Gabon",
  "Namibie",
  "Afrique du Sud",
];

type SocialName =
  | "TikTok"
  | "WhatsApp"
  | "Facebook"
  | "YouTube"
  | "Instagram";

const gallery = [
  {
    src: "/IMG-20250811-WA0064.jpg.jpeg",
    alt: "MAY'S sur scene, portrait principal",
  },
  {
    src: "/IMG-20250811-WA0061.jpg.jpeg",
    alt: "MAY'S en performance musicale",
  },
  {
    src: "/IMG-20250811-WA0066.jpg.jpeg",
    alt: "MAY'S en concert",
  },
  {
    src: "/IMG-20250811-WA0069.jpg.jpeg",
    alt: "MAY'S avec son instrument",
  },
  {
    src: "/WhatsApp%20Image%202026-03-04%20at%2020.34.03.jpeg",
    alt: "MAY'S en portrait",
  },
];

const socials: SocialName[] = [
  "TikTok",
  "WhatsApp",
  "Facebook",
  "YouTube",
  "Instagram",
];

const socialLinks: Record<SocialName, string> = {
  TikTok: "https://www.tiktok.com/@maysbantsimba",
  WhatsApp: "https://wa.me/242069607475",
  Facebook: "https://www.facebook.com/gerald.bantsimba",
  YouTube: "https://www.youtube.com/@maysbantsimba4275",
  Instagram: "https://www.instagram.com/mays_bantsimba/",
};

const contactEmail = "maysbantsimba@gmail.com";
const whatsappNumber = "+242 06 960 7475";

function SocialIcon({ name }: { name: SocialName }) {
  const common = "h-5 w-5";

  switch (name) {
    case "TikTok":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={common}
          aria-hidden="true"
        >
          <path d="M14 3c.4 2 1.8 4 4 5.2V11a8.6 8.6 0 0 1-4-1.2v5.4a5.2 5.2 0 1 1-5.2-5.2" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={common}
          aria-hidden="true"
        >
          <path d="M12 20a8 8 0 1 0-4.3-1.2L5 21l2.3-2.2A8 8 0 0 0 12 20Z" />
          <path d="M9.8 9.2c.3-.4.7-.3.9 0l.6 1c.2.3.2.6 0 .9l-.3.4c.6 1 1.5 1.8 2.5 2.4l.4-.2c.3-.2.7-.2 1 0l.9.5c.4.2.5.6.2 1a2.1 2.1 0 0 1-2.2.8A8.4 8.4 0 0 1 9 11.4a2.1 2.1 0 0 1 .8-2.2Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={common}
          aria-hidden="true"
        >
          <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8a1 1 0 0 1 1-1Z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={common}
          aria-hidden="true"
        >
          <rect x="3" y="6" width="18" height="12" rx="4" />
          <path d="m10 9 5 3-5 3V9Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={common}
          aria-hidden="true"
        >
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function Home() {
  const marqueeItems = [...collaborations, ...collaborations];

  return (
    <>
      <IntroLoader />
      <main className="relative overflow-hidden pb-16 text-[#f7f0e8]">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="float-slow pointer-events-none absolute -left-20 top-28 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(242,187,102,0.26),transparent_70%)] blur-2xl" />
        <div className="float-slow float-delay pointer-events-none absolute right-[-4rem] top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(110,213,255,0.2),transparent_72%)] blur-3xl" />
        <div className="float-slow pointer-events-none absolute bottom-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,140,122,0.18),transparent_72%)] blur-3xl" />

        <header className="section-shell sticky top-0 z-40 pt-4">
          <div className="glass-panel flex items-center justify-between rounded-full px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image
                  src="/logo%20mays.jpeg"
                  alt="Logo MAY'S"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <a
                href="#top"
                className="font-display text-2xl tracking-[0.28em] text-[#fff0d1]"
              >
                MAY&apos;S B
              </a>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-[#c8d0d8] md:flex">
              <a href="#parcours" className="transition hover:text-white">
                Parcours
              </a>
              <a href="#scene" className="transition hover:text-white">
                Scene
              </a>
              <a href="#festivals" className="transition hover:text-white">
                Festivals
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section id="top" className="section-shell pt-8 sm:pt-12 lg:pt-16">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,187,102,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(110,213,255,0.16),transparent_40%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="reveal">
                <p className="text-sm uppercase tracking-[0.32em] text-[#d7c7b0]">
                  Brazzaville • Congo • Jazz • Grande scène • Direction musicale
                </p>
                <h1 className="mt-5 font-display text-6xl leading-none sm:text-7xl lg:text-[7.75rem]">
                  <span className="text-shine">MAY&apos;S B</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d2dae2] sm:text-xl">
                  BANTSIMBA KIMBENE Gerald Armel est un artiste congolais au
                  parcours transversal, entre trompette, écriture, chant,
                  arrangements, basse et percussions.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {disciplines.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[#f9f4ed]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#parcours"
                    className="inline-flex items-center justify-center rounded-full bg-[#f2bb66] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#08111b] transition hover:bg-[#ffd08b]"
                  >
                    Parcours
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f7f0e8] transition hover:bg-white/10"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="reveal delay-1 grid gap-4">
                <div className="glass-panel overflow-hidden rounded-[1.75rem]">
                  <div className="relative h-[28rem]">
                    <Image
                      src="/IMG-20250811-WA0068.jpg.jpeg"
                      alt="MAY'S en performance live"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-[#06111d]/30 to-transparent" />
                    <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/12 bg-[#07131f]/70 px-4 py-2 backdrop-blur-md">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10">
                        <Image
                          src="/logo%20mays.jpeg"
                          alt="Logo MAY'S"
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs uppercase tracking-[0.24em] text-[#fff0d1]">
                        Signature live
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="glass-panel rounded-[1.5rem] p-5"
                    >
                      <p className="font-display text-4xl text-[#fff0d1]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#aeb9c4]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-8">
          <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="reveal glass-panel group relative h-[26rem] overflow-hidden rounded-[2rem] sm:h-[30rem]">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
              />
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.slice(1).map((photo) => (
                <article
                  key={photo.src}
                  className="reveal delay-1 glass-panel group relative h-60 overflow-hidden rounded-[1.75rem] sm:h-72"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.05]"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="parcours" className="section-shell pt-16">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="reveal glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d6c2a0]">
                Parcours
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[#fff6e8] sm:text-5xl">
                Une trajectoire bâtie entre apprentissage, transmission et
                liberté scénique.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#c7d1db]">
                Après ses débuts dans la fanfare, MAY&apos;S B poursuit un parcours
                plus structuré à l&apos;École nationale des beaux-arts de
                Brazzaville, où il se forme et enseigne la musique. Cette base
                solide devient le socle d&apos;une carrière capable de naviguer
                entre arrangements, scène live et création.
              </p>

              <div className="mt-8 space-y-4">
                {foundations.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.5rem] border border-white/8 bg-white/5 p-5 ${
                      index === 1 ? "reveal delay-1" : index === 2 ? "reveal delay-2" : ""
                    }`}
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-[#f3c57b]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#bec9d4]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal delay-1 glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d6c2a0]">
                Formations suivies
              </p>
              <div className="mt-6 space-y-4">
                {formations.map((item, index) => (
                  <article
                    key={item.title}
                    className={`rounded-[1.5rem] border border-white/8 bg-[#0d1d2d]/80 p-5 ${
                      index > 0 ? "reveal delay-2" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl text-[#fff6e8]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[#b9c5cf]">
                          {item.description}
                        </p>
                      </div>
                      <span className="rounded-full border border-[#f2bb66]/30 bg-[#f2bb66]/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#ffdca6]">
                        {item.meta}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="scene" className="section-shell pt-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d6c2a0]">
                Groupes et univers
              </p>
              <h2 className="mt-4 font-display text-4xl text-[#fff6e8] sm:text-5xl">
                Une présence qui circule du collectif aux grandes collaborations.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {groups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#eff4f8]"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal delay-1 glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d6c2a0]">
                Collaborations marquantes
              </p>
              <div className="mt-6 overflow-hidden">
                <div className="marquee flex min-w-max gap-3 pr-3">
                  {marqueeItems.map((artist, index) => (
                    <span
                      key={`${artist}-${index}`}
                      className="rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm uppercase tracking-[0.18em] text-[#f9f1e4]"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f3c57b]">
                    Enregistrements cites
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c7d0da]">
                    ZAO, Tout Brazza, Adompot, Langi, Frère Carlito Lassa,
                    Frère Debaba, Tabu Ley et Bantous de la Capitale.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f3c57b]">
                    Positionnement
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c7d0da]">
                    Un profil complet, capable de porter la section cuivre,
                    d&apos;arranger, d&apos;accompagner et d&apos;enrichir la scène.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="festivals" className="section-shell pt-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d6c2a0]">
                Festivals et grandes scenes
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {festivals.map((festival, index) => (
                  <article
                    key={festival}
                    className={`rounded-[1.5rem] border border-white/8 bg-[#0c1b2a]/76 p-5 ${
                      index % 2 === 1 ? "reveal delay-2" : "reveal delay-1"
                    }`}
                  >
                    <p className="font-display text-2xl text-[#fff3dd]">{festival}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="reveal delay-1 glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d6c2a0]">
                Tournées
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[#fff6e8] sm:text-5xl">
                Une circulation continue à travers l&apos;Afrique centrale, de
                l&apos;Ouest et australe.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-[#8dd8ff]/20 bg-[#8dd8ff]/8 px-4 py-2 text-sm text-[#eaf8ff]"
                  >
                    {country}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f3c57b]">
                  Energie de scene
                </p>
                <p className="mt-3 text-sm leading-7 text-[#c1ccd7]">
                  Ce parcours dessine un artiste habitué aux contextes variés:
                  fanfare, big band, groupe de scène, accompagnement d&apos;artistes
                  et festivals internationaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pt-16">
          <div className="reveal glass-panel relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(242,187,102,0.16),transparent_34%,rgba(110,213,255,0.08)_68%,transparent)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#d6c2a0]">
                  Cloture
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-[#fff6e8] sm:text-5xl">
                  MAY&apos;S B, entre scene, jazz et direction musicale.
                </h2>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-6 py-5 text-sm uppercase tracking-[0.22em] text-[#f6e9d0]">
                Brazzaville • Congo
              </div>
            </div>
          </div>
        </section>

        <footer className="section-shell pt-8">
          <div className="glass-panel rounded-[2rem] px-5 py-6 sm:px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative h-16 w-16 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                  <Image
                    src="/logo%20mays.jpeg"
                    alt="Logo MAY'S"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-3xl text-[#fff6e8]">MAY&apos;S B</p>
                  <div className="mt-2 flex flex-col gap-2 text-sm">
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-[#f3c57b] transition hover:text-[#ffdca6]"
                    >
                      {contactEmail}
                    </a>
                    <a
                      href={socialLinks.WhatsApp}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#c8d1da] transition hover:text-white"
                    >
                      {whatsappNumber}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social}
                    href={socialLinks[social]}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#f5efe6] transition hover:border-[#f2bb66]/40 hover:bg-white/10"
                  >
                    <SocialIcon name={social} />
                    <span>{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
