'use client';

export default function Rotina() {
    const morningsteps = [
        {
            number: '1',
            title: 'Limpeza',
            icon: '💧',
            details: [
                'Limpar a face com água morna ou fria, nunca com água quente',
                'Aplicar um gel de limpeza sem sabão, sulfatos ou esfoliantes',
                'pH ideal entre 5 a 5,5',
                'Espalhar levemente com movimentos circulares leves',
                'Evitar a área dos olhos',
                'Molhar novamente com água fria ou morna',
                'Secar com batidas leves usando uma toalha macia (nunca esfregar)',
            ],
        },
        {
            number: '2',
            title: 'Hidratação',
            icon: '🧴',
            details: [
                'Creme hidratante para peles sensíveis ou rosácea',
                'Espalhar na face com movimentos suaves de baixo para cima',
                'Movimentos de dentro para fora',
                'Deixar absorver durante 1 a 2 minutos',
                'Ideal com ceramidas, niacinamida ou alóe vera',
                'Sem perfume ou álcoois voláteis',
            ],
        },
        {
            number: '3',
            title: 'Proteção Solar (⭐ ESSENCIAL)',
            icon: '☀️',
            details: [
                'Utilizar filtros solares FPS50+ com filtros minerais',
                'Óxido de zinco e dióxido de titânio',
                'Aplicar cerca de ¼ de uma colher na face',
                'Espalhar uniformemente em toda a face, pescoço e orelhas',
                'Usar mesmo em dias nublados',
                'Filtros minerais de amplo espectro',
                'Sem perfume, sem álcool e de textura leve e não gordurosa',
                '⭐ Este é o passo mais importante!',
            ],
        },
    ];

    const nightsteps = [
        {
            number: '1',
            title: 'Limpeza',
            icon: '💧',
            details: [
                'Limpar a face com água morna ou fria, nunca com água quente',
                'Aplicar um gel de limpeza sem sabão, sulfatos ou esfoliantes',
                'pH ideal entre 5 a 5,5',
                'Espalhar levemente com movimentos circulares leves',
                'Evitar a área dos olhos',
                'Molhar novamente com água fria ou morna',
                'Secar com batidas leves usando uma toalha macia',
            ],
        },
        {
            number: '2',
            title: 'Tratamento (Opcional)',
            icon: '🔬',
            details: [
                'Nesta fase, aplicar ingredientes ativos se necessário',
                'Ácido azelaico (se tolerable)',
                'Niacinamida',
                'Alóe vera calmante',
                'Sempre em pequena quantidade',
                'Deixar absorver completamente antes do próximo passo',
            ],
        },
        {
            number: '3',
            title: 'Hidratação',
            icon: '🧴',
            details: [
                'Creme hidratante calmante para a noite',
                'Espalhar na face com movimentos suaves',
                'Movimentos de baixo para cima e de dentro para fora',
                'Deixar absorver',
                'Ideal com ceramidas, niacinamida ou alóe vera',
                'Produto mais rico que o da manhã é aceitável',
            ],
        },
    ];

    const toAvoid = [
        {
            icon: '❌',
            title: 'Não esfregar a pele com toalha',
            desc: 'Secar batendo suavemente apenas',
        },
        {
            icon: '❌',
            title: 'Não usar ferramentas de limpeza',
            desc: 'Esponjas, escovas e rolos são muito agressivos para rosácea',
        },
        {
            icon: '❌',
            title: 'Não fazer esfoliação física',
            desc: 'Partículas causam microlesões e irritação',
        },
        {
            icon: '❌',
            title: 'Não fazer peelings químicos caseiros',
            desc: 'pH muito baixo irrita a pele sensibilizada',
        },
        {
            icon: '❌',
            title: 'Não usar água quente',
            desc: 'Causa vasodilatação, flushing e agravamento de sintomas',
        },
        {
            icon: '❌',
            title: 'Não aplicar produtos com pressão',
            desc: 'Espalhar sempre suavemente com movimentos leves',
        },
        {
            icon: '❌',
            title: 'Não misturar muitos ativos',
            desc: 'Introduzir produto por produto, um de cada vez',
        },
        {
            icon: '❌',
            title: 'Não tocar no rosto durante o dia',
            desc: 'Minimiza transferência de bactérias e irritantes',
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
                        Rotina
                    </h1>
                    <p className="text-lg text-[#6b5b4f] max-w-2xl">
                        Rotinas simples e eficazes para cuidar de pele com rosácea
                    </p>
                    <div className="h-1 w-20 bg-[#c94a4a] mt-6"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Introdução */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm">
                        <h2
                            className="text-2xl font-bold text-[#2b2621] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Princípio Fundamental: Menos é Mais
                        </h2>
                        <p className="text-lg text-[#2b2621] leading-relaxed mb-4">
                            Os produtos dermocosméticos para rosácea devem ser aplicados de forma <strong>suave e em pouca quantidade</strong>, para evitar irritação da pele.
                        </p>
                        <p className="text-lg text-[#2b2621] leading-relaxed">
                            A pele com rosácea é <strong>hipersensível</strong> e reage mal a rotinas excessivamente complexas ou produtos agressivos. <strong>O objetivo é limpar, hidratar, proteger e tratar a pele sem comprometer a barreira cutânea.</strong>
                        </p>
                    </div>
                </section>

                {/* Rotina Matinal */}
                <section className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-12"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        🌅 Rotina Matinal (3 Passos)
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1 space-y-8">
                            {morningsteps.map((step, idx) => (
                                <details
                                    key={idx}
                                    className="bg-white border-l-8 border-[#c94a4a] rounded-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                                >
                                    <summary className="flex items-start gap-6 p-8 cursor-pointer hover:bg-[#faf8f5] transition-colors duration-200 list-none">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#c94a4a] to-[#a03a3a] text-white text-2xl font-bold">
                                                {step.number}
                                            </div>
                                        </div>
                                        <div className="flex-1 flex items-center justify-between min-w-0">
                                            <h3
                                                className="text-2xl font-bold text-[#2b2621]"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                {step.icon} {step.title}
                                            </h3>
                                            <span className="text-2xl text-[#c94a4a] font-bold flex-shrink-0 ml-4">
                                                ▼
                                            </span>
                                        </div>
                                    </summary>

                                    <div className="px-8 pb-8 border-t border-[#e8dfd5] pt-6">
                                        <ul className="space-y-2">
                                            {step.details.map((detail, didx) => (
                                                <li key={didx} className="flex items-start">
                                                    <span className="text-[#c94a4a] font-bold mr-3 mt-1">▸</span>
                                                    <span className="text-[#6b5b4f]">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </details>
                            ))}
                        </div>
                        <div className="flex-shrink-0 lg:w-80">
                            <div className="bg-white rounded-sm shadow-md overflow-hidden sticky top-24">
                                <img
                                    src="/rotina_diurna.jpeg"
                                    alt="Infográfico da rotina matinal para rosácea"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rotina Noturna */}
                <section className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-12"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        🌙 Rotina Noturna (3 Passos)
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1 space-y-8">
                            {nightsteps.map((step, idx) => (
                                <details
                                    key={idx}
                                    className="bg-white border-l-8 border-[#d4a574] rounded-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                                >
                                    <summary
                                        className="w-full flex items-start gap-6 p-8 text-left hover:bg-[#faf8f5] transition-colors duration-200 cursor-pointer list-none"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b49060] text-white text-2xl font-bold">
                                                {step.number}
                                            </div>
                                        </div>
                                        <div className="flex-1 flex items-center justify-between min-w-0">
                                            <h3
                                                className="text-2xl font-bold text-[#2b2621]"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                {step.icon} {step.title}
                                            </h3>
                                            <span className="text-2xl text-[#d4a574] font-bold flex-shrink-0 ml-4">
                                                ▼
                                            </span>
                                        </div>
                                    </summary>

                                    <div className="px-8 pb-8 border-t border-[#e8dfd5] pt-6">
                                        <ul className="space-y-2">
                                            {step.details.map((detail, didx) => (
                                                <li key={didx} className="flex items-start">
                                                    <span className="text-[#d4a574] font-bold mr-3 mt-1">▸</span>
                                                    <span className="text-[#6b5b4f]">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </details>
                            ))}
                        </div>
                        <div className="flex-shrink-0 lg:w-80">
                            <div className="bg-white rounded-sm shadow-md overflow-hidden sticky top-24">
                                <img
                                    src="/rotina_noturna.jpeg"
                                    alt="Infográfico da rotina noturna para rosácea"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* O que Evitar */}
                <section className="mb-16">
                    <h2
                        className="text-4xl font-bold text-[#2b2621] mb-12"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        ⚠️ O Que Evitar
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {toAvoid.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-l-4 border-[#8b3a3a] rounded-sm shadow-sm p-6 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{item.icon}</span>
                                    <div className="flex-1">
                                        <h3
                                            className="text-lg font-bold text-[#2b2621] mb-2"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-[#6b5b4f] text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resumo Final */}
                <section className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm">
                    <h2
                        className="text-3xl font-bold mb-6"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        ✓ Resumo da Rotina Ideal
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <p className="text-lg font-bold mb-3">Princípios Essenciais:</p>
                            <ul className="space-y-2">
                                {[
                                    'Simplicidade — rotina com poucos passos',
                                    'Suavidade — movimentos leves, sem fricção',
                                    'Consistência — manter a mesma rotina regularmente',
                                    'Moderação — pouca quantidade de cada produto',
                                    'Paciência — esperar absorção entre produtos',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="font-bold mr-3">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border-t border-white/30 pt-6">
                            <p className="text-base leading-relaxed italic">
                                A consistência e a paciência são fundamentais. Alterações na pele de rosácea podem levar 4 a 6 semanas para serem visíveis. Não abandone a rotina mesmo que os resultados não sejam imediatos.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
