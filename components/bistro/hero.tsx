export function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-64px)] w-full items-center bg-cover bg-center md:min-h-[calc(100svh-80px)]"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-black/40 md:to-black/30" />

      <div className="relative mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="flex max-w-xl flex-col gap-5 md:gap-6">
          <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#FF6B35]">
            The Art of Dining
          </span>

          <h1 className="text-balance font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Elevated culinary experiences for every palate.
          </h1>

          <p className="max-w-sm text-sm leading-relaxed text-gray-300 md:text-base">
            Discover a symphony of flavors crafted with locally sourced
            ingredients and exceptional passion.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#gallery"
              className="rounded-xl bg-[#FF6B35] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#F4511E]"
            >
              View Menu
            </a>
            <a
              href="#reservation"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Book a Table
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img src="/rate1.png" alt="" className="size-8 rounded-full border-2 border-white object-cover" />
              <img src="/rate3.png" alt="" className="size-8 rounded-full border-2 border-white object-cover" />
            </div>
            <p className="text-xs text-gray-300">
              <span className="font-semibold text-white">4.9/5</span> from over
              2,000+ happy diners
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
