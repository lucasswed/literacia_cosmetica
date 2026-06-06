'use client';

import Link from 'next/link';

export default function IngredientesAEvitar() {
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
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/ingredientes" className="text-[#c94a4a] hover:text-[#8b3a3a] text-lg">
                            ← Voltar
                        </Link>
                    </div>
                    <h1
                        className="text-5xl md:text-6xl font-bold text-[#2b2621] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Ingredientes a Evitar
                    </h1>
                    <p className="text-lg text-[#6b5b4f] max-w-2xl">
                        Compreenda quais ingredientes prejudicam a pele com rosácea
                    </p>
                    <div className="h-1 w-20 bg-[#c94a4a] mt-6"></div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* SEÇÃO A EVITAR */}
                <section id="evitar-ingredientes" className="mb-16">
                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#8b3a3a] p-10 rounded-sm shadow-sm">
                        <h2
                            className="text-2xl font-bold text-[#2b2621] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Porquê Evitar Certos Ingredientes?
                        </h2>
                        <div className="space-y-4 text-[#2b2621] leading-relaxed">
                            <p>
                                Na rosácea, a tolerância da pele está reduzida. Certos ingredientes cosméticos podem desencadear ou agravar sintomas significativamente. <strong>O objetivo não é eliminar todos os ativos, mas evitar aqueles que aumentam a irritação, a vasodilatação ou a fragilidade da barreira cutânea.</strong>
                            </p>
                            <p>
                                A barreira cutânea já se encontra comprometida pela inflamação crónica, tornando a pele mais permeável a irritantes e mais sensível a agentes externos. Quando ingredientes inadequados são aplicados, ativam vias inflamatórias, causam vasodilatação, aumentam a perda de água transepidérmica e desencadeiam respostas neurogénicas que se traduzem em ardor, vermelhidão e desconforto.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Álcool Volátil */}
                <section id="alcool-volatil" className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-8"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        🚫 Álcool Volátil
                    </h2>

                    <div className="bg-white border-l-8 border-[#8b3a3a] rounded-sm shadow-md p-10 mb-8">
                        <p className="text-lg text-[#2b2621] leading-relaxed mb-6">
                            O álcool volátil deve ser evitado porque pode <strong>secar a pele, aumentar a perda de água e agravar a vermelhidão</strong>. Em peles com rosácea, esta agressão pode ser suficiente para desencadear ardor e flushing.
                        </p>
                        <div className="bg-[#f5f3f0] p-6 rounded-sm border border-[#e8dfd5] mb-6">
                            <p className="text-sm text-[#6b5b4f] font-semibold">
                                💡 <strong>Nota importante:</strong> É importante distinguir este tipo de álcool dos álcoois gordos, que geralmente têm função emoliente e não são, por si, problemáticos.
                            </p>
                        </div>
                        <p className="text-sm font-bold text-[#2b2621] mb-4">Álcoois voláteis a evitar nos rótulos:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {alcoholTypes.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-l-4 border-[#8b3a3a] rounded-sm shadow-sm p-6 hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="font-bold text-[#2b2621] text-lg mb-2">{item.name}</h3>
                                <p className="text-[#6b5b4f] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] p-8 rounded-sm border border-[#e8dfd5]">
                        <p className="text-[#2b2621] leading-relaxed">
                            Estes álcoois são facilmente identificados nos rótulos por estarem em letras maiúsculas e terminarem em <strong>"ALCOHOL"</strong>, e são frequentemente encontrados em <strong>géis de limpeza, tónicos, primers, produtos "matificantes" e produtos com efeito refrescante imediato.</strong>
                        </p>
                    </div>
                </section>

                {/* Fragrâncias */}
                <section id="fragrancias" className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-8"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        🚫 Fragrâncias e Perfumes
                    </h2>

                    <div className="bg-white border-l-8 border-[#8b3a3a] rounded-sm shadow-md p-10">
                        <p className="text-lg text-[#2b2621] leading-relaxed mb-6">
                            As fragrâncias são uma das causas mais frequentes de irritação em pele sensível. <strong>Na rosácea, como a pele já apresenta limiar de tolerância mais baixo, estes compostos podem provocar ardor, prurido e vermelhidão.</strong>
                        </p>

                        <div className="bg-[#faf8f5] border border-[#e8dfd5] rounded-sm p-8 mb-6">
                            <p className="text-[#2b2621] leading-relaxed">
                                Mesmo produtos que parecem "suaves" podem conter perfume suficiente para desencadear sintomas, pelo que o ideal é <strong>optar por formulações sem fragrância (fragrance-free ou unscented).</strong>
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] p-8 rounded-sm border border-[#e8dfd5]">
                            <p className="text-sm text-[#6b5b4f] leading-relaxed">
                                <strong>⚠️ Atenção:</strong> Mesmo fragrâncias "naturais" ou "essenciais" podem ser problemáticas, pois os óleos essenciais contêm concentrações elevadas de compostos aromáticos que são altamente reativos para peles sensíveis.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Esfoliantes Físicos */}
                <section id="esfoliantes" className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-8"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        🚫 Esfoliantes Físicos
                    </h2>

                    <div className="bg-white border-l-8 border-[#8b3a3a] rounded-sm shadow-md p-10 mb-8">
                        <p className="text-lg text-[#2b2621] leading-relaxed mb-4">
                            A fricção mecânica dos grânulos esfoliantes <strong>agride fisicamente as células da epiderme, provocando microlesões e stress celular</strong>, aumentando ainda mais a inflamação e as crises na rosácea.
                        </p>
                    </div>

                    {/* Explicação Científica */}
                    <div className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm mb-12 shadow-lg">
                        <h3
                            className="text-2xl font-bold mb-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Como Funciona o Mecanismo?
                        </h3>
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p>
                                Podes imaginar os <strong>recetores TLR2</strong> da tua pele como <strong>"alarmes de segurança"</strong> que na rosácea já estão demasiado sensíveis.
                            </p>
                            <p>
                                Quando usas um esfoliante com grânulos, a fricção física arranha as células da pele. Para o recetor TLR2, esse arranhão é um sinal de ataque grave.
                            </p>
                            <p>
                                O alarme dispara com força total, ordenando à pele que liberte enzimas que vão provocar <strong>vermelhidão imediata, sensação de queimadura e o aparecimento de novas borbulhas com pus.</strong>
                            </p>
                            <p className="font-bold pt-4">
                                Por isso, o esfoliante físico atua como um verdadeiro <strong>detonador de crises na rosácea.</strong>
                            </p>
                        </div>
                    </div>

                    {/* Esfoliantes a Evitar */}
                    <div className="mb-8">
                        <h3
                            className="text-2xl font-bold text-[#2b2621] mb-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Esfoliantes Físicos Agressivos a Evitar
                        </h3>
                        <p className="text-[#6b5b4f] mb-8 leading-relaxed">
                            Os esfoliantes físicos funcionam por atrito mecânico, removendo as células mortas da superfície da pele através de partículas abrasivas:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {physicalExfoliants.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-l-4 border-[#8b3a3a] rounded-sm shadow-sm p-6 hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="font-bold text-[#2b2621] text-lg mb-2">{item.name}</h3>
                                <p className="text-[#6b5b4f] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#e8dfd5]">
                    <Link href="/ingredientes/recomendados" className="text-[#c94a4a] hover:text-[#8b3a3a] font-bold">
                        ← Anterior: Ingredientes Recomendados
                    </Link>
                    <Link href="/ingredientes" className="text-[#c94a4a] hover:text-[#8b3a3a] font-bold">
                        Voltar ao Índice →
                    </Link>
                </div>
            </div>
        </div>
    );
}
