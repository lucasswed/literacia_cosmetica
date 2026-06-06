'use client';

import SidebarNav from '@/components/SidebarNav';

export default function FatoresDesencadeantes() {
  const triggers = [
    {
      icon: '☀️',
      title: 'Exposição Solar e ao Vento',
      desc: 'A radiação UV e a exposição ao vento são dos gatilhos mais frequentes. O uso diário de protetor solar de largo espectro é essencial para o controlo da rosácea.',
    },
    {
      icon: '🌡️',
      title: 'Temperaturas Extremas',
      desc: 'Tanto o calor excessivo como o frio intenso podem desencadear ou agravar crises. Mudanças rápidas de temperatura são especialmente problemáticas.',
    },
    {
      icon: '🍷',
      title: 'Bebidas Quentes, Álcool e Alimentos Picantes',
      desc: 'O álcool (especialmente vinho tinto), as bebidas quentes como café e chá, e os alimentos picantes têm efeito vasodilatador e são gatilhos frequentemente referidos.',
    },
    {
      icon: '😰',
      title: 'Stress Emocional e Exercício Físico Intenso',
      desc: 'O stress emocional, a ansiedade e o exercício físico de alta intensidade podem provocar vasodilatação e desencadear episódios de rubor.',
    },
    {
      icon: '🧴',
      title: 'Produtos Cosméticos ou de Higiene com Ingredientes Irritantes',
      desc: 'Produtos com álcool desnaturado, fragrâncias e surfactantes agressivos podem irritar a pele sensível e provocar crises. Preferir formulações suaves e sem perfume.',
    },
    {
      icon: '💊',
      title: 'Determinados Medicamentos',
      desc: 'Alguns medicamentos com efeito vasodilatador podem agravar os sintomas da rosácea. Consultar o médico sobre alternativas se suspeitar desta relação.',
    },
  ];

  return (
    <div className="w-full relative z-10">
      <div className="bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ebe5] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-5 opacity-5 text-8xl">🌹</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2b2621] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Fatores Desencadeantes
          </h1>
          <p className="text-lg text-[#6b5b4f] max-w-2xl">
            Fatores que podem desencadear ou agravar as crises de rosácea
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
                <p className="text-lg text-[#2b2621] leading-relaxed">
                  Identificar os gatilhos individuais é uma parte essencial da gestão da rosácea. Embora os fatores desencadeantes <strong>variem de pessoa para pessoa</strong>, os mais frequentemente referidos na literatura científica são os seguintes.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {triggers.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-l-4 border-[#c94a4a] rounded-sm shadow-sm p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-5xl mb-5">{item.icon}</div>
                    <h3
                      className="text-2xl font-bold text-[#2b2621] mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#6b5b4f] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                📓 Diário de Sintomas
              </h2>
              <p className="text-lg leading-relaxed">
                Como os gatilhos variam de pessoa para pessoa, manter um <strong>diário de sintomas</strong> pode ser muito útil para identificar os seus fatores individuais. Registe o que comeu, o clima, o nível de stress e os produtos utilizados quando ocorre uma crise.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
