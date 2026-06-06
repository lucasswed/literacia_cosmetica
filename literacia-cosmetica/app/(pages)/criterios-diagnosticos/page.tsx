'use client';

import SidebarNav from '@/components/SidebarNav';

export default function CriteriosDiagnosticos() {
  return (
    <div className="w-full relative z-10">
      <div className="bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ebe5] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-5 opacity-5 text-8xl">🌹</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2b2621] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Critérios de Diagnóstico
          </h1>
          <p className="text-lg text-[#6b5b4f] max-w-2xl">
            Como os profissionais de saúde diagnosticam a rosácea
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
            <section className="mb-16">
              <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm">
                <p className="text-lg text-[#2b2621] leading-relaxed mb-4">
                  O diagnóstico de rosácea é <strong>essencialmente clínico</strong>, baseado na avaliação
                  dos sinais e sintomas pelo dermatologista. Não existem testes laboratoriais específicos ou biópsias
                  de rotina para diagnosticar rosácea.
                </p>
                <p className="text-lg text-[#2b2621] leading-relaxed">
                  Os critérios de diagnóstico foram estabelecidos pelo <strong>Global ROSacea COnsensus (ROSCO)</strong> e
                  pelo <strong>National Rosacea Society Expert Committee</strong>.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2
                className="text-4xl font-bold text-[#2b2621] mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Níveis de Importância Clínica
              </h2>
              <p className="text-lg text-[#6b5b4f] mb-8">
                Os sinais e sintomas de rosácea foram divididos em três níveis de importância clínica.
              </p>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#c94a4a] to-[#a83a3a] text-white p-12 rounded-sm shadow-lg">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    🎯 Critério Independente
                  </h3>
                  <p className="text-base leading-relaxed">
                    A presença de <strong>APENAS UM</strong> destes sinais é <strong>suficiente para diagnóstico definitivo</strong>:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>✓ Eritema centrofacial persistente</li>
                    <li>✓ Alterações fimatosas (espessamento da pele)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#d4a574] to-[#b88a5a] text-white p-12 rounded-sm shadow-lg">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    ✅ Critérios Major
                  </h3>
                  <p className="text-base leading-relaxed">
                    A presença de <strong>2 ou mais</strong> destes sinais:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>✓ Flushing recorrente</li>
                    <li>✓ Pápulas e/ou pústulas</li>
                    <li>✓ Telangiectasias (excluindo as laterais do nariz)</li>
                    <li>✓ Manifestações oculares específicas (telangiectasias na margem das pálpebras, blefarite, conjuntivite, ceratite)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#9d8b7e] to-[#7d6b5e] text-white p-12 rounded-sm shadow-lg">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    ℹ️ Critérios Secundários
                  </h3>
                  <p className="text-base leading-relaxed">
                    Sintomas frequentes que apoiam o diagnóstico:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>✓ Sensação de ardor ou picada na pele</li>
                    <li>✓ Edema (inchaço facial)</li>
                    <li>✓ Sensação de pele seca</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm">
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ⚕️ Aviso Importante
              </h2>
              <p className="text-lg leading-relaxed">
                O diagnóstico clínico por um dermatologista é essencial. Se suspeita de rosácea, procure um profissional de saúde para avaliação adequada.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
