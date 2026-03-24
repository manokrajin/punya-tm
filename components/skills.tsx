'use client'

interface Skill {
  category: string
  skills: Array<{
    name: string
    percentage: number
  }>
}

const skillsData: Skill[] = [
  {
    category: 'Bahasa',
    skills: [
      { name: 'Bahasa Indonesia', percentage: 95 },
      { name: 'Bahasa Inggris', percentage: 85 },
      { name: 'Bahasa Arab', percentage: 80 },
    ],
  },
  {
    category: 'IPA (Sains)',
    skills: [
      { name: 'Biologi', percentage: 88 },
      { name: 'Fisika', percentage: 82 },
      { name: 'Kimia', percentage: 80 },
    ],
  },
  {
    category: 'IPS (Sosial)',
    skills: [
      { name: 'Geografi', percentage: 85 },
      { name: 'Sejarah', percentage: 83 },
      { name: 'Ekonomi', percentage: 80 },
    ],
  },
]

function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full bg-border rounded-full h-2 overflow-hidden">
      <div
        className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Keahlian & Kompetensi
            </h2>
            <div className="h-1 w-20 bg-primary rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="space-y-6 bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-primary">
                  {skillGroup.category}
                </h3>

                <div className="space-y-4">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {skill.percentage}%
                        </span>
                      </div>
                      <ProgressBar percentage={skill.percentage} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Komitmen Pembelajaran
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Saya berkomitmen untuk terus belajar dan mengembangkan diri. Setiap keahlian yang saya miliki adalah hasil dari dedikasi dan kerja keras. Saya percaya bahwa pembelajaran adalah proses seumur hidup dan terus mencari peluang untuk berkembang lebih lanjut.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
