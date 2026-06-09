'use client';

import SidebarNav from '@/components/SidebarNav';

export default function Manifestacoes() {
  const manifestations = [
    {
      icon: '📏',
      title: 'Espessamento Cutâneo (Alterações Fimatosas)',
      description: 'Em casos mais avançados, a pele pode engrossar e tornar-se irregular, particularmente no nariz, dando origem ao denominado rinofima. Esta apresentação é mais frequente no sexo masculino.',
      severity: 'Grave',
    },
    {
      icon: '🔴',
      title: 'Vermelhidão Persistente',
      description: 'A pele mantém-se avermelhada de forma continuada, mesmo em repouso e sem estímulos aparentes.',
      severity: 'Alto',
    },
    {
      icon: '🌊',
      title: 'Rubor Episódico (Flushing)',
      description: 'Episódios súbitos de calor e vermelhidão intensa, com duração de alguns minutos, geralmente desencadeados por calor, álcool, alimentos picantes ou stress emocional.',
      severity: 'Alto',
    },
    {
      icon: '💫',
      title: 'Telangiectasias',
      description: 'Pequenos filamentos vermelhos (vasos sanguíneos dilatados) que se tornam percetíveis à superfície da pele, sobretudo nas bochechas e no nariz.',
      severity: 'Moderado',
    },
    {
      icon: '🫧',
      title: 'Pápulas e Pústulas',
      description: 'Lesões inflamatórias semelhantes à acne, mas que se distinguem desta pela ausência de pontos negros ou brancos.',
      severity: 'Moderado',
    },
    {
      icon: '🔥',
      title: 'Pele Reativa e Sensível',
      description: 'Sensação de ardor, picadas ou comichão provocada pelo contacto com água, vento, temperaturas extremas ou determinados produtos cosméticos.',
      severity: 'Moderado',
    },
    {
      icon: '👁️',
      title: 'Manifestações Oculares',
      description: 'Olhos secos, vermelhos, com sensação de corpo estranho ou cílios irritados. Pode surgir antes, durante ou após o aparecimento dos sintomas cutâneos.',
      severity: 'Variável',
    },
  ];

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
            Manifestações da Rosácea
          </h1>
          <p className="text-lg text-[#6b5b4f] max-w-2xl">
            Conheça os sinais e sintomas da rosácea e como se manifestam na pele
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
                <p className="text-lg text-[#2b2621] leading-relaxed">
                  A rosácea apresenta-se através de vários sinais e sintomas que podem variar significativamente de pessoa para pessoa.
                  <strong> É comum a mesma pessoa apresentar características de mais do que um sintoma em simultâneo</strong>,
                  e o padrão de sintomas pode alterar-se ao longo do tempo.
                </p>
              </div>
            </section>

            {/* Manifestações */}
            <section className="mb-16">
              <h2
                className="text-4xl font-bold text-[#2b2621] mb-12"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Sinais e Sintomas
              </h2>
              <div className="space-y-6">
                {manifestations.map((item, idx) => (
                  <div key={idx} className="bg-white border-b-4 border-[#c94a4a] rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] p-8 flex items-center justify-center md:w-40 border-r border-[#e8dfd5]">
                        <span className="text-6xl">{item.icon}</span>
                      </div>
                      <div className="flex-1 p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3
                            className="text-2xl font-bold text-[#2b2621]"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {item.title}
                          </h3>
                          <span className={`px-4 py-2 rounded-sm text-sm font-bold whitespace-nowrap ml-4 ${item.severity === 'Alto' ? 'bg-[#c94a4a] text-white' :
                            item.severity === 'Grave' ? 'bg-[#8b3a3a] text-white' :
                              item.severity === 'Moderado' ? 'bg-[#d4a574] text-white' :
                                'bg-[#9d8b7e] text-white'
                            }`}>
                            {item.severity}
                          </span>
                        </div>
                        <p className="text-[#6b5b4f] leading-relaxed text-lg">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Padrões de Apresentação */}
            <section className="mb-16">
              <h2
                className="text-4xl font-bold text-[#2b2621] mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Padrões de Apresentação
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] p-10 rounded-sm border-l-4 border-[#c94a4a]">
                  <h3
                    className="text-2xl font-bold text-[#2b2621] mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    ⏱️ Variação Temporal
                  </h3>
                  <ul className="space-y-3 text-[#6b5b4f]">
                    <li className="flex items-start">
                      <span className="text-[#c94a4a] font-bold mr-3">•</span>
                      <span>Sintomas podem mudar ao longo do tempo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c94a4a] font-bold mr-3">•</span>
                      <span>Períodos de remissão e agravamento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c94a4a] font-bold mr-3">•</span>
                      <span>Gravidade variável em diferentes estações</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#c94a4a] font-bold mr-3">•</span>
                      <span>Resposta individual a tratamentos</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] p-10 rounded-sm border-l-4 border-[#d4a574]">
                  <h3
                    className="text-2xl font-bold text-[#2b2621] mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    👥 Variação Individual
                  </h3>
                  <ul className="space-y-3 text-[#6b5b4f]">
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-3">•</span>
                      <span>Apresentação diferente de pessoa para pessoa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-3">•</span>
                      <span>Combinação única de sintomas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-3">•</span>
                      <span>Diferentes gatilhos desencadeantes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-3">•</span>
                      <span>Resposta diferente a estímulos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sintomas Associados */}
            <section className="mb-16">
              <h2
                className="text-4xl font-bold text-[#2b2621] mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Sintomas Associados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#c94a4a] p-10 rounded-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl mb-4">🔥</div>
                  <h3
                    className="text-2xl font-bold text-[#2b2621] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Ardor ou Picada
                  </h3>
                  <p className="text-[#6b5b4f] leading-relaxed">Sensação persistente de ardor ou picadas na pele afetada.</p>
                </div>
                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#d4a574] p-10 rounded-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl mb-4">💧</div>
                  <h3
                    className="text-2xl font-bold text-[#2b2621] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Inchaço (Edema)
                  </h3>
                  <p className="text-[#6b5b4f] leading-relaxed">Inchaço facial, particularmente à volta dos olhos ou bochechas.</p>
                </div>
                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-l-4 border-[#9d8b7e] p-10 rounded-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl mb-4">🏜️</div>
                  <h3
                    className="text-2xl font-bold text-[#2b2621] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Secura
                  </h3>
                  <p className="text-[#6b5b4f] leading-relaxed">Sensação de pele seca e áspera, com descamação possível.</p>
                </div>
              </div>
            </section>

            {/* Quando Procurar Ajuda */}
            <section className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ⚕️ Quando Procurar Ajuda
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Se apresenta sinais e sintomas consistentes de rosácea, é importante procurar um dermatologista para confirmação de diagnóstico e plano de tratamento personalizado.
              </p>
              <p className="text-base leading-relaxed">
                Procure ajuda especialmente se: a vermelhidão persiste mais de 3 meses, os sintomas afetam a sua qualidade de vida, ou as manifestações surgem acompanhadas de sintomas oculares.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
