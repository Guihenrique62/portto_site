'use client'

import { motion } from 'framer-motion'
import { 
  Star,
  Quote,
  Calendar,
  Target,
  TrendingUp,
  Users,
  MessageCircle,
  CheckCircle
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

const slideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

export default function Depoimentos() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const depoimentos = [
    {
      id: 1,
      nome: 'Carlos Mendonça',
      empresa: 'EcoVida Sustentável',
      cargo: 'Diretor Comercial',
      foto: '/images/avatars/carlos-mendonca.jpg',
      nota: 5,
      texto: 'A PORTTO transformou completamente nossa presença digital. Desenvolveram um sistema de gestão personalizado que automatizou nossos processos de vendas e triplicou nossa eficiência. A equipe foi extremamente profissional e entregou além do esperado.',
      resultado: 'Aumento de 40% nas vendas em 3 meses',
      projeto: 'Sistema de Gestão Comercial',
      tempo: 'Há 2 meses',
      destaques: ['Automação de processos', 'Dashboard personalizado', 'Suporte excepcional']
    },
    {
      id: 2,
      nome: 'Marina Santos',
      empresa: 'Clínica Bem Estar Integrado',
      cargo: 'Proprietária',
      foto: '/images/avatars/marina-santos.jpg',
      nota: 5,
      texto: 'Precisava urgentemente de um site profissional para minha clínica. A PORTTO não apenas criou um site lindo e funcional, mas também implementou um sistema de agendamentos online que reduziu em 80% o tempo da minha recepcionista. Super recomendo!',
      resultado: 'Redução de 80% no trabalho manual de agendamentos',
      projeto: 'Site Institucional + Sistema de Agendamentos',
      tempo: 'Há 4 meses',
      destaques: ['Design responsivo', 'Sistema de agendamentos', 'Otimização SEO']
    },
    {
      id: 3,
      nome: 'Ricardo Almeida',
      empresa: 'TechSolutions Consultoria',
      cargo: 'CEO',
      foto: '/images/avatars/ricardo-almeida.jpg',
      nota: 5,
      texto: 'Trabalhamos com a PORTTO no desenvolvimento do nosso MVP e ficamos impressionados com a qualidade e velocidade. Em apenas 6 semanas tínhamos um produto funcional para validar no mercado. A comunicação foi transparente durante todo o processo.',
      resultado: 'MVP lançado em 6 semanas para validação',
      projeto: 'Desenvolvimento de MVP',
      tempo: 'Há 3 meses',
      destaques: ['Desenvolvimento ágil', 'Código limpo', 'Entrega dentro do prazo']
    },
    {
      id: 4,
      nome: 'Fernanda Oliveira',
      empresa: 'Moda Elegante Boutique',
      cargo: 'Gerente de Marketing',
      foto: '/images/avatars/fernanda-oliveira.jpg',
      nota: 5,
      texto: 'Nosso e-commerce estava defasado e perdendo vendas. A PORTTO modernizou completamente nossa loja virtual, implementou um chatbot para atendimento 24/7 e otimizou todo o processo de checkout. As vendas online aumentaram significamente.',
      resultado: 'Aumento de 60% nas vendas online',
      projeto: 'E-commerce + Chatbot Automatizado',
      tempo: 'Há 5 meses',
      destaques: ['Loja virtual moderna', 'Chatbot inteligente', 'Checkout otimizado']
    },
    {
      id: 5,
      nome: 'João Pedro Silva',
      empresa: 'Construtora Progresso',
      cargo: 'Gerente de Operações',
      foto: '/images/avatars/joao-silva.jpg',
      nota: 5,
      texto: 'A automação de processos desenvolvida pela PORTTO revolucionou nossa operação. Integraram nossos sistemas de estoque, compras e projetos em uma única plataforma. O retorno sobre o investimento foi alcançado em menos de 4 meses.',
      resultado: 'ROI em 4 meses com automação de processos',
      projeto: 'Automação de Processos com n8n',
      tempo: 'Há 6 meses',
      destaques: ['Integração de sistemas', 'Workflows automatizados', 'Relatórios em tempo real']
    }
  ]

  const estatisticas = [
    { numero: '100%', label: 'Clientes Satisfeitos', icon: Users },
    { numero: '4.9/5', label: 'Avaliação Média', icon: Star },
    { numero: '50+', label: 'Projetos Entregues', icon: Target },
    { numero: '24/7', label: 'Suporte Disponível', icon: Calendar }
  ]

  // Componente para renderizar estrelas
  const RenderStars = ({ nota }: { nota: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < nota ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'name': 'Depoimentos de Clientes - PORTTO',
            'description': 'Confira o que nossos clientes dizem sobre nossos serviços de desenvolvimento e automação.',
            'numberOfItems': depoimentos.length,
            'itemListElement': depoimentos.map((depoimento, index) => ({
              '@type': 'ListItem',
              'position': index + 1,
              'item': {
                '@type': 'Review',
                'author': {
                  '@type': 'Person',
                  'name': depoimento.nome
                },
                'reviewRating': {
                  '@type': 'Rating',
                  'ratingValue': depoimento.nota,
                  'bestRating': 5
                },
                'reviewBody': depoimento.texto
              }
            }))
          })
        }}
      />

      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              O que Nossos <span className="text-cyan-300">Clientes Dizem</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
              Confira as experiências reais de quem já transformou seu negócio com nossas soluções em tecnologia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {estatisticas.map((estatistica, index) => {
              const IconComponent = estatistica.icon
              return (
                <motion.div
                  key={estatistica.label}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    {estatistica.numero}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {estatistica.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Histórias de <span className="text-cyan-600">Sucesso</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça os resultados que nossos clientes alcançaram com nossas soluções personalizadas.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {depoimentos.map((depoimento) => (
              <motion.div
                key={depoimento.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Header do Depoimento */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {/* Avatar Placeholder - substitua por imagens reais se quiser */}
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {depoimento.nome.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{depoimento.nome}</h3>
                        <p className="text-sm text-gray-600">{depoimento.cargo}</p>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-cyan-500 opacity-50" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <RenderStars nota={depoimento.nota} />
                    <span className="text-sm text-gray-500">{depoimento.tempo}</span>
                  </div>
                </div>

                {/* Conteúdo do Depoimento */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{depoimento.texto}"
                  </p>

                  {/* Projeto e Resultado */}
                  <div className="space-y-3">
                    <div className="bg-cyan-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Target className="w-4 h-4 text-cyan-600" />
                        <span className="text-sm font-semibold text-cyan-800">Projeto:</span>
                      </div>
                      <p className="text-sm text-cyan-700">{depoimento.projeto}</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">Resultado:</span>
                      </div>
                      <p className="text-sm text-green-700">{depoimento.resultado}</p>
                    </div>
                  </div>

                  {/* Destaques */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Destaques:</h4>
                    <div className="flex flex-wrap gap-2">
                      {depoimento.destaques.map((destaque, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {destaque}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800">
                      {depoimento.empresa}
                    </span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Cliente Ativo" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Fazer Parte das Nossas Histórias de Sucesso?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Seja o próximo cliente satisfeito a compartilhar uma experiência incrível com a PORTTO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato"
                className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Iniciar Meu Projeto
              </Link>
              <a 
                href="https://wa.me/5562991556834"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Conversar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantia de Satisfação */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Garantia de Satisfação
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nosso compromisso é sua total satisfação. Trabalhamos incansavelmente para superar 
              suas expectativas em cada projeto.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
              {[
                {
                  title: 'Comunicação Transparente',
                  description: 'Mantemos você informado em todas as etapas do projeto'
                },
                {
                  title: 'Entrega no Prazo',
                  description: 'Comprometemo-nos com os prazos estabelecidos'
                },
                {
                  title: 'Suporte Contínuo',
                  description: 'Acompanhamento pós-entrega para garantir seu sucesso'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}