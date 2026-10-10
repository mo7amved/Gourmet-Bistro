import { Award, Leaf } from 'lucide-react'

const features = [
  { icon: Leaf, title: 'Fresh Harvest', text: 'Daily sourced organic ingredients.' },
  { icon: Award, title: 'Expert Chefs', text: 'Award-winning culinary team.' },
]

export function Story() {
  return (
    <section id="story" className="w-full scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
          <div className="relative w-full max-w-xs shrink-0">
            <div className="absolute -left-3 -top-3 size-16 rounded-2xl bg-[#FF6B35]/10" />
            <img
              src="/chef.png"
              alt="Chef plating a dish"
              className="relative h-80 w-full rounded-3xl object-cover shadow-2xl sm:h-96"
            />
            <div className="absolute -bottom-4 -right-2 rounded-2xl bg-[#222222] px-6 py-4 text-white shadow-xl sm:-right-6">
              <p className="font-heading text-2xl font-bold">15+</p>
              <p className="text-[9px] uppercase tracking-widest text-gray-400">Years of Excellence</p>
            </div>
          </div>

          <div className="flex max-w-md flex-col gap-5">
            <h2 className="text-balance font-heading text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Crafting stories on every plate since <span className="text-[#FF6B35]">2008</span>.
            </h2>
            <p className="text-sm leading-relaxed text-gray-500">
              Gourmet Bistro was born from a simple vision: to create a space where
              culinary excellence meets genuine hospitality. Our journey began in a
              small kitchen with big dreams, focusing on the purity of ingredients
              and the joy of shared meals.
            </p>
            <p className="text-sm leading-relaxed text-gray-500">
              Today, we continue that legacy, blending traditional techniques with
              modern innovation to bring you a menu that celebrates the best of the
              season.
            </p>

            <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#FF6B35]/10">
                    <Icon className="size-4 text-[#FF6B35]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-xs font-semibold text-gray-900">{title}</p>
                    <p className="mt-1 text-[11px] text-gray-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
