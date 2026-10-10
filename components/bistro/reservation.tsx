import { MapPin, Phone } from 'lucide-react'

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#FF6B35]'
const labelClass = 'font-heading text-xs font-semibold text-gray-900'

const contacts = [
  { icon: Phone, label: 'Call Us', value: '+1 (555) 000-1234' },
  { icon: MapPin, label: 'Visit Us', value: '123 Culinary Ave, Food District' },
]

export function Reservation() {
  return (
    <section id="reservation" className="relative w-full scroll-mt-20 overflow-hidden bg-[#F9FAFB] py-16 md:py-24">
      <div className="absolute -left-20 top-1/2 size-72 -translate-y-1/2 rounded-full bg-[#FF6B35]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="flex max-w-sm flex-col gap-6">
            <h2 className="text-balance font-heading text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Ready to experience it yourself?
            </h2>
            <p className="text-sm leading-relaxed text-gray-500">
              Book your table online in seconds. For parties larger than 10, please
              contact us directly via phone.
            </p>
            <div className="mt-2 flex flex-col gap-5">
              {contacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-md">
                    <Icon className="size-5 text-[#FF6B35]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="font-heading text-base font-semibold text-gray-900">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="w-full rounded-[2rem] border border-gray-100 bg-white p-5 shadow-xl sm:p-8 lg:max-w-md lg:shrink-0 lg:rounded-[2.5rem]">
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={labelClass}>Full Name</label>
                  <input id="name" type="text" placeholder="John Doe" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <input id="email" type="email" placeholder="john@example.com" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="col-span-2 flex flex-col gap-2 sm:col-span-1">
                  <label htmlFor="date" className={labelClass}>Date</label>
                  <input id="date" type="date" className={`${inputClass} px-3`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className={labelClass}>Time</label>
                  <input id="time" type="time" defaultValue="19:00" className={`${inputClass} px-3`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="guests" className={labelClass}>Guests</label>
                  <select id="guests" defaultValue="2" className={`${inputClass} px-3`}>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="notes" className={labelClass}>Special Notes</label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Any allergies or special requests?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-[#FF6B35] py-4 text-sm font-semibold text-white shadow-lg shadow-[#FF6B35]/30 transition-colors hover:bg-[#F4511E]"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
