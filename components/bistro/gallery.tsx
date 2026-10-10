export function Gallery() {
  return (
    <section id="gallery" className="w-full scroll-mt-20 bg-[#F9FAFB] py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-12">
          <h2 className="font-heading text-3xl font-bold text-gray-900 md:text-4xl">Visual Feast</h2>
          <p className="max-w-xs text-xs leading-relaxed text-gray-500">
            A glimpse into our kitchen and the vibrant atmosphere we&apos;ve created for you.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 md:h-[330px] md:grid-cols-4 md:grid-rows-2">
          <img
            src="/l7ma.png"
            alt="Grilled meat dish"
            className="col-span-2 aspect-[4/3] size-full rounded-3xl object-cover shadow-lg md:row-span-2 md:aspect-auto"
          />
          <img
            src="/gambary.png"
            alt="Shrimp dish"
            className="col-span-2 aspect-[2/1] size-full rounded-3xl object-cover shadow-lg md:aspect-auto"
          />
          <img
            src="/el2a3da.png"
            alt="Restaurant table setting"
            className="aspect-square size-full rounded-3xl object-cover shadow-lg md:aspect-auto"
          />
          <img
            src="/elmasroub.png"
            alt="Signature drink"
            className="aspect-square size-full rounded-3xl object-cover shadow-lg md:aspect-auto"
          />
        </div>
      </div>
    </section>
  )
}
