import {
  CalendarDays,
  Heart,
  MapPin,
  Music3,
  PartyPopper,
  Phone,
  Send,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'

const templates = [
  {
    name: 'Moden Bersih',
    price: 'RM39',
    badge: 'Popular',
    tone: 'from-slate-900 via-slate-800 to-brand-600',
    description: 'Reka letak minimal dengan fokus pada nama pasangan, tarikh, dan CTA yang jelas.',
  },
  {
    name: 'Elegan Premium',
    price: 'RM59',
    badge: 'Disyorkan',
    tone: 'from-indigo-950 via-slate-900 to-sky-700',
    description: 'Gabungan warna tenang, tipografi kemas, dan ruang kosong yang cukup untuk rasa high-end.',
  },
  {
    name: 'Minimal Romantik',
    price: 'RM49',
    badge: 'Baru',
    tone: 'from-emerald-950 via-emerald-700 to-cyan-600',
    description: 'Ringkas, moden, dan sesuai untuk majlis yang nak fokus pada maklumat penting.',
  },
]

const features = [
  { title: 'RSVP', description: 'Sahkan kehadiran dengan mudah.', icon: Users },
  { title: 'Senarai Hadiah', description: 'Tetamu boleh lihat wishlist anda.', icon: Heart },
  { title: 'Muzik Latar', description: 'Bagi suasana yang lebih hidup.', icon: Music3 },
  { title: 'Lokasi', description: 'Peta dan arah ke lokasi majlis.', icon: MapPin },
  { title: 'Buku Ucapan', description: 'Kumpul ucapan daripada tetamu.', icon: Send },
  { title: 'Kalender', description: 'Mudah tambah ke kalendar.', icon: CalendarDays },
  { title: 'Hubungi Kami', description: 'Tanya terus jika ada soalan.', icon: Phone },
  { title: 'Kongsi Pantas', description: 'Hantar link melalui WhatsApp.', icon: Sparkles },
]

const steps = [
  {
    step: '1',
    title: 'Pilih template',
    text: 'Pilih design yang paling kena dengan tema majlis anda.',
  },
  {
    step: '2',
    title: 'Isi maklumat majlis',
    text: 'Masukkan nama pasangan, tarikh, lokasi, RSVP, dan info penting lain.',
  },
  {
    step: '3',
    title: 'Kongsi terus',
    text: 'Siap terus boleh kongsi link jemputan kepada tetamu melalui WhatsApp atau media sosial.',
  },
]

const plans = [
  {
    name: 'Asas',
    price: 'RM39',
    highlight: false,
    bullets: ['1 template pilihan', 'Sunting maklumat asas', 'Link jemputan boleh kongsi'],
  },
  {
    name: 'Standard',
    price: 'RM59',
    highlight: true,
    bullets: ['3 pilihan template', 'RSVP, lokasi, muzik latar', 'Buku ucapan dan kalender'],
  },
  {
    name: 'Premium',
    price: 'RM89',
    highlight: false,
    bullets: ['Design khas premium', 'Bantuan suntingan penuh', 'Sesuai untuk majlis besar'],
  },
]

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
      {children}
    </div>
  )
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-3 text-slate-600">{description}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#utama" className="flex items-center gap-3 font-semibold text-slate-900">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 text-white shadow-soft">ED</span>
            <span>
              <span className="block text-sm uppercase tracking-[0.25em] text-slate-500">Ekad Digital</span>
              <span className="block text-lg">Kad Kahwin Digital</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#template">Template</a>
            <a href="#cara">Cara Tempah</a>
            <a href="#fungsi">Fungsi</a>
            <a href="#pakej">Pakej</a>
            <a href="#soalan">Soalan Lazim</a>
          </nav>

          <a
            href="#pakej"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Tempah Sekarang
          </a>
        </div>
      </header>

      <main id="utama">
        <section className="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge>Wording dalam Bahasa Melayu penuh</Badge>

              <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Kad Kahwin Digital Untuk Hari Istimewa Anda
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Tempah, sunting, dan kongsi jemputan anda dengan mudah dalam satu tempat. Nampak cantik di telefon, laju dibuka, dan terus sedia untuk dihantar kepada keluarga serta tetamu.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pakej"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Tempah Sekarang
                </a>
                <a
                  href="#template"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Lihat Template
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 sm:max-w-lg">
                {[
                  ['2800+', 'Tempahan'],
                  ['300+', 'Design'],
                  ['24/7', 'Sokongan'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/80 bg-white p-4 shadow-soft">
                    <div className="text-2xl font-semibold text-slate-950">{value}</div>
                    <div className="mt-1 text-sm text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-brand-200/60 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-indigo-200/70 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-soft">
                <div className="rounded-[1.65rem] bg-gradient-to-b from-slate-900 to-slate-800 p-4 text-white">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Kad Preview</span>
                    <span>Live</span>
                  </div>
                  <div className="mt-5 rounded-[1.3rem] bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-xs uppercase tracking-[0.3em] text-brand-100">Jemputan Majlis</div>
                    <h2 className="mt-3 text-2xl font-semibold">Aina & Hafiz</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Dengan penuh kesyukuran, kami menjemput anda ke majlis perkahwinan kami.
                    </p>
                    <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/10 p-3">
                        <div className="text-slate-300">Tarikh</div>
                        <div className="mt-1 font-medium">20 Ogos 2026</div>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-3">
                        <div className="text-slate-300">Masa</div>
                        <div className="mt-1 font-medium">11:00 pagi</div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">RSVP</span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Lokasi</span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Ucapan</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-900">Mudah dikongsi</div>
                    <p className="mt-1 text-sm text-slate-500">Hantar link terus ke WhatsApp, Telegram, atau DM.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-900">Mesra telefon</div>
                    <p className="mt-1 text-sm text-slate-500">Nampak cantik di skrin kecil dan laju dibuka.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="template" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="Template"
              title="Pilih template kad yang ikut gaya anda"
              description="Kami sediakan pilihan design yang kemas, moden, dan sesuai untuk pasangan yang nak nampak profesional tanpa nampak serabut."
            />
            <div className="flex flex-wrap gap-2 text-sm text-slate-600">
              {['Semua', 'Moden', 'Minimal', 'Mewah', 'Bunga'].map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {templates.map((template) => (
              <article key={template.name} className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-soft">
                <div className={`h-52 bg-gradient-to-br ${template.tone} p-6 text-white`}>
                  <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium">{template.badge}</div>
                  <div className="mt-16 text-sm uppercase tracking-[0.25em] text-brand-100">{template.name}</div>
                  <h3 className="mt-2 text-2xl font-semibold">Sesuai untuk gaya bersih</h3>
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-slate-600">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">{template.price}</span>
                    <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Tempah</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="cara" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/80 bg-white p-8 shadow-soft sm:p-10">
            <SectionTitle
              eyebrow="Cara Tempah"
              title="Tiga langkah sahaja untuk siap"
              description="Proses ringkas supaya pasangan boleh fokus pada majlis, bukan pada teknikal."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {steps.map((item) => (
                <div key={item.step} className="rounded-3xl bg-slate-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">{item.step}</div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fungsi" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <SectionTitle
              eyebrow="Fungsi"
              title="Semua fungsi penting dalam satu kad"
              description="Kad kahwin digital bukan sekadar gambar jemputan. Ia juga bantu tetamu RSVP, tengok lokasi, dengar muzik, dan tinggalkan ucapan."
            />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {features.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-3xl border border-white/80 bg-white p-5 shadow-soft">
                  <div className="inline-flex rounded-2xl bg-slate-900 p-2 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-slate-900 font-semibold">{title}</div>
                  <p className="mt-2 text-sm text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pakej" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Pakej Harga</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Pilih pakej yang paling sesuai</h2>
            <p className="mt-4 text-slate-600">Tiga pakej ringkas untuk beri pilihan yang jelas kepada pelanggan.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[1.75rem] border bg-white p-8 shadow-soft ${
                  plan.highlight ? 'border-slate-900 ring-1 ring-slate-900' : 'border-slate-200'
                }`}
              >
                <div className="text-sm font-semibold text-slate-500">{plan.name}</div>
                <div className="mt-3 text-4xl font-semibold text-slate-950">{plan.price}</div>
                <p className="mt-4 text-slate-600">
                  {plan.highlight ? 'Pilihan paling seimbang untuk kebanyakan pasangan.' : plan.name === 'Asas' ? 'Sesuai untuk kad digital simple dan kemas.' : 'Untuk pasangan yang nak lebih eksklusif dan fully custom.'}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold ${
                    plan.highlight ? 'bg-slate-900 text-white' : 'border border-slate-300 bg-white text-slate-700'
                  }`}
                >
                  Pilih Pakej
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="soalan" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/80 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Testimoni</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Sesuai untuk pasangan yang nak mudah dan cantik</h2>
              <div className="mt-8 space-y-4">
                <blockquote className="rounded-3xl bg-slate-50 p-5 text-slate-700">“Senang sangat nak share dengan keluarga. Design nampak kemas dan premium.”</blockquote>
                <blockquote className="rounded-3xl bg-slate-50 p-5 text-slate-700">“Tak serabut, laju dibuka, dan tetamu senang RSVP. Memang membantu.”</blockquote>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Soalan Lazim</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Soalan yang biasa ditanya</h2>
              <div className="mt-8 space-y-4">
                {[
                  ['Apakah itu kad kahwin digital?', 'Kad kahwin digital ialah jemputan online yang boleh dibuka melalui link pada telefon atau komputer.'],
                  ['Berapa lama siap?', 'Biasanya siap cepat selepas maklumat lengkap diterima dan design dipilih.'],
                  ['Boleh edit maklumat selepas tempahan?', 'Boleh. Maklumat seperti nama, tarikh, dan lokasi boleh dikemas kini mengikut pakej.'],
                  ['Perlu download aplikasi?', 'Tak perlu. Tetamu boleh buka terus melalui browser pada link yang diberi.'],
                ].map(([question, answer]) => (
                  <details key={question} className="group rounded-2xl border border-slate-200 p-5">
                    <summary className="cursor-pointer list-none font-semibold text-slate-900">{question}</summary>
                    <p className="mt-3 text-slate-600">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-center text-white shadow-soft sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Tempah Sekarang</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Jadikan jemputan anda lebih mudah, cantik, dan tersusun</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Pilih template, isi maklumat, dan kongsi link kad kahwin digital anda dengan keluarga serta tetamu dalam beberapa minit sahaja.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#pakej" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950">
                Tempah Sekarang
              </a>
              <a href="#template" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white">
                Lihat Template
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
