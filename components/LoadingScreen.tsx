type LoadingScreenProps = {
  className?: string;
};

export function LoadingScreen({ className = "" }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#04101b] px-6 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,187,102,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(110,213,255,0.18),transparent_28%),linear-gradient(180deg,#04101b_0%,#071523_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f2bb66]/20 [animation:spin_18s_linear_infinite]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8dd8ff]/18 [animation:spin_24s_linear_infinite_reverse]" />

      <div className="glass-panel relative w-full max-w-xl rounded-[2rem] px-8 py-10 text-center">
        <p className="text-xs uppercase tracking-[0.38em] text-[#d8c6a6]">
          Portfolio experience
        </p>
        <h2 className="mt-4 font-display text-5xl text-[#fff6e8] sm:text-6xl">
          <span className="text-shine">MAY&apos;S B</span>
        </h2>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#bfccd7]">
          Trompette • Jazz • Scene • Collaborations
        </p>

        <div className="mt-8 overflow-hidden rounded-full bg-white/8 p-[2px]">
          <div className="relative h-1.5 overflow-hidden rounded-full bg-[#0a1724]">
            <div className="scan-line absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-[#f2bb66] via-[#fff0d1] to-[#8dd8ff]" />
          </div>
        </div>
      </div>
    </div>
  );
}
