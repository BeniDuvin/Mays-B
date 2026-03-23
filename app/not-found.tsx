import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden py-10 text-[#f7f0e8]">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="float-slow pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(242,187,102,0.24),transparent_70%)] blur-2xl" />
      <div className="float-slow float-delay pointer-events-none absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(110,213,255,0.18),transparent_72%)] blur-3xl" />

      <div className="section-shell relative">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <section className="glass-panel reveal relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,187,102,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(110,213,255,0.12),transparent_38%)]" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src="/logo%20mays.jpeg"
                    alt="Logo MAY'S"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <span className="font-display text-2xl tracking-[0.24em] text-[#fff0d1]">
                  MAY&apos;S
                </span>
              </div>

              <p className="mt-10 text-sm uppercase tracking-[0.32em] text-[#d6c2a0]">
                Erreur 404
              </p>
              <h1 className="mt-4 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
                <span className="text-shine">Page introuvable</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#c8d1da] sm:text-lg">
                Cette page n&apos;existe pas ou a ete deplacee. Le plus simple est
                de revenir au portfolio principal.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-[#f2bb66] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#08111b] transition hover:bg-[#ffd08b]"
                >
                  Retour a l&apos;accueil
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f7f0e8] transition hover:bg-white/10"
                >
                  Aller au contact
                </Link>
              </div>

              <div className="mt-10 rounded-[1.5rem] border border-white/8 bg-white/5 px-5 py-4 text-sm uppercase tracking-[0.2em] text-[#b8c3cf]">
                Portfolio • Jazz • Scene • Brazzaville
              </div>
            </div>
          </section>

          <section className="glass-panel reveal delay-1 relative min-h-[26rem] overflow-hidden rounded-[2rem] sm:min-h-[32rem]">
            <Image
              src="/IMG-20250811-WA0068.jpg.jpeg"
              alt="MAY'S en performance"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05101a] via-[#05101a]/18 to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-[#091521]/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#fff0d1] backdrop-blur-md">
              404
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/10 bg-[#091521]/72 px-5 py-4 backdrop-blur-md">
              <p className="font-display text-3xl leading-tight text-[#fff6e8] sm:text-4xl">
                Reprendre la visite du site en un clic.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
