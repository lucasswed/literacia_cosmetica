'use client';

import Link from 'next/link';

export default function GuiaRotulos() {
    const tips = [
        'Procura a lista de ingredientes (INCI) no rótulo — esta indica os ingredientes por ordem decrescente de concentração',
        'Identifica álcoois voláteis em MAIÚSCULAS terminados em "ALCOHOL" (Alcohol Denat., Ethanol, etc.)',
        'Evita produtos com "Fragrance" ou "Perfume" nos primeiros 5 ingredientes',
        'Procura "Fragrance-free" ou "Unscented" quando possível',
        'Evita qualquer coisa que mencione "esfoliante", "scrub" ou "peeling" com partículas físicas',
        'Consulta a lista de ingredientes (INCI) antes de aplicar novos produtos — esta é a informação mais confiável',
        'Alguns ingredientes têm nomes complexos: procura online por "INCI [nome do ingrediente]" se tiver dúvidas',
        'Se um produto não mostrar a lista INCI completa, é melhor evitar — transparência é essencial',
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
                        Guia de Leitura de Rótulos
                    </h1>
                    <p className="text-lg text-[#6b5b4f] max-w-2xl">
                        Aprenda a ler rótulos e identificar ingredientes seguros
                    </p>
                    <div className="h-1 w-20 bg-[#c94a4a] mt-6"></div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* SEÇÃO GUIA PRÁTICO */}
                <section id="guia-rotulos" className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-8"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        📋 Guia Prático de Leitura de Rótulos
                    </h2>

                    {/* Imagem do Rótulo */}
                    <div className="bg-white rounded-sm shadow-md overflow-hidden mb-8">
                        <img
                            src="/rotulo.jpeg"
                            alt="Exemplo de rótulo de produto cosmético com ingredientes seguros para rosácea"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Explicação */}
                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm mb-12">
                        <h3
                            className="text-2xl font-bold text-[#2b2621] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Como Ler um Rótulo
                        </h3>
                        <div className="space-y-4">
                            <p className="text-lg text-[#2b2621] leading-relaxed">
                                Procure a <strong>lista INCI (International Nomenclature of Cosmetic Ingredients)</strong> que mostra os ingredientes por ordem decrescente de concentração. Os primeiros ingredientes são os mais importantes!
                            </p>
                            <div className="bg-white border-l-4 border-[#c94a4a] p-6 rounded-sm">
                                <p className="text-base text-[#2b2621] font-semibold">
                                    💡 <strong>Dica:</strong> Se os primeiros 5 ingredientes não forem problemáticos, o produto tem grandes probabilidades de ser bem tolerado. Se vires Fragrance, álcool ou esfoliantes nesses lugares, passa!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DICAS PRÁTICAS */}
                <section id="dicas-praticas" className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-10"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        💡 Dicas Práticas
                    </h2>

                    <div className="space-y-4">
                        {tips.map((tip, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-l-8 border-[#c94a4a] rounded-sm shadow-sm p-6 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#c94a4a] text-white font-bold text-sm">
                                            {idx + 1}
                                        </span>
                                    </div>
                                    <p className="text-[#2b2621] leading-relaxed pt-1">{tip}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* INFORMAÇÃO IMPORTANTE */}
                <section className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm mb-16">
                    <h3
                        className="text-2xl font-bold mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        ⚠️ Informação Importante
                    </h3>
                    <div className="space-y-4 text-lg leading-relaxed">
                        <p>
                            Mesmo que um produto cumpra todos os critérios, existem sempre variações individuais. A pele com rosácea pode reagir de forma imprevista a certos produtos.
                        </p>
                        <p>
                            <strong>Teste sempre novos produtos de forma gradual:</strong> aplica uma pequena quantidade no antebraço primeiro para descartar reações alérgicas.
                        </p>
                        <p>
                            Se depois de 1-2 semanas de uso regular nota ardor, prurido ou vermelhidão aumentada, descontinua o produto e consulta um dermatologista.
                        </p>
                    </div>
                </section>

                {/* ENQUADRAMENTO TECNOLÓGICO */}
                <section className="bg-white border-l-4 border-[#c94a4a] rounded-sm shadow-md p-10 mb-16">
                    <h3
                        className="text-2xl font-bold text-[#2b2621] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        🔬 Enquadramento Tecnológico
                    </h3>
                    <div className="space-y-4">
                        <p className="text-[#2b2621] leading-relaxed">
                            A lista INCI é regulada internacionalmente e fornece informação objetiva e confiável. Diferentemente da publicidade, que pode ser enganosa, a lista INCI é obrigatória e legal.
                        </p>
                        <p className="text-[#2b2621] leading-relaxed">
                            <strong>Por ordem decrescente:</strong> isto significa que o ingrediente no topo está em maior quantidade. Se um produto promove "10% Niacinamida" mas a niacinamida está no 8º lugar na lista, há discrepância — algo está errado.
                        </p>
                        <p className="text-[#2b2621] leading-relaxed">
                            Utilizar esta informação técnica para decisões de compra transforma-te de consumidor passivo num consumidor informado, capaz de proteger a saúde da tua pele.
                        </p>
                    </div>
                </section>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#e8dfd5]">
                    <Link href="/ingredientes/a-evitar" className="text-[#c94a4a] hover:text-[#8b3a3a] font-bold">
                        ← Anterior: Ingredientes a Evitar
                    </Link>
                    <Link href="/ingredientes/metodos-avaliacao" className="text-[#c94a4a] hover:text-[#8b3a3a] font-bold">
                        Próxima: Métodos de Avaliação →
                    </Link>
                </div>
            </div>
        </div>
    );
}
