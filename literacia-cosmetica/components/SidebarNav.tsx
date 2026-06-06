'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarNav() {
    const pathname = usePathname();

    const navItems = [
        {
            href: '/o-que-e-rosacea',
            label: 'Visão Geral',
            icon: '📖',
        },
        {
            href: '/manifestacoes',
            label: 'Manifestações',
            icon: '🔴',
        },
        {
            href: '/classificacao',
            label: 'Classificação',
            icon: '📊',
        },
        {
            href: '/criterios-diagnosticos',
            label: 'Diagnóstico',
            icon: '⚕️',
        },
        {
            href: '/fatores-desencadeantes',
            label: 'Gatilhos',
            icon: '⚡',
        },
        {
            href: '/patogenese',
            label: 'Patogénese',
            icon: '🔬',
        },
    ];

    return (
        <aside className="bg-gradient-to-b from-[#f5f3f0] to-[#faf8f5] border-r border-[#e8dfd5] p-6 rounded-sm">
            <h3
                className="text-sm font-bold text-[#2b2621] mb-6 uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                🌹 Dentro desta Seção
            </h3>
            <nav className="space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-3 rounded-sm transition-all duration-200 flex items-start space-x-3 group ${isActive
                                ? 'bg-[#c94a4a] text-white shadow-md'
                                : 'text-[#2b2621] hover:bg-white hover:shadow-sm'
                                }`}
                        >
                            <span className="text-lg mt-0.5">{item.icon}</span>
                            <div className="flex-1">
                                <p
                                    className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-[#2b2621] group-hover:text-[#c94a4a]'
                                        }`}
                                >
                                    {item.label}
                                </p>
                            </div>
                            {isActive && (
                                <span className="text-white ml-2">✓</span>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
