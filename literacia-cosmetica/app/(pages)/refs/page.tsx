'use client';

import Link from 'next/link';

export default function Refs() {
    const references = [
        {
            authors: 'Alexis, A., Woolery-Lloyd, H., Andriessen, A., Desai, S., Han, G., & Rodriguez, D.',
            year: 2022,
            title: 'Improving rosacea outcomes in skin of color patients: A review on the nuances in the treatment and the use of cleansers and moisturizers.',
            journal: 'Journal of Drugs in Dermatology: JDD',
            volume: '21(6)',
            pages: '574–580',
            doi: 'https://doi.org/10.36849/JDD.6838'
        },
        {
            authors: 'aSuaFarmáciaOnline',
            year: null,
            title: 'ACM Azéane Creme 15% Ácido Azelaico 30ml',
            journal: null,
            volume: null,
            pages: null,
            doi: null
        },
        {
            authors: 'Baldwin, H., Alexis, A. F., Andriessen, A., Berson, D. S., Farris, P., Harper, J., Lain, E., Marchbein, S., Stein Gold, L., & Tan, J.',
            year: 2021,
            title: 'Evidence of barrier deficiency in rosacea and the importance of integrating otc skincare products into treatment regimens.',
            journal: 'Journal of Drugs in Dermatology: JDD',
            volume: '20(4)',
            pages: '384–392',
            doi: 'https://doi.org/10.36849/JDD.2021.5861'
        },
        {
            authors: 'Coda, A. B., Hata, T., Miller, J., Audish, D., Kotol, P., Two, A., Shafiq, F., Yamasaki, K., Harper, J. C., Del Rosso, J. Q., & Gallo, R. L.',
            year: 2013,
            title: 'Cathelicidin, kallikrein 5, and serine protease activity is inhibited during treatment of rosacea with azelaic acid 15% gel.',
            journal: 'Journal of the American Academy of Dermatology',
            volume: '69(4)',
            pages: '570–577',
            doi: 'https://doi.org/10.1016/j.jaad.2013.05.019'
        },
        {
            authors: 'Dall\'Oglio, F., Tedeschi, A., Lacarrubba, F., Fabbrocini, G., Skroza, N., Chiodini, P., & Micali, G.',
            year: 2021,
            title: 'A novel azelaic acid formulation for the topical treatment of inflammatory rosacea: A multicentre, prospective clinical trial.',
            journal: 'Journal of Cosmetic Dermatology',
            volume: '20(S1)',
            pages: '28–31',
            doi: 'https://doi.org/10.1111/jocd.14098'
        },
        {
            authors: 'Eau Thermale Avène',
            year: null,
            title: 'Antirougeurs DIA Creme Suavizante antivermelhidão SPF 30',
            journal: null,
            volume: null,
            pages: null,
            doi: null
        },
        {
            authors: 'Farmácias Portuguesas',
            year: null,
            title: 'Rosacure Intensive Emulsão protetora para rosácea SPF30, Bisnaga 30ml',
            journal: null,
            volume: null,
            pages: null,
            doi: null
        },
        {
            authors: 'Firooz, A., Sadr, B., Babakoohi, S., Sarraf-Yazdy, M., Fanian, F., Kazerouni-Timsar, A., Nassiri-Kashani, M., Naghizadeh, M. M., & Dowlati, Y.',
            year: 2012,
            title: 'Variation of biophysical parameters of the skin with age, gender, and body region.',
            journal: 'The Scientific World Journal',
            volume: '2012',
            pages: '1–5',
            doi: 'https://doi.org/10.1100/2012/386936'
        },
        {
            authors: 'Gallo, R. L., Granstein, R. D., Kang, S., Mannis, M., Steinhoff, M., Tan, J., & Thiboutot, D.',
            year: 2018,
            title: 'Standard classification and pathophysiology of rosacea: The 2017 update by the national rosacea society expert committee.',
            journal: 'Journal of the American Academy of Dermatology',
            volume: '78(1)',
            pages: '148–155',
            doi: 'https://doi.org/10.1016/j.jaad.2017.08.037'
        },
        {
            authors: 'Geng, R. S. Q., Bourkas, A. N., Mufti, A., & Sibbald, R. G.',
            year: 2024,
            title: 'Rosacea: Pathogenesis and therapeutic correlates.',
            journal: 'Journal of Cutaneous Medicine and Surgery',
            volume: '28(2)',
            pages: '178–189',
            doi: 'https://doi.org/10.1177/12034754241229365'
        },
        {
            authors: 'Haber, R., & El Gemayel, M.',
            year: 2018,
            title: 'Comorbidities in rosacea: A systematic review and update.',
            journal: 'Journal of the American Academy of Dermatology',
            volume: '78(4)',
            pages: '786-792.e8',
            doi: 'https://doi.org/10.1016/j.jaad.2017.09.016'
        },
        {
            authors: 'Huang, Y., Li, J., Zhao, Z., Zheng, B., Deng, Y., Shi, W., Steinhoff, M., & Xie, H.',
            year: 2020,
            title: 'Effects of skin care habits on the development of rosacea: A multi-center retrospective case-control survey in Chinese population.',
            journal: 'PLOS ONE',
            volume: '15(4)',
            pages: 'e0231078',
            doi: 'https://doi.org/10.1371/journal.pone.0231078'
        },
        {
            authors: 'Li, G., Wang, B., Zhao, Z., Shi, W., Jian, D., Xie, H., Huang, Y., & Li, J.',
            year: 2021,
            title: 'Excessive cleansing: An underestimating risk factor of rosacea in Chinese population.',
            journal: 'Archives of Dermatological Research',
            volume: '313(4)',
            pages: '225–234',
            doi: 'https://doi.org/10.1007/s00403-020-02095-w'
        },
        {
            authors: 'Morgado‐Carrasco, D., Granger, C., Trullas, C., & Piquero‐Casals, J.',
            year: 2021,
            title: 'Impact of ultraviolet radiation and exposome on rosacea: Key role of photoprotection in optimizing treatment.',
            journal: 'Journal of Cosmetic Dermatology',
            volume: '20(11)',
            pages: '3415–3421',
            doi: 'https://doi.org/10.1111/jocd.14020'
        },
        {
            authors: 'National Rosacea Society',
            year: null,
            title: 'Managing rosacea: Personal care.',
            journal: null,
            volume: null,
            pages: null,
            doi: null
        },
        {
            authors: 'Nowicka, D., Chilicka, K., Dzieńdziora-Urbińska, I., & Szyguła, R.',
            year: 2022,
            title: 'Skincare in rosacea from the cosmetologist\'s perspective: A narrative review.',
            journal: 'Journal of Clinical Medicine',
            volume: '12(1)',
            pages: '115',
            doi: 'https://doi.org/10.3390/jcm12010115'
        },
        {
            authors: 'Paiva-Santos, A. C., Gonçalves, T., Peixoto, D., Pires, P. C., Velsankar, K., Jha, N. K., Chavda, V. P., Mohammad, I. S., Cefali, L. C., Mazzola, P. G., Mascarenhas-Melo, F., & Veiga, F.',
            year: 2023,
            title: 'Rosacea topical treatment and care: From traditional to new drug delivery systems.',
            journal: 'Molecular Pharmaceutics',
            volume: '20(8)',
            pages: '3804–3828',
            doi: 'https://doi.org/10.1021/acs.molpharmaceut.3c00324'
        },
        {
            authors: 'Rayahin, J. E., Buhrman, J. S., Zhang, Y., Koh, T. J., & Gemeinhart, R. A.',
            year: 2015,
            title: 'High and low molecular weight hyaluronic acid differentially influence macrophage activation.',
            journal: 'ACS Biomaterials Science & Engineering',
            volume: '1(7)',
            pages: '481–493',
            doi: 'https://doi.org/10.1021/acsbiomaterials.5b00181'
        },
        {
            authors: 'Semenescu, I., Similie, D., Diaconeasa, Z., & Danciu, C.',
            year: 2024,
            title: 'Recent advances in the management of rosacea through natural compounds.',
            journal: 'Pharmaceuticals',
            volume: '17(2)',
            pages: '212',
            doi: 'https://doi.org/10.3390/ph17020212'
        },
        {
            authors: 'Tan, J., Almeida, L. M. C., Bewley, A., Cribier, B., Dlova, N. C., Gallo, R., Kautz, G., Mannis, M., Oon, H. H., Rajagopalan, M., Steinhoff, M., Thiboutot, D., Troielli, P., Webster, G., Wu, Y., van Zuuren, E. J., & Schaller, M.',
            year: 2017,
            title: 'Updating the diagnosis, classification and assessment of rosacea: Recommendations from the global ROSacea COnsensus (Rosco) panel.',
            journal: 'The British Journal of Dermatology',
            volume: '176(2)',
            pages: '431–438',
            doi: 'https://doi.org/10.1111/bjd.15122'
        },
        {
            authors: 'van Zuuren, E. J., Arents, B. W. M., van der Linden, M. M. D., Vermeulen, S., Fedorowicz, Z., & Tan, J.',
            year: 2021,
            title: 'Rosacea: New concepts in classification and treatment.',
            journal: 'American Journal of Clinical Dermatology',
            volume: '22(4)',
            pages: '457–465',
            doi: 'https://doi.org/10.1007/s40257-021-00595-7'
        },
        {
            authors: 'Yamasaki, K., Kanada, K., Macleod, D. T., Borkowski, A. W., Morizane, S., Nakatsuji, T., Cogen, A. L., & Gallo, R. L.',
            year: 2011,
            title: 'TLR2 expression is increased in rosacea and stimulates enhanced serine protease production by keratinocytes.',
            journal: 'The Journal of Investigative Dermatology',
            volume: '131(3)',
            pages: '688–697',
            doi: 'https://doi.org/10.1038/jid.2010.351'
        },
        {
            authors: 'Zawodny, P., Stój, E., Kulig, P., Skonieczna-Żydecka, K., & Sieńko, J.',
            year: 2022,
            title: 'Visia skin analysis system as a tool to evaluate the reduction of pigmented skin and vascular lesions using the 532 nm laser.',
            journal: 'Clinical, Cosmetic and Investigational Dermatology',
            volume: '15',
            pages: '2187–2195',
            doi: 'https://doi.org/10.2147/CCID.S380388'
        },
    ];

    return (
        <div className="w-full relative z-10">
            <div className="bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ebe5] py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-8 right-5 opacity-5 text-8xl">📚</div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1
                        className="text-5xl md:text-6xl font-bold text-[#2b2621] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Referências
                    </h1>
                    <p className="text-lg text-[#6b5b4f] max-w-2xl">
                        Fontes bibliográficas e referências utilizadas neste site
                    </p>
                    <div className="h-1 w-20 bg-[#c94a4a] mt-6"></div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-[#f5f3f0] to-[#faf8f5] border-l-4 border-[#c94a4a] p-10 rounded-sm shadow-sm mb-12">
                        <h2
                            className="text-2xl font-bold text-[#2b2621] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Sobre Esta Página
                        </h2>
                        <p className="text-lg text-[#2b2621] leading-relaxed">
                            Este site foi desenvolvido com base em evidência científica. Aqui pode encontrar a lista completa de referências bibliográficas, estudos clínicos, recomendações de organizações especializadas e produtos consultados para garantir a precisão e confiabilidade da informação apresentada.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {references.map((ref, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-l-4 border-[#e8dfd5] rounded-sm shadow-sm p-8 hover:shadow-md transition-all duration-300 hover:border-[#c94a4a]"
                            >
                                <div className="mb-3">
                                    <p className="text-[#2b2621] font-semibold leading-relaxed">
                                        {ref.authors}
                                        {ref.year && <span> ({ref.year})</span>}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <p className="text-[#2b2621] text-lg leading-relaxed italic">
                                        "{ref.title}"
                                    </p>
                                </div>

                                {ref.journal && (
                                    <div className="mb-2">
                                        <p className="text-[#6b5b4f] text-sm">
                                            <span className="font-semibold">{ref.journal}</span>
                                            {ref.volume && <span>, {ref.volume}</span>}
                                            {ref.pages && <span>, pp. {ref.pages}</span>}
                                        </p>
                                    </div>
                                )}

                                {ref.doi && (
                                    <div>
                                        <a
                                            href={ref.doi}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#c94a4a] hover:text-[#8b3a3a] font-semibold text-sm hover:underline transition-colors"
                                        >
                                            {ref.doi}
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm mt-16">
                    <h2
                        className="text-3xl font-bold mb-6"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        💡 Sobre a Confiabilidade
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        As informações contidas neste site baseiam-se em pesquisa bibliográfica rigorosa, incluindo publicações revisadas por pares e recomendações de organizações especializadas em rosácea. Todas as recomendações clínicas apresentadas têm como objetivo educacional.
                    </p>
                    <p className="text-base leading-relaxed">
                        <strong>Aviso importante:</strong> Este site não substitui a consulta com um médico ou dermatologista. Se tem dúvidas sobre o seu diagnóstico ou tratamento, consulte um profissional de saúde qualificado.
                    </p>
                </section>

                <section className="mt-12 flex justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-[#c94a4a] to-[#a63a3a] text-white font-bold rounded-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        ← Voltar ao Início
                    </Link>
                </section>
            </div>
        </div>
    );
}
