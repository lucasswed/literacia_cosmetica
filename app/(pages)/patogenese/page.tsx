'use client';

import SidebarNav from '@/components/SidebarNav';

export default function Patogenese() {
  return (
    <div className="w-full relative z-10">
      <div className="bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ebe5] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-5 opacity-5 text-8xl">🌹</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2b2621] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Patogénese da Rosácea
          </h1>
          <p className="text-lg text-[#6b5b4f] max-w-2xl">
            Os mecanismos biológicos por trás do desenvolvimento da rosácea
          </p>
          <div className="h-1 w-20 bg-[#c94a4a] mt-6"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-24">
              <SidebarNav />
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="flex-1">

            {/* Visão geral */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm">
                <p className="text-lg text-[#2b2621] leading-relaxed">
                  A rosácea é uma doença inflamatória crónica da pele que afeta principalmente o rosto e resulta da combinação de vários fatores: <strong>predisposição genética, exposição solar, calor, álcool, microrganismos e stress oxidativo</strong>. A sua patogénese envolve principalmente dois mecanismos — a alteração dos vasos sanguíneos da pele e a alteração da resposta imunitária inata.
                </p>
              </div>
            </section>

            {/* Dois mecanismos principais */}
            <section className="mb-16">
              <h2
                className="text-4xl font-bold text-[#2b2621] mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dois Mecanismos Principais
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Mecanismo 1 */}
                <div className="bg-white border-l-8 border-[#c94a4a] rounded-sm shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-[#c94a4a] to-[#a83a3a] px-8 py-5">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      🩸 Alteração dos Vasos Sanguíneos
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-[#6b5b4f] leading-relaxed mb-6">
                      A pele reage de forma exagerada a determinados estímulos, provocando <strong>vasodilatação</strong>. Isso leva ao aparecimento de vermelhidão, rubor e sensação de ardor.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Vasodilatação exagerada em resposta a estímulos externos',
                        'Reatividade vascular anormal e persistente',
                        'Aparecimento de telangiectasias por formação de novos vasos',
                        'Sensação de calor e ardor associada ao fluxo aumentado',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#c94a4a] font-bold mr-3 flex-shrink-0">▸</span>
                          <span className="text-[#6b5b4f]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mecanismo 2 */}
                <div className="bg-white border-l-8 border-[#d4a574] rounded-sm shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-[#d4a574] to-[#b88a5a] px-8 py-5">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      🛡️ Alteração da Resposta Imunitária Inata
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-[#6b5b4f] leading-relaxed mb-6">
                      Há ativação de várias vias inflamatórias que <strong>aumentam a inflamação e atraem células inflamatórias</strong> para a pele, perpetuando o processo.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Ativação de vias inflamatórias por estímulos externos',
                        'Recrutamento de células inflamatórias para a pele',
                        'Libertação de mediadores inflamatórios',
                        'Inflamação crónica que perpetua os sintomas',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#d4a574] font-bold mr-3 flex-shrink-0">▸</span>
                          <span className="text-[#6b5b4f]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Consequências clínicas */}
            <section className="mb-16">
              <h2
                className="text-4xl font-bold text-[#2b2621] mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Consequências Clínicas
              </h2>
              <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] p-10 rounded-sm border-l-4 border-[#c94a4a]">
                <p className="text-lg text-[#2b2621] leading-relaxed mb-6">
                  A inflamação estimula ainda a <strong>formação de novos vasos sanguíneos (angiogénese)</strong>, o que ajuda a explicar o aparecimento de telangiectasias — os pequenos vasos sanguíneos visíveis na face.
                </p>
                <p className="text-lg text-[#2b2621] leading-relaxed mb-8">
                  Como consequência de todos estes processos, a pessoa pode apresentar:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: '🔴', title: 'Eritema Persistente', desc: 'Vermelhidão crónica resultante da vasodilatação mantida.' },
                    { icon: '🫧', title: 'Pápulas e Pústulas', desc: 'Lesões inflamatórias causadas pelo recrutamento de células imunitárias.' },
                    { icon: '💫', title: 'Telangiectasias', desc: 'Vasos sanguíneos visíveis formados pela angiogénese induzida pela inflamação.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border-l-4 border-[#c94a4a] p-6 rounded-sm shadow-sm">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h3 className="text-lg font-bold text-[#2b2621] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {item.title}
                      </h3>
                      <p className="text-[#6b5b4f] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Fatores contribuintes */}
            <section className="mb-16">
              <h2
                className="text-4xl font-bold text-[#2b2621] mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Fatores que Contribuem para a Patogénese
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: '🧬', label: 'Predisposição Genética' },
                  { icon: '☀️', label: 'Exposição Solar' },
                  { icon: '🌡️', label: 'Calor' },
                  { icon: '🍷', label: 'Álcool' },
                  { icon: '🦠', label: 'Microrganismos' },
                  { icon: '⚡', label: 'Stress Oxidativo' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] p-6 rounded-sm border border-[#e8dfd5] text-center hover:shadow-md transition-all duration-300">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-[#2b2621] font-bold text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
