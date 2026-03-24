'use client'

import { MapPin, Calendar } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-foreground-negative py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Athifa Dayana Shaki
              </h3>
              <p className="text-white/70">
                Pelajar berbakat dari Banda Aceh dengan passion di bidang seni
                dan tata boga.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Calendar size={18} />
                <span>Lahir: 24 Mei 2010</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={18} />
                <span>Lampeunurut, Aceh Besar, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-white mb-4">Navigasi Cepat</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Tentang
                </a>
                <a
                  href="#skills"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Keahlian
                </a>
                <a
                  href="#interests"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Minat
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Terhubung</h4>
              <p className="text-white/70 text-sm">
                Hubungi saya untuk diskusi tentang seni, tata boga, atau
                kolaborasi menarik lainnya.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>
              © {currentYear} Athifa Dayana Shaki. Semua hak dilindungi.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Syarat Penggunaan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
