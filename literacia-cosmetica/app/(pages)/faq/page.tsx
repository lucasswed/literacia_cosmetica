'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>('q1');

  const faqs = [
    {
      id: 'q1',
      question: 'Como é diagnosticada a rosácea?',
      answer: 'O diagnóstico é essencialmente clínico, baseado na avaliação visual e história clínica. Não existem testes laboratoriais específicos. Um dermatologista pode confirmar o diagnóstico se encontrar os critérios estabelecidos (eritema centrofacial persistente, alterações fimatosas, ou pelo menos 2 critérios major).'
    },
    {
      id: 'q2',
      question: 'Qual é a causa da rosácea?',
      answer: 'A causa exata não é completamente conhecida, mas envolve uma predisposição genética e uma resposta imunitária exagerada na pele. Fatores ambientais e microbiológicos também parecem ter um papel importante no desencadeamento e agravamento dos sintomas.'
    },
    {
      id: 'q3',
      question: 'A rosácea tem cura?',
      answer: 'Não existe cura para a rosácea. Trata-se de uma doença crónica. No entanto, com tratamento adequado, é possível controlar os sintomas e reduzir a frequência e intensidade das crises, melhorando significativamente a qualidade de vida.'
    },
    {
      id: 'q4',
      question: 'Que tipo de médico devo consultar?',
      answer: 'Um dermatologista é o especialista mais indicado para diagnosticar e tratar a rosácea. Em caso de sintomas oculares graves, pode ser necessária a consulta de um oftalmologista também.'
    },
    {
      id: 'q5',
      question: 'A rosácea é contagiosa?',
      answer: 'Não, a rosácea não é contagiosa. É uma doença inflamatória crónica que não se transmite por contacto ou por qualquer outra via.'
    },
    {
      id: 'q6',
      question: 'O que posso fazer para controlar os sintomas?',
      answer: 'Evitar os gatilhos pessoais identificados, usar protetor solar diariamente, usar cosméticos suaves e adequados para pele sensível, manter o tratamento prescrito pelo médico, e gerir o stress são algumas das estratégias principais para controlar a rosácea.'
    },
    {
      id: 'q7',
      question: 'A dieta afeta a rosácea?',
      answer: 'Para muitas pessoas, certos alimentos e bebidas podem desencadear crises. Os mais comuns incluem álcool (especialmente vinho tinto), bebidas quentes, alimentos picantes e especiarias fortes. No entanto, os gatilhos variam de pessoa para pessoa.'
    },
  ];

  return (
    <div className="w-full relative z-10">
      <div className="bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#f0ebe5] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-5 opacity-5 text-8xl">🌹</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 
            className="text-5xl md:text-6xl font-bold text-[#2b2621] mb-4"
            style={{fontFamily: "'Playfair Display', serif"}}
          >
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-[#6b5b4f] max-w-2xl">
            Respostas às perguntas mais comuns sobre rosácea
          </p>
          <div className="h-1 w-20 bg-[#c94a4a] mt-6"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`bg-white border-l-4 rounded-sm shadow-sm transition-all duration-300 ${openQuestion === faq.id ? 'border-[#c94a4a] shadow-lg' : 'border-[#e8dfd5]'}`}
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                  className="w-full text-left px-10 py-6 flex items-center justify-between hover:bg-[#faf8f5] transition-colors"
                >
                  <h3 
                    className="text-xl font-bold text-[#2b2621] pr-4"
                    style={{fontFamily: "'Playfair Display', serif"}}
                  >
                    {faq.question}
                  </h3>
                  <span className="text-[#c94a4a] font-bold text-xl flex-shrink-0">
                    {openQuestion === faq.id ? '−' : '+'}
                  </span>
                </button>
                {openQuestion === faq.id && (
                  <div className="px-10 pb-8">
                    <p className="text-[#6b5b4f] leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#8b3a3a] to-[#6b2a2a] text-white p-12 rounded-sm">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{fontFamily: "'Playfair Display', serif"}}
          >
            ⚕️ Ainda tem dúvidas?
          </h2>
          <p className="text-lg leading-relaxed">
            Se não encontrou resposta à sua pergunta, não hesite em contactar um dermatologista. A compreensão da sua condição é essencial para um tratamento eficaz. Este site fornece informações educativas apenas e não substitui o aconselhamento médico profissional.
          </p>
        </section>
      </div>
    </div>
  );
}
