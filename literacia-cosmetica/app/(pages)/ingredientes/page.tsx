'use client';

import Link from 'next/link';

export default function Ingredientes() {
    const ingredients = [
        {
            icon: '🧴',
            name: 'Niacinamida',
            type: 'Ativo',
            desc: 'A niacinamida é um dos ingredientes mais interessantes para pele com rosácea. Atua como agente anti-inflamatório e ajuda a melhorar a função de barreira cutânea, estimulando a síntese de ceramidas e reduzindo a perda transepidérmica de água.',
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
            name: 'Ácido Azelaico',
            type: 'Ativo',
            desc: 'O ácido azelaico é um dos ativos mais relevantes na rosácea, sobretudo na forma pápulo-pustulosa. Tem ação anti-inflamatória, antimicrobiana e queratolítica suave.',
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
            name: 'Ceramidas',
            type: 'Excipiente',
            desc: 'As ceramidas são lípidos naturalmente presentes na camada mais externa da pele e são essenciais para manter a barreira cutânea íntegra. Na rosácea, esta barreira encontra-se frequentemente fragilizada.',
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
            name: 'Ácido Hialurónico',
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

    const alcoholTypes = [
        {
            name: 'Alcohol Denat.',
            desc: 'Álcool desnaturalizado — o mais comum em cosméticos, rapidamente volátil',
        },
        {
            name: 'Ethanol',
            desc: 'Presente em géis, tónicos e produtos "oil-free"',
        },
        {
            name: 'Isopropyl Alcohol',
            desc: 'Álcool isopropílico — frequentemente usado em produtos de limpeza e esfoliantes',
        },
        {
            name: 'SD Alcohol',
            desc: 'Álcool solúvel — variantes como SD Alcohol 38-A, SD Alcohol 40, entre outras',
        },
        {
            name: 'Benzyl Alcohol',
            desc: 'Álcool benzílico — usado como conservante e solvente, também volátil',
        },
    ];

    const physicalExfoliants = [
        {
            name: 'Polyethylene (PE)',
            desc: 'Microesferas de plástico muito comuns em esfoliantes faciais comerciais',
        },
        {
            name: 'Silica (Sílica)',
            desc: 'Partículas de sílica usadas em esfoliantes, com textura abrasiva',
        },
        {
            name: 'Sodium Chloride (Sal)',
            desc: 'Cristais de sal em grânulos grossos, que variam em tamanho e causam abrasão desuniforme',
        },
        {
            name: 'Sucrose (Açúcar)',
            desc: 'Embora seja percecionado como suave, os cristais em grânulos grossos têm bordas irregulares',
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
                        Ingredientes Cosméticos
                    </h1>
                    <p className="text-lg text-[#6b5b4f] max-w-2xl">
                        Guia completo sobre ingredientes seguros e eficazes para peles com rosácea
                    </p>
                    <div className="h-1 w-20 bg-[#c94a4a] mt-6"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introdução */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm">
                        <h2
                            className="text-2xl font-bold text-[#2b2621] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Navegue pelos Tópicos
                        </h2>
                        <p className="text-lg text-[#2b2621] leading-relaxed">
                            A escolha correta de ingredientes é fundamental no tratamento da rosácea. Este guia está organizado em quatro secções principais para ajudá-lo a compreender o que usar, o que evitar, como ler rótulos e como validar a eficácia real dos produtos.
                        </p>
                    </div>
                </section>

                {/* Cards Grid */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1: Ingredientes Recomendados */}
                        <Link href="/ingredientes/recomendados">
                            <div className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-[#c94a4a] h-full flex flex-col cursor-pointer">
                                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] p-8 border-b border-[#e8dfd5]">
                                    <div className="text-5xl mb-4">✅</div>
                                    <h3
                                        className="text-2xl font-bold text-[#2b2621] mb-2"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        Ingredientes Recomendados
                                    </h3>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <p className="text-[#6b5b4f] leading-relaxed mb-6">
                                        Conheça os melhores ingredientes para pele com rosácea: niacinamida, ácido azelaico, ceramidas. Aprenda como escolher produtos adequados e introduzir ativos gradualmente.
                                    </p>
                                    <div className="mt-auto">
                                        <p className="text-xs font-bold text-[#c94a4a] mb-3 uppercase">Inclui:</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-[#c94a4a] font-bold mr-2 text-sm">▸</span>
                                                <span className="text-[#6b5b4f] text-sm">Ingredientes Recomendados</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#c94a4a] font-bold mr-2 text-sm">▸</span>
                                                <span className="text-[#6b5b4f] text-sm">Escolher os Produtos Certos</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#c94a4a] font-bold mr-2 text-sm">▸</span>
                                                <span className="text-[#6b5b4f] text-sm">Os 6 Ingredientes Essenciais</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#c94a4a] font-bold mr-2 text-sm">▸</span>
                                                <span className="text-[#6b5b4f] text-sm">Introdução Gradual</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-[#faf8f5] px-8 py-4 border-t border-[#e8dfd5] flex items-center justify-between">
                                    <span className="text-[#c94a4a] font-bold text-sm">Explorar</span>
                                    <span className="text-[#c94a4a] text-lg">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2: Ingredientes a Evitar */}
                        <Link href="/ingredientes/a-evitar">
                            <div className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-[#8b3a3a] h-full flex flex-col cursor-pointer">
                                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] p-8 border-b border-[#e8dfd5]">
                                    <div className="text-5xl mb-4">🚫</div>
                                    <h3
                                        className="text-2xl font-bold text-[#2b2621] mb-2"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        Ingredientes a Evitar
                                    </h3>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <p className="text-[#6b5b4f] leading-relaxed mb-6">
                                        Descubra quais ingredientes agravam a rosácea: álcoois voláteis, fragrâncias fortes, esfoliantes abrasivos. Entenda o impacto de cada um na sua pele.
                                    </p>
                                    <div className="mt-auto">
                                        <p className="text-xs font-bold text-[#8b3a3a] mb-3 uppercase">Inclui:</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-[#8b3a3a] font-bold mr-2 text-sm">▸</span>
                                                <span className="text-[#6b5b4f] text-sm">Porquê Evitar Ingredientes</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#8b3a3a] font-bold mr-2 text-sm">▸</span>
                                                <span className="text-[#6b5b4f] text-sm">Álcool Volátil</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#8b3a3a] font-bold mr-2 text-sm">▸</span>
                                                <span className="text-[#6b5b4f] text-sm">Fragrâncias e Perfumes</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#8b3a3a] font-bold mr-2 text-sm">▸</span>
                                                <span className="text-[#6b5b4f] text-sm">Esfoliantes Físicos</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-[#faf8f5] px-8 py-4 border-t border-[#e8dfd5] flex items-center justify-between">
                                    <span className="text-[#8b3a3a] font-bold text-sm">Explorar</span>
                                    <span className="text-[#8b3a3a] text-lg">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 3: Guia de Rótulos */}
                        <Link href="/ingredientes/guia-rotulos">
                            <div className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-[#c94a4a] h-full flex flex-col cursor-pointer">
                                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] p-8 border-b border-[#e8dfd5]">
                                    <div className="text-5xl mb-4">📋</div>
                                    <h3
                                        className="text-2xl font-bold text-[#2b2621] mb-2"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        Guia de Leitura de Rótulos
                                    </h3>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <p className="text-[#6b5b4f] leading-relaxed">
                                        Aprenda a ler rótulos corretamente e a identificar ingredientes seguros nos produtos cosméticos. Guia prático com exemplos reais para fazer escolhas informadas.
                                    </p>
                                </div>
                                <div className="bg-[#faf8f5] px-8 py-4 border-t border-[#e8dfd5] flex items-center justify-between">
                                    <span className="text-[#c94a4a] font-bold text-sm">Explorar</span>
                                    <span className="text-[#c94a4a] text-lg">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 4: Métodos de Avaliação */}
                        <Link href="/ingredientes/metodos-avaliacao">
                            <div className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-[#c94a4a] h-full flex flex-col cursor-pointer">
                                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] p-8 border-b border-[#e8dfd5]">
                                    <div className="text-5xl mb-4">🔬</div>
                                    <h3
                                        className="text-2xl font-bold text-[#2b2621] mb-2"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        Métodos de Avaliação
                                    </h3>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <p className="text-[#6b5b4f] leading-relaxed">
                                        Conheça os métodos científicos para validar a eficácia real de produtos: colorimetria, fotografia digital, TEWL, corneometria.
                                    </p>
                                </div>
                                <div className="bg-[#faf8f5] px-8 py-4 border-t border-[#e8dfd5] flex items-center justify-between">
                                    <span className="text-[#c94a4a] font-bold text-sm">Explorar</span>
                                    <span className="text-[#c94a4a] text-lg">→</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Important Note */}
                <section className="mt-16">
                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#8b3a3a] p-10 rounded-sm shadow-sm">
                        <h2
                            className="text-2xl font-bold text-[#2b2621] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            ⚠️ Informação Importante
                        </h2>
                        <p className="text-lg text-[#2b2621] leading-relaxed">
                            Este guia fornece informações educacionais sobre ingredientes cosméticos. Nem todos os ingredientes funcionam igualmente para todos. Se experienciar reações adversas a um produto, consulte um dermatologista. A introdução de novos produtos deve ser feita gradualmente, respeitando o seu limiar de tolerância individual.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

