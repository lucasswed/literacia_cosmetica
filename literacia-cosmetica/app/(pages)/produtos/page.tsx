'use client';

export default function Produtos() {
    const produtos = [
        {
            id: 1,
            nome: 'Avène Creme Anti-Vermelhidão SPF 30',
            marca: 'Avène',
            emoji: '🧴',
            tipo: 'Creme de Dia',
            spf: 'SPF 30',
            descricao: 'Creme de dia suavizante anti-vermelhidão com SPF 30, indicado para adultos e especialmente adaptado à pele seca, sensível e com tendência a erupções cutâneas.',
            indicacao: 'Peles com vermelhidão e reatividade, com necessidade de ação anti-vermelhidão e fotoproteção; textura cremosa e aveludada adaptada à pele seca a muito seca.',
            principaisAtivos: [
                { nome: 'Água Termal d\'Avène', acao: 'Ajuda a suavizar a pele' },
                { nome: 'Óleo de Pongamia (Pongamia Glabra Seed Oil)', acao: 'Mantém o equilíbrio do microbioma da pele' },
                { nome: 'Glicerina', acao: 'Hidrata a pele' },
                { nome: 'Manteiga de Karité', acao: 'Base nutritiva, indicada para pele seca a muito seca' },
                { nome: 'Sistema Fotoprotetor (SPF 30 UVA/UVB)', acao: 'Proteção contra radiação solar' },
            ],
            beneficiosRosacea: [
                'Ação calmante e suavizante',
                'Redução da reatividade cutânea',
                'Redução da vermelhidão a longo prazo',
                'Proteção contra raios UVA/UVB que agravam vasodilatação',
                'Ideal para peles secas e sensibilizadas',
            ],
            inci: 'HEXANEDIOL, 4-T-BUTYLCYCLOHEXANOL, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, BLUE 1 (CI 42090), CAPRYLIC/CAPRIC TRIGLYCERIDE, CAPRYLYL GLYCOL, DECYL GLUCOSIDE, DISODIUM EDTA, FRAGRANCE (PARFUM), GLYCERYL BEHENATE, GLYCERYL DIBEHENATE, OCTYLDODECANOL, PONGAMIA GLABRA SEED OIL, PROPYLENE GLYCOL, SODIUM DEXTRAN SULFATE, SODIUM HYDROXIDE, STEARYL ALCOHOL, TITANIUM DIOXIDE (CI 77891), TOCOPHEROL, TOCOPHERYL GLUCOSIDE, TRIBEHENIN, TROPOLONE, XANTHAN GUM',
        },
        {
            id: 2,
            nome: 'ACM Azéane Creme 15% Ácido Azelaico',
            marca: 'ACM',
            emoji: '🧪',
            tipo: 'Creme Concentrado',
            spf: 'Sem SPF',
            descricao: 'Creme concentrado com 15% de ácido azelaico para uso diário, indicado para todos os tipos de pele, especialmente útil quando coexistem vermelhidão e lesões inflamatórias.',
            indicacao: 'Pele com manchas, imperfeições e vermelhidão; particularmente útil em pele com tendência a rosácea quando há vermelhidão associada a inflamação.',
            principaisAtivos: [
                { nome: 'Ácido Azelaico (15%)', acao: 'Principal ativo anti-vermelhidão e anti-imperfeições' },
                { nome: 'Niacinamida', acao: 'Componente calmante que melhora tolerância cutânea' },
                { nome: 'Glicerina', acao: 'Humectante que retém água e reduz sensação de repuxamento' },
                { nome: 'Emolientes (Octyldodecyl Myristate, etc.)', acao: 'Melhoram espalhabilidade, suavidade e conforto' },
                { nome: 'Álcoois Gordos (Cetyl & Cetearyl Alcohol)', acao: 'Emolientes estruturantes, não voláteis irritantes' },
            ],
            beneficiosRosacea: [
                'Ação anti-vermelhidão potente (ácido azelaico 15%)',
                'Redução de inflamação e imperfeições',
                'Efeito calmante através da niacinamida',
                'Complexo hidratante completo',
                'Especialmente eficaz em rosácea pápulo-pustulosa',
            ],
            inci: 'Aqua (Water), Azelaic Acid, Octyldodecyl Myristate, Isononyl Isononanoate, Isostearyl Isostearate, Cetyl Alcohol, Glyceryl Stearate, Ethoxydiglycol, Glycerin, Coco-Caprylate/Caprate, Niacinamide, Xylitol, PEG-75 Stearate, Pentylene Glycol, Cetearyl Alcohol, Ceteth-20, Steareth-20, Glyceryl Caprylate/Caprate',
        },
        {
            id: 3,
            nome: 'Rosacure Intensive Emulsão Protetora para Rosácea SPF 30',
            marca: 'Rosacure',
            emoji: '🛡️',
            tipo: 'Emulsão Protetora',
            spf: 'SPF 30',
            descricao: 'Emulsão protetora de dia anti-vermelhidão com SPF 30 especificamente formulada para pele com rosácea, combinando fotoproteção com ativos hidratantes e calmantes.',
            indicacao: 'Peles com rosácea, eritema intermitente ou permanente, com sensação de picada e ardor; necessidade de proteção solar diária.',
            principaisAtivos: [
                { nome: 'Dimethyl Sulfone (MSM)', acao: 'Ativo central para cuidado diário de pele com rosácea' },
                { nome: 'Sodium Polyglutamate', acao: 'Agente hidratante que reforça conforto cutâneo' },
                { nome: 'Sodium Hyaluronate (Ácido Hialurónico)', acao: 'Melhora hidratação e conforto em pele sensível' },
                { nome: 'Glicerina', acao: 'Humectante que reduz secura e desconforto' },
                { nome: 'Sistema de Filtros Solares', acao: 'Proteção UVA/UVB através de múltiplos filtros' },
            ],
            beneficiosRosacea: [
                'Fotoproteção diária (SPF 30)',
                'Ativos hidratantes específicos para rosácea',
                'Ação calmante e confortante',
                'Reduz ardor e reatividade',
                'Ideal para peles com eritema permanente',
            ],
            inci: 'Aqua (Water), Diethylamino Hydroxybenzoyl Hexyl Benzoate, C15-19 Alkane, C12-15 Alkyl Benzoate, Dimethyl Sulfone, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, C20-22 Alkyl Phosphate, Polymethylsilsesquioxane, C20-22 Alcohols, Octocrylene, Glycol Palmitate, Ethylhexyl Methoxycinnamate, Glycerin, 4-T-Butylcyclohexanol, Sodium Polyglutamate, Sodium Hyaluronate, Benzyl PCA, Pentylene Glycol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Acacia Senegal Gum, Phenoxyethanol, Sodium Hydroxide, Xanthan Gum, PEG-7 Trimethylolpropane Coconut Ether, BHT',
        },
    ];

    return (
        <div style={{ backgroundColor: '#faf8f5', color: '#2b2621' }}>
            <div className="max-w-6xl mx-auto px-6 py-20">

                {/* Hero Section */}
                <section className="mb-16">
                    <h1
                        className="text-6xl font-bold text-[#2b2621] mb-6"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        🧴 Produtos para Rosácea
                    </h1>

                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm">
                        <p className="text-xl text-[#2b2621] leading-relaxed mb-4">
                            Escolher um produto para rosácea envolve a avaliação cuidadosa de todos os fatores mencionados: composição, ingredientes ativos, ausência de irritantes e adequação ao tipo de pele.
                        </p>
                        <p className="text-lg text-[#6b5b4f] leading-relaxed">
                            Apresentamos 3 produtos bastante utilizados e clinicamente estudados para o cuidado de pele com rosácea, com análise detalhada de sua composição e mecanismo de ação.
                        </p>
                    </div>
                </section>

                {/* Produtos */}
                <section>
                    <div className="space-y-6">
                        {produtos.map((produto) => (
                            <details
                                key={produto.id}
                                className="group bg-white rounded-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                {/* Summary Header */}
                                <summary className="flex items-center justify-between cursor-pointer p-8 hover:bg-[#faf8f5] transition-colors duration-200 list-none">
                                    <div className="flex items-start gap-6 flex-1">
                                        <div className="text-5xl">{produto.emoji}</div>
                                        <div className="flex-1">
                                            <h2
                                                className="text-3xl font-bold text-[#2b2621] mb-2"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                {produto.nome}
                                            </h2>
                                            <p className="text-base text-[#6b5b4f]">
                                                {produto.marca} • {produto.tipo}
                                                {produto.spf !== 'Sem SPF' && ` • ${produto.spf}`}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-3xl text-[#c94a4a] font-bold flex-shrink-0 ml-4">▼</span>
                                </summary>

                                {/* Conteúdo Expandido */}
                                <div className="bg-gradient-to-br from-[#faf8f5] to-[#f5f3f0] border-t-2 border-[#e8dfd5]">
                                    <div className="p-8 space-y-10">
                                        {/* Descrição */}
                                        <div>
                                            <h3
                                                className="text-2xl font-bold text-[#2b2621] mb-4"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                📝 Descrição
                                            </h3>
                                            <p className="text-lg text-[#6b5b4f] leading-relaxed mb-4">
                                                {produto.descricao}
                                            </p>
                                            <div className="bg-white border-l-4 border-[#c94a4a] p-6 rounded-sm">
                                                <p className="text-base text-[#2b2621] leading-relaxed">
                                                    <strong>Indicação:</strong> {produto.indicacao}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Principais Ativos */}
                                        <div>
                                            <h3
                                                className="text-2xl font-bold text-[#2b2621] mb-6"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                🔬 Principais Ingredientes Ativos
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {produto.principaisAtivos.map((ativo, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="bg-white border-l-4 border-[#c94a4a] p-6 rounded-sm"
                                                    >
                                                        <p className="font-bold text-[#2b2621] mb-2">{ativo.nome}</p>
                                                        <p className="text-sm text-[#6b5b4f]">{ativo.acao}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Benefícios para Rosácea */}
                                        <div>
                                            <h3
                                                className="text-2xl font-bold text-[#2b2621] mb-6"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                ✨ Como Auxilia na Rosácea
                                            </h3>
                                            <div className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-8 rounded-sm">
                                                <ul className="space-y-3">
                                                    {produto.beneficiosRosacea.map((beneficio, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <span className="text-xl font-bold">✓</span>
                                                            <span className="text-base leading-relaxed">{beneficio}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* INCI */}
                                        <details className="group/inci">
                                            <summary className="flex items-center justify-between cursor-pointer p-6 bg-white border-2 border-[#c94a4a] rounded-sm hover:bg-[#faf8f5] transition-colors duration-200 list-none">
                                                <h3
                                                    className="text-lg font-bold text-[#2b2621]"
                                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                                >
                                                    📋 Composição Completa (INCI)
                                                </h3>
                                                <span className="text-2xl text-[#c94a4a] font-bold">▼</span>
                                            </summary>

                                            <div className="p-6 bg-white border-t-2 border-[#c94a4a]">
                                                <p className="text-sm text-[#6b5b4f] leading-relaxed font-mono bg-[#faf8f5] p-4 rounded-sm overflow-auto max-h-32">
                                                    {produto.inci}
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Nota Final */}
                <section className="mt-20">
                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-12 rounded-sm shadow-sm">
                        <h2
                            className="text-3xl font-bold text-[#2b2621] mb-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            ⚠️ Informação Importante
                        </h2>
                        <p className="text-lg text-[#2b2621] leading-relaxed mb-4">
                            A escolha do produto ideal para rosácea é <strong>altamente individual</strong>. Produtos que funcionam excelentemente para uma pessoa podem não ser adequados para outra.
                        </p>
                        <p className="text-lg text-[#2b2621] leading-relaxed mb-4">
                            Recomenda-se sempre:
                        </p>
                        <ul className="space-y-3 ml-6">
                            {[
                                'Fazer um teste de tolerância com uma pequena quantidade aplicada numa área discreta',
                                'Introduzir novos produtos gradualmente, um de cada vez',
                                'Observar a resposta da pele durante 2-4 semanas antes de uma avaliação conclusiva',
                                'Consultar um dermatologista se persistirem reações adversas ou dúvidas',
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <span className="text-[#c94a4a] font-bold text-xl">▸</span>
                                    <span className="text-[#6b5b4f]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
}
