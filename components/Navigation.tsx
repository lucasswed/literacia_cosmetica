'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#faf8f5] border-b border-[#e8dfd5] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <span className="text-2xl transition-transform group-hover:scale-110">🌹</span>
                        <span className="hidden sm:inline text-lg font-bold text-[#2b2621] tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Literacia Cosmética</span>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/o-que-e-rosacea" className="text-sm text-[#2b2621] font-medium hover:text-[#c94a4a] transition-colors">
                            O que é Rosácea?
                        </Link>
                        <Link href="/ingredientes" className="text-sm text-[#2b2621] font-medium hover:text-[#c94a4a] transition-colors">
                            Ingredientes
                        </Link>
                        <Link href="/modo-aplicacao" className="text-sm text-[#2b2621] font-medium hover:text-[#c94a4a] transition-colors">
                            Rotina
                        </Link>
                        <Link href="/produtos" className="text-sm text-[#2b2621] font-medium hover:text-[#c94a4a] transition-colors">
                            Produtos
                        </Link>
                        <Link href="/refs" className="text-sm text-[#2b2621] font-medium hover:text-[#c94a4a] transition-colors">
                            Referências
                        </Link>
                    </div>

                    {/* Menu Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-[#2b2621] hover:text-[#c94a4a]"
                        >
                            <span className="text-2xl">☰</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-3 border-t border-[#e8dfd5] pt-4">
                        <Link href="/o-que-e-rosacea" className="block text-sm text-[#2b2621] font-medium hover:text-[#c94a4a]">
                            O que é Rosácea?
                        </Link>
                        <Link href="/ingredientes" className="block text-sm text-[#2b2621] font-medium hover:text-[#c94a4a]">
                            Ingredientes
                        </Link>
                        <Link href="/modo-aplicacao" className="block text-sm text-[#2b2621] font-medium hover:text-[#c94a4a]">
                            Rotina
                        </Link>
                        <Link href="/produtos" className="block text-sm text-[#2b2621] font-medium hover:text-[#c94a4a]">
                            Produtos
                        </Link>
                        <Link href="/refs" className="block text-sm text-[#2b2621] font-medium hover:text-[#c94a4a]">
                            Referências
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
