'use client'

interface Interest {
  icon: string
  title: string
  description: string
  color: string
}

const interests: Interest[] = [
  {
    icon: '🎨',
    title: 'Seni Visual',
    description:
      'Mengekspresikan kreativitas melalui berbagai medium seni seperti lukisan, sketsa, dan karya seni digital.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: '👨‍🍳',
    title: 'Tata Boga',
    description:
      'Belajar membuat berbagai jenis makanan dan mengembangkan kreativitas melalui masakan yang lezat dan indah.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: '📚',
    title: 'Pembelajaran',
    description:
      'Antusias dalam belajar berbagai disiplin ilmu dan mengembangkan wawasan yang luas.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: '✨',
    title: 'Pengembangan Diri',
    description:
      'Percaya bahwa setiap tantangan adalah kesempatan untuk belajar dan menjadi versi terbaik dari diri sendiri.',
    color: 'from-pink-400 to-pink-600',
  },
]

export function Interests() {
  return (
    <section id="interests" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Minat & Hobi
            </h2>
            <div className="h-1 w-20 bg-primary rounded" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 border border-border hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity`}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{interest.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {interest.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4 pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minat-minat ini membentuk siapa saya dan mendorong saya untuk terus
              tumbuh dan berkembang.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
