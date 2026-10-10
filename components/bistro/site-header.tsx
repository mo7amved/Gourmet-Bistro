'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#' },
  { label: 'Menu', href: '#gallery' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#F9FAFB]/95 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-10"
      >
        <a href="#" className="flex items-center gap-3">
          <img
            src="/Background.png"
            alt=""
            className="size-9 rounded-xl object-cover md:size-10"
          />
          <span className="whitespace-nowrap font-heading text-lg font-bold text-gray-800 md:text-xl">
            Gourmet Bistro
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-gray-600 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-[#FF6B35]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reservation"
          className="hidden whitespace-nowrap rounded-full bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F4511E] md:inline-flex"
        >
          Book a Table
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex size-10 items-center justify-center rounded-xl text-gray-800 hover:bg-gray-100 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-gray-200 bg-[#F9FAFB] md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FF6B35]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#reservation"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[#FF6B35] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#F4511E]"
              >
                Book a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
