import { SiteHeader } from '@/components/bistro/site-header'
import { Hero } from '@/components/bistro/hero'
import { Story } from '@/components/bistro/story'
import { Gallery } from '@/components/bistro/gallery'
import { Testimonials } from '@/components/bistro/testimonials'
import { Reservation } from '@/components/bistro/reservation'
import { SiteFooter } from '@/components/bistro/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <SiteFooter />
    </>
  )
}
