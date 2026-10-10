'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  { src: '/review1.png', alt: 'Review from Sarah Jenkins' },
  { src: '/review2.png', alt: 'Review from Michael Ross' },
  { src: '/review3.png', alt: 'Review from Clara Gomez' },
]

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-12">
          <div className="flex flex-col gap-3">
            <h2 className="max-w-xs font-heading text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              What our guests are saying
            </h2>
            <p className="max-w-xs text-xs leading-relaxed text-gray-500">
              Real reviews from people who have experienced the magic of Gourmet Bistro.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="flex size-9 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:bg-gray-50"
            >
              <ChevronLeft className="size-4 text-gray-700" aria-hidden="true" />
              <span className="sr-only">Previous review</span>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="flex size-9 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:bg-gray-50"
            >
              <ChevronRight className="size-4 text-gray-700" aria-hidden="true" />
              <span className="sr-only">Next review</span>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:items-center lg:gap-6 lg:overflow-visible lg:px-0"
        >
          {reviews.map((review) => (
            <img
              key={review.src}
              src={review.src}
              alt={review.alt}
              className="h-auto w-[85%] shrink-0 snap-center sm:w-[60%] lg:w-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
