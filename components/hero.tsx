'use client'

import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance text-foreground">
            Athifa Dayana Shaki
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Pelajar berbakat | Pecinta Seni & Tata Boga
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Dari Banda Aceh dengan passion dalam mengekspresikan kreativitas melalui seni dan memasak. Pelajar yang berkomitmen untuk terus berkembang dan meraih cita-cita.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Pelajari Lebih Lanjut
          </a>
          <a
            href="#skills"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
          >
            Lihat Keahlian
          </a>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto text-primary" size={24} />
        </div>
      </div>
    </section>
  )
}
