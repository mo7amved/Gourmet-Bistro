import { ChefHat, Send } from 'lucide-react'

type IconProps = { className?: string; 'aria-hidden'?: boolean | 'true' }

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" />
    </svg>
  )
}

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.75 3h3.07l-6.71 7.67L22 21h-6.18l-4.84-6.33L5.44 21H2.37l7.18-8.2L2 3h6.34l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2Z" />
    </svg>
  )
}

const socials = [
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: XIcon, label: 'X (Twitter)' },
]

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Digital Menu', href: '#gallery' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reservations', href: '#reservation' },
]

const hours = [
  { days: 'Mon - Thu', time: '12:00 - 22:00' },
  { days: 'Fri - Sat', time: '12:00 - 23:30' },
  { days: 'Sunday', time: '11:00 - 21:00' },
]

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#222222] pb-10 pt-16 md:pt-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 md:pb-16 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#FF6B35]">
                <ChefHat className="size-5 text-white" aria-hidden="true" />
              </div>
              <p className="whitespace-nowrap font-heading text-lg font-bold text-white">Gourmet Bistro</p>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Bringing the art of dining to your table since 2008. Quality
              ingredients, exceptional service.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-[#FF6B35]"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-base font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-[#FF6B35]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-base font-semibold text-white">Opening Hours</h3>
            <ul className="flex flex-col gap-4 text-sm">
              {hours.map((h) => (
                <li key={h.days} className="flex items-center justify-between gap-4">
                  <span className="text-gray-400">{h.days}</span>
                  <span className="text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-base font-semibold text-white">Newsletter</h3>
            <p className="text-sm leading-relaxed text-gray-400">Get the latest recipes and event updates.</p>
            <form className="flex items-center gap-3">
              <label htmlFor="newsletter" className="sr-only">Your email</label>
              <input
                id="newsletter"
                type="email"
                placeholder="Your email"
                className="w-full min-w-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#FF6B35]"
              />
              <button
                type="button"
                className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#FF6B35] text-white transition-colors hover:bg-[#F4511E]"
              >
                <Send className="size-4" aria-hidden="true" />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-xs text-gray-400 sm:flex-row sm:justify-between sm:text-left">
          <p>© 2024 Gourmet Bistro. All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
