'use client'

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Tentang Saya
            </h2>
            <div className="h-1 w-20 bg-primary rounded" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Latar Belakang</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Perkenalkan nama saya Athifa Dayana Shaki, saya lahir di Banda Aceh pada tanggal 24 Mei 2010. Saat ini saya sedang menempuh pendidikan sebagai pelajar dan tinggal di daerah Lampeunurut, Aceh Besar.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Minat & Passion</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Saya adalah seorang pelajar yang memiliki minat besar di bidang seni dan tata boga. Saya senang mengekspresikan kreativitas melalui berbagai karya seni serta belajar membuat berbagai jenis makanan.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Filosofi Belajar</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Bagi saya, seni dan memasak bukan hanya sekadar hobi, tetapi juga cara untuk mengembangkan kreativitas, ketelitian, dan keterampilan. Setiap karya adalah kesempatan untuk belajar dan berkembang.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Visi Masa Depan</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Saya berharap kemampuan yang saya pelajari dapat terus berkembang dan menjadi bekal untuk meraih cita-cita di masa depan. Dengan dedikasi dan kerja keras, saya yakin dapat mencapai impian saya.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
            <div className="bg-white rounded-lg p-6 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">2010</div>
              <p className="text-sm text-muted-foreground">Lahir di Banda Aceh</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">🎨</div>
              <p className="text-sm text-muted-foreground">Penyukai Seni</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">👩‍🍳</div>
              <p className="text-sm text-muted-foreground">Pecinta Tata Boga</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
