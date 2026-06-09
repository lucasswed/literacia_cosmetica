'use client';

import SidebarNav from '@/components/SidebarNav';

export default function OQueEhRosacea() {
  return (
    <div className="w-full relative z-10">
      <div className="bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ebe5] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-5 opacity-5 text-8xl">🌹</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2b2621] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            O que é Rosácea?
          </h1>
          <p className="text-lg text-[#6b5b4f] max-w-2xl">
            Compreenda esta doença inflamatória crónica da pele
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
              <h2 className="text-4xl font-bold text-[#2b2621] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                Definição
              </h2>
              <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm">
                <p className="text-lg text-[#2b2621] leading-relaxed mb-4">
                  A rosácea é uma <strong>doença inflamatória crónica da pele</strong>, caracterizada por períodos de agravamento e períodos de remissão.
                  Manifesta-se principalmente através de vermelhidão facial, vasos sanguíneos dilatados (telangiectasias), e em casos mais avançados, pode apresentar alterações na textura e espessura da pele.
                </p>
                <p className="text-lg text-[#2b2621] leading-relaxed">
                  A doença afeta predominantemente a <strong>zona central do rosto</strong>, nomeadamente o nariz, as bochechas, a testa e o queixo.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-[#2b2621] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                Características Principais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: '🔴', title: 'Rubor Facial', desc: 'Vermelhidão persistente no centro da face' },
                  { icon: '💫', title: 'Telangiectasias', desc: 'Pequenos vasos sanguíneos visíveis na pele' },
                  { icon: '🔥', title: 'Eritema', desc: 'Inflamação e avermelhamento da pele' },
                  { icon: '🫧', title: 'Pápulas e Pústulas', desc: 'Lesões inflamatórias semelhantes à acne' },
                  { icon: '🟡', title: 'Alterações Fimatosas', desc: 'Espessamento da pele em casos avançados' },
                  { icon: '👁️', title: 'Sintomas Oculares', desc: 'Olhos secos, vermelhos ou inflamados' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#c94a4a] p-8 rounded-sm hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#2b2621] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                    <p className="text-[#6b5b4f]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-[#2b2621] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                Causa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm">
                  <p className="text-lg text-[#2b2621] leading-relaxed">
                    Embora a sua causa exata não seja completamente conhecida, sabe-se que está associada a uma <strong>resposta inflamatória exagerada do sistema imunitário da pele</strong>, com uma predisposição genética subjacente.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#c94a4a] to-[#a83a3a] text-white p-10 rounded-sm">
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>📊 Fator Genético</h3>
                  <p className="text-base leading-relaxed">
                    <strong>Cerca de 50%</strong> das pessoas com rosácea têm um familiar próximo com a mesma condição, confirmando a forte influência genética.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-[#2b2621] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                Prognóstico e Tratamento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#8b3a3a] p-10 rounded-sm">
                  <h3 className="text-2xl font-bold text-[#2b2621] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>❌ Sem Cura</h3>
                  <p className="text-[#6b5b4f]">Não existe cura para a rosácea. Trata-se de uma doença crónica que requer gestão contínua.</p>
                </div>
                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#c94a4a] p-10 rounded-sm">
                  <h3 className="text-2xl font-bold text-[#2b2621] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>✅ Controlável</h3>
                  <p className="text-[#6b5b4f]">A doença pode ser <strong>eficazmente controlada</strong> com tratamento adequado, que pode ser farmacológico, cosmético ou incluir ajustes nos hábitos de vida.</p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-4xl font-bold text-[#2b2621] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                Mitos Comuns
              </h2>
              <div className="space-y-4">
                {[
                  { myth: 'Não preciso de protetor solar em dias nublados', truth: 'A radiação UV continua a contribuir para inflamação, angiogénese e agravamento da rosácea, pelo que a fotoproteção diária é recomendada.' },
                  { myth: 'Produtos naturais são sempre mais seguros para pele sensível', truth: 'Na rosácea, "natural" não é sinónimo de melhor tolerância; o mais importante é evitar ingredientes irritantes e escolher fórmulas específicas para pele sensível.' },
                  { myth: 'A rosácea é apenas estética', truth: 'A rosácea associa-se a várias comorbilidades sistémicas, incluindo doenças cardiovasculares, gastrointestinais e psiquiátricas.' },
                  { myth: 'Quanto mais produtos, melhor o cuidado', truth: 'A limpeza excessiva e práticas agressivas de cuidado facial associam-se a maior risco e progressão da rosácea.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border-l-4 border-[#8b3a3a] p-8 rounded-sm shadow-sm">
                    <p className="text-[#8b3a3a] font-bold mb-2">❌ Mito: {item.myth}</p>
                    <p className="text-[#6b5b4f]"><strong>Verdade:</strong> {item.truth}</p>
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
