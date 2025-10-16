'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Sua Empresa
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Início
            </Link>
            <Link href="/quem-somos" className="hover:text-blue-600 transition-colors">
              Quem Somos
            </Link>
            <Link href="/nossas-solucoes" className="hover:text-blue-600 transition-colors">
              Nossas Soluções
            </Link>
            <Link href="/depoimentos" className="hover:text-blue-600 transition-colors">
              Depoimentos
            </Link>
            <Link href="/contato" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Contato
            </Link>
          </div>

          {/* Menu Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block hover:text-blue-600">Início</Link>
            <Link href="/quem-somos" className="block hover:text-blue-600">Quem Somos</Link>
            <Link href="/nossas-solucoes" className="block hover:text-blue-600">Nossas Soluções</Link>
            <Link href="/depoimentos" className="block hover:text-blue-600">Depoimentos</Link>
            <Link href="/contato" className="block bg-blue-600 text-white px-4 py-2 rounded-lg">Contato</Link>
          </div>
        )}
      </div>
    </nav>
  )
}