'use client';

import SidebarNav from '@/components/SidebarNav';

export default function Classificacao() {
  return (
    <div className="w-full relative z-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ebe5] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-5 opacity-5 text-8xl">🌹</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2b2621] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Classificação da Rosácea
          </h1>
          <p className="text-lg text-[#6b5b4f] max-w-2xl">
            Baseada em fenótipos — as características clínicas visíveis apresentadas pelo doente no momento da consulta
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

            {/* Introdução */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm">
                <p className="text-lg text-[#2b2621] leading-relaxed mb-4">
                  A classificação atual da rosácea é <strong>baseada em fenótipos</strong> — ou seja, nas características clínicas e visíveis apresentadas por aquele doente específico no momento da consulta.
                </p>
                <p className="text-lg text-[#2b2621] leading-relaxed">
                  Os sinais e sintomas foram divididos em <strong>três níveis de importância clínica</strong>, que orientam o processo de diagnóstico de forma progressiva.
                </p>
              </div>
            </section>

            {/* Tier 1 - Diagnóstico */}
            <section className="mb-12">
              <div className="bg-white rounded-sm shadow-lg border-l-8 border-[#c94a4a] overflow-hidden">
                <div className="bg-gradient-to-r from-[#c94a4a] to-[#a83a3a] px-10 py-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-white text-[#c94a4a] font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <p className="text-white text-sm font-bold tracking-widest uppercase opacity-80">Nível I</p>
                      <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Recursos Diagnósticos — Independentemente Suficientes
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-lg text-[#6b5b4f] leading-relaxed mb-8">
                    A presença de <strong>apenas um</strong> destes sinais na região centrofacial é <strong>suficiente para estabelecer o diagnóstico definitivo</strong> de rosácea.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#c94a4a] p-8 rounded-sm">
                      <div className="text-4xl mb-4">🔴</div>
                      <h3 className="text-xl font-bold text-[#2b2621] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Eritema Centrofacial Persistente
                      </h3>
                      <p className="text-[#6b5b4f] leading-relaxed">
                        Vermelhidão contínua no centro do rosto que pode intensificar-se periodicamente através de fatores de gatilho.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#c94a4a] p-8 rounded-sm">
                      <div className="text-4xl mb-4">👃</div>
                      <h3 className="text-xl font-bold text-[#2b2621] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Alterações Fimatosas
                      </h3>
                      <p className="text-[#6b5b4f] leading-relaxed">
                        Espessamento da pele, irregularidades na textura ou hiperplasia tecidular.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tier 2 - Major */}
            <section className="mb-12">
              <div className="bg-white rounded-sm shadow-lg border-l-8 border-[#d4a574] overflow-hidden">
                <div className="bg-gradient-to-r from-[#d4a574] to-[#b88a5a] px-10 py-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-white text-[#d4a574] font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <p className="text-white text-sm font-bold tracking-widest uppercase opacity-80">Nível II</p>
                      <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Recursos Major — Principais
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-lg text-[#6b5b4f] leading-relaxed mb-8">
                    Se o doente não apresentar nenhum dos recursos de diagnóstico isolados, o diagnóstico de rosácea pode ser confirmado através da <strong>combinação de pelo menos 2</strong> destes recursos major.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: '🌊', title: 'Flushing / Eritema Centrofacial Transitório', desc: 'Vermelhidão súbita que vai e vem.' },
                      { icon: '🫧', title: 'Pápulas Inflamatórias e Pústulas', desc: 'Lesões inflamatórias semelhantes à acne, sem pontos negros ou brancos.' },
                      { icon: '💫', title: 'Telangiectasias', desc: 'Pequenos vasos sanguíneos dilatados visíveis, excluindo as laterais do nariz.' },
                      { icon: '👁️', title: 'Manifestações Oculares Específicas', desc: 'Como telangiectasias na margem das pálpebras, blefarite, conjuntivite e ceratite.' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#d4a574] p-8 rounded-sm">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold text-[#2b2621] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {item.title}
                        </h3>
                        <p className="text-[#6b5b4f] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Tier 3 - Minor */}
            <section className="mb-16">
              <div className="bg-white rounded-sm shadow-lg border-l-8 border-[#9d8b7e] overflow-hidden">
                <div className="bg-gradient-to-r from-[#9d8b7e] to-[#7d6b5e] px-10 py-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-white text-[#9d8b7e] font-black text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <p className="text-white text-sm font-bold tracking-widest uppercase opacity-80">Nível III</p>
                      <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Recursos Minor — Secundários
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-lg text-[#6b5b4f] leading-relaxed mb-8">
                    São sinais e sintomas que surgem frequentemente associados aos anteriores e <strong>ajudam a avaliar o nível de desconforto</strong> do doente.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { icon: '🔥', title: 'Sensação de Ardor ou Picada', desc: 'Sensação persistente de ardor ou picadas na pele afetada.' },
                      { icon: '💧', title: 'Edema', desc: 'Inchaço facial, particularmente à volta dos olhos ou bochechas.' },
                      { icon: '🏜️', title: 'Sensação de Pele Seca', desc: 'Sensação de pele seca e áspera, com possível descamação.' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#9d8b7e] p-8 rounded-sm">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold text-[#2b2621] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {item.title}
                        </h3>
                        <p className="text-[#6b5b4f] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
