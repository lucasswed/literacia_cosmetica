'use client';

import Link from 'next/link';

export default function IngredientesRecomendados() {
    const ingredients = [
        {
            icon: '🧴',
            name: 'niacinamide',
            type: 'Ativo',
            desc: 'É um dos ingredientes mais interessantes para pele com rosácea. Atua como agente anti-inflamatório e ajuda a melhorar a função de barreira cutânea, estimulando a síntese de ceramidas e reduzindo a perda transepidérmica de água.',
            benefits: [
                'Ação anti-inflamatória potente',
                'Melhora a função de barreira cutânea',
                'Estimula síntese de ceramidas',
                'Reduz a perda de água transepidérmica',
                'Diminui a vermelhidão',
            ],
        },
        {
            icon: '🧪',
            name: 'Azelaic acid',
            type: 'Ativo',
            desc: 'O Azelaic acid tem ação anti-inflamatória, antimicrobiana e queratolítica suave.',
            benefits: [
                'Ação anti-inflamatória',
                'Propriedade antimicrobiana',
                'Queratolítico suave',
                'Reduz inflamação e microrganismos',
                'Modula renovação celular',
            ],
        },
        {
            icon: '🛡️',
            name: 'Ceramides',
            type: 'Excipiente',
            desc: 'As ceramides são lípidos naturalmente presentes na camada mais externa da pele e são essenciais para manter a barreira cutânea íntegra. Na rosácea, esta barreira encontra-se frequentemente fragilizada.',
            benefits: [
                'Restauram coesão da pele',
                'Melhoram a hidratação',
                'Reduzem a sensibilidade',
                'Reforçam a barreira cutânea',
                'Diminuem ardor e secura',
            ],
        },
        {
            icon: '💧',
            name: 'Hyaluronic acid',
            type: 'Excipiente',
            desc: 'O ácido hialurónico é um humectante amplamente utilizado por ser capaz de reter água e melhorar a hidratação cutânea. Melhora o conforto e a elasticidade da pele.',
            benefits: [
                'Retém água na pele',
                'Melhora hidratação profunda',
                'Aumenta elasticidade',
                'Melhora conforto cutâneo',
                'Reduz sensação de aperto',
            ],
        },
        {
            icon: '🌿',
            name: 'Aloe Vera',
            type: 'Excipiente',
            desc: 'A aloe vera é frequentemente incluída em produtos para pele sensível devido às suas propriedades calmantes e hidratantes. Na rosácea, pode ajudar a aliviar a sensação de ardor.',
            benefits: [
                'Propriedades calmantes',
                'Ação hidratante',
                'Alivia sensação de ardor',
                'Reduz desconforto cutâneo',
                'Bem tolerada em peles sensíveis',
            ],
        },
        {
            icon: '☀️',
            name: 'Fotoproteção com Filtros Minerais',
            type: 'Protetor Solar',
            desc: 'A proteção solar é um dos pilares dos cuidados na rosácea. Os filtros minerais (óxido de zinco e dióxido de titânio) tendem a ser melhor tolerados por peles sensíveis.',
            benefits: [
                'Menor potencial irritante',
                'Protege contra radiação UV',
                'Previne flushing solar',
                'Reduz agravamento por sol',
                'Uso diário essencial',
            ],
        },
    ];

    return (
        <div className="w-full relative z-10">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ebe5] py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-8 right-5 opacity-5 text-8xl">🌹</div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/ingredientes" className="text-[#c94a4a] hover:text-[#8b3a3a] text-lg">
                            ← Voltar
                        </Link>
                    </div>
                    <h1
                        className="text-5xl md:text-6xl font-bold text-[#2b2621] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Ingredientes Recomendados
                    </h1>
                    <p className="text-lg text-[#6b5b4f] max-w-2xl">
                        Conheça os melhores ingredientes para pele com rosácea e como escolhê-los
                    </p>
                    <div className="h-1 w-20 bg-[#c94a4a] mt-6"></div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introdução */}
                <section id="recomendados" className="mb-16">
                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm">
                        <h2
                            className="text-2xl font-bold text-[#2b2621] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Ingredientes Recomendados: Porquê Estes?
                        </h2>
                        <p className="text-lg text-[#2b2621] leading-relaxed">
                            Na pele com rosácea, os ingredientes mais úteis são aqueles que <strong>reduzem a inflamação, reforçam a barreira cutânea, melhoram a hidratação e diminuem a reatividade da pele</strong>. Estes objetivos funcionam em conjunto para criar um ambiente cutâneo mais estável e resiliente.
                        </p>
                    </div>
                </section>

                {/* Produtos Recomendados vs A Evitar */}
                <section id="escolher-produtos" className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-10"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Escolher os Produtos Certos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Recomendados */}
                        <div className="bg-white border-l-8 border-[#c94a4a] rounded-sm shadow-md p-10 hover:shadow-lg transition-all duration-300">
                            <div className="text-4xl mb-4">✅</div>
                            <h3
                                className="text-2xl font-bold text-[#2b2621] mb-6"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Produtos Recomendados
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Hidratantes para pele sensível',
                                    'Protetor solar diário (SPF elevado)',
                                    'Formulações simples',
                                    'Sem fragrância',
                                    'Ingredientes calmantes',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-[#c94a4a] font-bold mr-3">▸</span>
                                        <span className="text-[#6b5b4f]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* A Evitar */}
                        <div className="bg-white border-l-8 border-[#8b3a3a] rounded-sm shadow-md p-10 hover:shadow-lg transition-all duration-300">
                            <div className="text-4xl mb-4">❌</div>
                            <h3
                                className="text-2xl font-bold text-[#2b2621] mb-6"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Produtos a Evitar
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Denatured alcohol',
                                    'Fragrâncias fortes',
                                    'Menthol and camphor',
                                    'Sulfatos agressivos',
                                    'Ácidos fortes',
                                    'Esfoliantes abrasivos',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-[#8b3a3a] font-bold mr-3">✕</span>
                                        <span className="text-[#6b5b4f]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Ingredientes Recomendados */}
                <section id="6-ingredientes" className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-12"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Os 6 Ingredientes Essenciais
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ingredients.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-t-4 border-[#c94a4a] rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>

                                <h3
                                    className="text-2xl font-bold text-[#2b2621] mb-2"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {item.name}
                                </h3>

                                <div className="inline-block mb-4">
                                    <span className="px-3 py-1 bg-[#c94a4a] text-white text-xs font-bold rounded-sm">
                                        {item.type}
                                    </span>
                                </div>

                                <p className="text-[#6b5b4f] leading-relaxed mb-6 flex-grow">
                                    {item.desc}
                                </p>

                                <div className="border-t border-[#e8dfd5] pt-6">
                                    <p className="text-sm font-bold text-[#2b2621] mb-3">Benefícios:</p>
                                    <ul className="space-y-2">
                                        {item.benefits.map((benefit, bidx) => (
                                            <li key={bidx} className="flex items-start">
                                                <span className="text-[#c94a4a] font-bold mr-2 text-sm">▸</span>
                                                <span className="text-[#6b5b4f] text-sm">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Introdução Gradual */}
                <section id="introducao-gradual" className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm mb-16">
                    <h2
                        className="text-3xl font-bold mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        ⚕️ Introdução Gradual Recomendada
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Alguns ingredientes, como o <strong>azelaic acid</strong>, podem provocar ligeira sensação de picada inicial, especialmente em pele muito sensibilizada. Por isso, recomenda-se uma introdução gradual e respeitadora do limiar de tolerância individual.
                    </p>
                    <p className="text-base leading-relaxed">
                        Se apresentar reações adversas, reduza a frequência de aplicação ou consulte um dermatologista para aconselhamento personalizado.
                    </p>
                </section>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#e8dfd5]">
                    <Link href="/ingredientes" className="text-[#c94a4a] hover:text-[#8b3a3a] font-bold">
                        ← Voltar ao Índice
                    </Link>
                    <Link href="/ingredientes/a-evitar" className="text-[#c94a4a] hover:text-[#8b3a3a] font-bold">
                        Próxima: Ingredientes a Evitar →
                    </Link>
                </div>
            </div>
        </div>
    );
}
