'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            PORTTO
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Início
            </Link>
            <Link href="/quem-somos" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Quem Somos
            </Link>
            <Link href="/nossas-solucoes" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Soluções
            </Link>
            <Link href="/depoimentos" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Depoimentos
            </Link>
            <Link href="/contato" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium">
              Contato
            </Link>
          </div>

          {/* Menu Mobile Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 flex flex-col space-y-1">
              <span className={`h-0.5 w-full bg-gray-700 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-full bg-gray-700 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-gray-700 transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-4 bg-white/95 backdrop-blur-md"
            >
              <Link href="/" className="block text-gray-700 hover:text-cyan-600 transition-colors font-medium">Início</Link>
              <Link href="/quem-somos" className="block text-gray-700 hover:text-cyan-600 transition-colors font-medium">Quem Somos</Link>
              <Link href="/nossas-solucoes" className="block text-gray-700 hover:text-cyan-600 transition-colors font-medium">Soluções</Link>
              <Link href="/depoimentos" className="block text-gray-700 hover:text-cyan-600 transition-colors font-medium">Depoimentos</Link>
              <Link href="/contato" className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium">Contato</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}