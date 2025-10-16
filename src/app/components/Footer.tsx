'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [isVisible, setIsVisible] = useState(false)

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const solutions = [
    { name: 'Desenvolvimento de Sites', href: '/nossas-solucoes#sites' },
    { name: 'Automatização de Chats', href: '/nossas-solucoes#chats' },
    { name: 'Sistemas MVP', href: '/nossas-solucoes#mvp' },
    { name: 'Sistemas de Gestão', href: '/nossas-solucoes#gestao' },
    { name: 'Automatização de Processos', href: '/nossas-solucoes#automacao' },
    { name: 'Sistemas Personalizados', href: '/nossas-solucoes#personalizados' },
  ]

  const company = [
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Nossas Soluções', href: '/nossas-solucoes' },
    { name: 'Depoimentos', href: '/depoimentos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Cases', href: '/cases' },
  ]

  const support = [
    { name: 'Contato', href: '/contato' },
    { name: 'Orçamento', href: '/contato#orcamento' },
    { name: 'Suporte', href: '/suporte' },
    { name: 'Política de Privacidade', href: '/politica-privacidade' },
    { name: 'Termos de Uso', href: '/termos-uso' },
  ]

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com/portto', 
      name: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      icon: Facebook, 
      href: 'https://facebook.com/portto', 
      name: 'Facebook',
      color: 'hover:text-blue-600'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/portto', 
      name: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Youtube, 
      href: 'https://youtube.com/portto', 
      name: 'YouTube',
      color: 'hover:text-red-500'
    },
  ]

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </motion.button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 inline-block">
              PORTTO
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos negócios através de tecnologia inovadora. Desenvolvemos 
              soluções digitais que impulsionam seu crescimento e otimizam suas operações.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                <span>(62) 99155-6834</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                <span>porttodesenvolvimento@gmail.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-cyan-400 flex-shrink-0" />
                <span>Goiânia, GO</span>
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Soluções</h3>
            <ul className="space-y-3">
              {solutions.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Suporte</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 md:col-span-2"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Pronto para transformar seu negócio?</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Vamos conversar sobre como podemos ajudar sua empresa a crescer com tecnologia.
              </p>
              <Link 
                href="/contato"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center w-full text-center"
              >
                Solicitar Orçamento
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Siga a PORTTO</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 ${social.color}`}
                    aria-label={`Siga-nos no ${social.name}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} PORTTO. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/politica-privacidade" className="hover:text-cyan-400 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-uso" className="hover:text-cyan-400 transition-colors">
              Termos de Uso
            </Link>
            <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
              Política de Cookies
            </Link>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre as soluções PORTTO"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 left-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>
    </footer>
  )
}