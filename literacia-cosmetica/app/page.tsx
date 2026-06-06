import Link from 'next/link';

export default function Home() {
  const sections = [
    {
      title: 'O que é Rosácea?',
      description: 'Descubra o que é a rosácea, como se desenvolve e por que afeta principalmente o rosto.',
      icon: '🔍',
      href: '/o-que-e-rosacea',
      color: 'from-[#c94a4a] to-[#8b3a3a)',
    },
    {
      title: 'Manifestações',
      description: 'Conheça os sinais e sintomas da rosácea e como se manifestam na pele.',
      icon: '🔴',
      href: '/manifestacoes',
      color: 'from-[#d4a574] to-[#c94a4a)',
    },
    {
      title: 'Classificação e Subtipos',
      description: 'Explore os 4 subtipos principais: Eritemato-telangiectásica, Pápulo-pustulosa, Fimatosa e Ocular.',
      icon: '📋',
      href: '/classificacao',
      color: 'from-[#9d8b7e] to-[#6b5b4f)',
    },
    {
      title: 'Critérios de Diagnóstico',
      description: 'Aprenda os critérios diagnósticos segundo as directrizes internacionais.',
      icon: '✅',
      href: '/criterios-diagnosticos',
      color: 'from-[#8b3a3a] to-[#5b2424)',
    },
    {
      title: 'Fatores Desencadeantes',
      description: 'Identifique os gatilhos que podem provocar crises de rosácea.',
      icon: '⚠️',
      href: '/fatores-desencadeantes',
      color: 'from-[#c94a4a] to-[#a83a3a)',
    },
    {
      title: 'Patogénese',
      description: 'Compreenda os mecanismos biológicos por trás do desenvolvimento da rosácea.',
      icon: '🧬',
      href: '/patogenese',
      color: 'from-[#d4a574] to-[#b88a5a)',
    },
  ];

  return (
    <div className="w-full relative z-10">
      {/* Hero Section - Editorial Bold */}
      <div className="bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ebe5] py-20 md:py-32 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-5 opacity-5 text-9xl">🌹</div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#c94a4a] to-transparent opacity-[0.03] rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-sm font-bold text-[#c94a4a] tracking-widest uppercase">Educação em Saúde da Pele</span>
                </div>
                <h1
                  className="text-5xl md:text-6xl font-bold text-[#2b2621] leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Compreenda<br />
                  <span className="text-[#c94a4a]">Rosácea</span>
                </h1>
              </div>

              <p className="text-lg text-[#6b5b4f] leading-relaxed max-w-lg">
                Um recurso educativo completo baseado em evidência científica. Conheça os sinais, sintomas, diagnóstico e estratégias de controlo da rosácea.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/o-que-e-rosacea"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#c94a4a] text-white font-bold rounded-sm hover:bg-[#8b3a3a] transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Começar a Aprender
                </Link>
                <Link
                  href="/refs"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c94a4a] text-[#c94a4a] font-bold rounded-sm hover:bg-[#c94a4a] hover:text-white transition-all duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Referências
                </Link>
              </div>
            </div>

            <div className="hidden lg:block relative h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c94a4a] to-[#d4a574] opacity-10 rounded-sm transform rotate-3"></div>
              <div className="absolute inset-4 bg-gradient-to-bl from-[#c94a4a] to-[#8b3a3a] opacity-5 rounded-sm transform -rotate-2"></div>
              <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20">🌹</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Title */}
        <div className="mb-16">
          <p className="text-sm font-bold text-[#c94a4a] tracking-widest uppercase mb-3">Explore os Tópicos</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#2b2621] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tudo o que Precisa Saber
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#c94a4a] to-transparent mt-6"></div>
        </div>

        {/* Cards Grid - Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sections.map((section, idx) => (
            <Link
              key={section.href}
              href={section.href}
              className={`group relative overflow-hidden rounded-sm transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 ${idx % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'
                }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative bg-white p-8 h-full flex flex-col">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">{section.icon}</div>

                <h3 className="text-xl font-bold text-[#2b2621] mb-3 group-hover:text-white transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {section.title}
                </h3>

                <p className="text-[#6b5b4f] text-sm leading-relaxed flex-grow group-hover:text-white group-hover:text-opacity-90 transition-colors">
                  {section.description}
                </p>

                <div className="mt-6 flex items-center text-[#c94a4a] group-hover:text-white font-bold text-sm transition-colors">
                  Saiba mais
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              <div className="absolute inset-0 border border-[#c94a4a] opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"></div>
            </Link>
          ))}
        </div>

        {/* Info Section - Editorial Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="bg-[#f5f3f0] p-12 rounded-sm border-l-4 border-[#c94a4a]">
            <h2 className="text-3xl font-bold text-[#2b2621] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              ℹ️ Informações Essenciais
            </h2>
            <ul className="space-y-5">
              {[
                { title: 'Sem cura, mas controlável', desc: 'A rosácea não tem cura, mas pode ser eficazmente gerida com tratamento adequado.' },
                { title: 'Não é contagiosa', desc: 'A rosácea não se transmite entre pessoas.' },
                { title: 'Componente genética forte', desc: 'Cerca de 50% das pessoas com rosácea têm familiares com a mesma condição.' },
                { title: 'Gatilhos identificáveis', desc: 'Muitos gatilhos podem ser evitados para reduzir crises.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-[#c94a4a] font-bold flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-[#2b2621] text-sm">{item.title}</p>
                    <p className="text-[#6b5b4f] text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#c94a4a] to-[#8b3a3a] p-12 rounded-sm text-white">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                🎯 Baseado em Evidência
              </h3>
              <p className="leading-relaxed text-sm text-white text-opacity-90">
                Todo o conteúdo é fundamentado nas diretrizes do Global ROSacea COnsensus (ROSCO) e National Rosacea Society Expert Committee.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#d4a574] to-[#9d8b7e] p-12 rounded-sm text-white">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                ⚕️ Aviso Legal
              </h3>
              <p className="leading-relaxed text-sm text-white text-opacity-90">
                Este site fornece informações educativas apenas. Consulte um dermatologista para diagnóstico e tratamento profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
