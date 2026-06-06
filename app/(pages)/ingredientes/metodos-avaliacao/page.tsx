'use client';

import Link from 'next/link';

export default function MetodosAvaliacao() {
    const methods = [
        {
            emoji: '🎨',
            title: 'Colorimetria/Espectrofotometria',
            equipment: 'Mexameter ou Chromameter',
            description:
                'Mede o índice de eritema (vermelhidão) na pele através de uma sonda com LEDs que emitem comprimentos de onda de luz muito específicos. Este equipamento permite avaliar a eficácia de produtos cosméticos na redução da vermelhidão de forma exata e objetiva.',
            advantages: ['Medição precisa de eritema', 'Acompanhamento quantitativo', 'Resultados matemáticos'],
            color: '#c94a4a',
        },
        {
            emoji: '📸',
            title: 'Fotografia Digital Padronizada',
            equipment: 'VISIA Skin Analysis System',
            description:
                'Utiliza luz polarizada cruzada para separar os cromóforos da pele. Ao isolar matematicamente a hemoglobina, é possível quantificar a área vascular exata e monitorizar a diminuição da vermelhidão difusa (eritema) ao longo do tempo com o uso de produtos cosméticos.',
            advantages: ['Análise 100% matemática', 'Visibilização de vasos sanguíneos', 'Comparação fotográfica'],
            color: '#c94a4a',
        },
        {
            emoji: '💧',
            title: 'Perda de Água Transepidérmica',
            equipment: 'TEWL - Tewameter',
            description:
                'Mede a eficácia da barreira cutânea em reter a humidade. Os doentes com rosácea apresentam um aumento da TEWL (perda de água transepidérmica) devido à disfunção da barreira, tornando este indicador fundamental para avaliar a eficácia de produtos restauradores da barreira.',
            advantages: ['Avalia função da barreira', 'Mede retenção de hidratação', 'Monitora recuperação cutânea'],
            color: '#d4a574',
        },
        {
            emoji: '💦',
            title: 'Hidratação da Epiderme',
            equipment: 'Corneometria - Corneometer',
            description:
                'Avalia a quantidade de água retida nas camadas mais superficiais da epiderme (estrato córneo). Este método é essencial para confirmar a eficácia de produtos hidratantes e sua capacidade de restaurar o conforto cutâneo.',
            advantages: ['Quantifica hidratação', 'Avalia conforto cutâneo', 'Valida eficácia de hidratantes'],
            color: '#d4a574',
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
                        Métodos de Avaliação
                    </h1>
                    <p className="text-lg text-[#6b5b4f] max-w-2xl">
                        Validação científica da eficácia de produtos cosméticos
                    </p>
                    <div className="h-1 w-20 bg-[#c94a4a] mt-6"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introdução */}
                <section className="mb-16">
                    <p className="text-lg text-[#6b5b4f] leading-relaxed mb-12">
                        A eficácia real dos produtos cosméticos para rosácea pode ser avaliada através de métodos científicos padronizados que quantificam objetivamente as melhorias na pele. Conheça os principais:
                    </p>
                </section>

                {/* Métodos */}
                <section id="metodos-avaliacao" className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {methods.map((method, idx) => (
                            <div
                                key={idx}
                                className={`bg-white border-t-4 rounded-sm shadow-md p-8 flex flex-col hover:shadow-lg transition-all duration-300`}
                                style={{ borderTopColor: method.color }}
                            >
                                <div className="text-5xl mb-3">{method.emoji}</div>

                                <h3
                                    className="text-2xl font-bold text-[#2b2621] mb-3"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {method.title}
                                </h3>
                                <p
                                    className="text-sm font-bold mb-4 px-3 py-1 rounded-sm inline-block"
                                    style={{ color: method.color, backgroundColor: `${method.color}15` }}
                                >
                                    {method.equipment}
                                </p>

                                <div
                                    className="border-l-4 p-4 rounded-sm mb-6 flex-grow"
                                    style={{ borderLeftColor: method.color, backgroundColor: '#faf8f5' }}
                                >
                                    <p className="text-[#6b5b4f] leading-relaxed text-sm">{method.description}</p>
                                </div>

                                <div className="border-t border-[#e8dfd5] pt-4">
                                    <p
                                        className="text-xs font-bold mb-3"
                                        style={{ color: method.color }}
                                    >
                                        PRINCIPAIS VANTAGENS
                                    </p>
                                    <ul className="space-y-2">
                                        {method.advantages.map((advantage, aidx) => (
                                            <li key={aidx} className="flex items-start">
                                                <span
                                                    className="font-bold mr-2 text-xs flex-shrink-0"
                                                    style={{ color: method.color }}
                                                >
                                                    ▸
                                                </span>
                                                <span className="text-[#6b5b4f] text-xs">{advantage}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Porquê É Importante */}
                <section className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm mb-16">
                    <h2
                        className="text-2xl font-bold text-[#2b2621] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        💡 Porquê Isto É Importante?
                    </h2>
                    <div className="space-y-4">
                        <p className="text-lg text-[#2b2621] leading-relaxed">
                            Estes métodos permitiram que a comunidade científica validasse a eficácia real dos produtos cosméticos para rosácea, indo muito além das afirmações meramente comerciais. Quando um produto é testado com estas metodologias, os resultados são reproduzíveis e objetivos.
                        </p>
                        <p className="text-lg text-[#2b2621] leading-relaxed">
                            Se está a considerar introduzir um novo produto, procure estudos clínicos que utilizem estas técnicas de avaliação para confirmar que os benefícios reivindicados são realmente sustentados por evidência científica.
                        </p>
                    </div>
                </section>

                {/* Dica Final */}
                <section className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm mb-16">
                    <h3
                        className="text-2xl font-bold mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        🔬 Como Avaliar um Produto?
                    </h3>
                    <div className="space-y-4 leading-relaxed text-lg">
                        <p>
                            Quando procuras um produto para rosácea, verifica se o fabricante cita estudos clínicos específicos. Os estudos de maior qualidade incluem:
                        </p>
                        <ul className="space-y-3 pl-6">
                            <li className="flex items-start">
                                <span className="mr-3">✓</span>
                                <span>Uso de um ou mais dos 4 métodos mencionados acima</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3">✓</span>
                                <span>Estudos em peles com rosácea diagnosticada (não apenas "sensíveis")</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3">✓</span>
                                <span>Duração mínima de 4-8 semanas de uso continuado</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3">✓</span>
                                <span>Resultados baseados em medições objetivas, não apenas relatos subjetivos</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#e8dfd5]">
                    <Link href="/ingredientes/guia-rotulos" className="text-[#c94a4a] hover:text-[#8b3a3a] font-bold">
                        ← Anterior: Guia de Rótulos
                    </Link>
                    <Link href="/ingredientes" className="text-[#c94a4a] hover:text-[#8b3a3a] font-bold">
                        Voltar ao Índice →
                    </Link>
                </div>
            </div>
        </div>
    );
}
