export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a1815] text-[#f5f3f0] py-16 mt-24 border-t-2 border-[#c94a4a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-[#9d8b7e] border-opacity-30">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-3xl">🌹</span>
                            <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Literacia Cosmética</h3>
                        </div>
                        <p className="text-[#d4a574] text-sm leading-relaxed">
                            Um recurso educativo sobre saúde da pele e rosácea, baseado em evidência científica e guidelines internacionais.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Aviso Legal</h4>
                        <p className="text-[#d4a574] text-sm leading-relaxed">
                            Este site fornece informações educativas apenas. Consulte um dermatologista para diagnóstico e tratamento profissional.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Referências</h4>
                        <p className="text-[#d4a574] text-sm leading-relaxed">
                            Baseado em diretrizes do ROSCO e National Rosacea Society Expert Committee de 2017.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-[#9d8b7e] text-sm">&copy; {currentYear} Literacia Cosmética. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
