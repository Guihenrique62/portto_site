'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  MessageCircle, 
  Rocket, 
  BarChart3, 
  Workflow,
  Shield,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Code,
  Zap,
  Database,
  Smartphone,
  Search,
  Bot,
  Cpu,
  Server
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

export default function NossasSolucoes() {
  const [mounted, setMounted] = useState(false)
  const [activeSolution, setActiveSolution] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const solutions = [
    {
      icon: Globe,
      title: 'Desenvolvimento de Sites',
      description: 'Criamos sites modernos, responsivos e otimizados que convertem visitantes em clientes',
      fullDescription: 'Desenvolvemos sites institucionais, landing pages e e-commerces com as melhores práticas de UX/UI, performance e SEO. Nossos sites são rápidos, seguros e otimizados para conversão.',
      features: [
        'Design responsivo e moderno',
        'Otimização SEO avançada',
        'Alta performance e velocidade',
        'Integração com analytics',
        'Hospedagem e domínio incluídos',
        'Manutenção e suporte contínuo'
      ],
      benefits: [
        'Aumento da visibilidade online',
        'Melhor experiência do usuário',
        'Maior taxa de conversão',
        'Site sempre atualizado e seguro'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    },
    {
      icon: MessageCircle,
      title: 'Automatização de Chats',
      description: 'Chatbots inteligentes que atendem 24/7 e qualificam leads automaticamente',
      fullDescription: 'Implementamos chatbots avançados que simulam conversas humanas, atendem clientes, qualificam leads e integram com seus sistemas existentes.',
      features: [
        'Atendimento 24 horas',
        'Qualificação automática de leads',
        'Multiplataforma (WhatsApp, Web, Telegram)',
        'Integração com CRM',
        'Relatórios de performance',
        'Treinamento contínuo da IA'
      ],
      benefits: [
        'Redução de custos com atendimento',
        'Aumento na captação de leads',
        'Melhoria na experiência do cliente',
        'Escalabilidade ilimitada'
      ],
      technologies: ['Dialogflow', 'WhatsApp Business API', 'Node.js', 'MongoDB'],
    },
    {
      icon: Rocket,
      title: 'Sistemas MVP',
      description: 'Desenvolvimento ágil do seu produto mínimo viável para validação de mercado',
      fullDescription: 'Aceleramos o lançamento da sua ideia com MVPs funcionais que validam seu conceito no mercado rapidamente e com investimento otimizado.',
      features: [
        'Desenvolvimento ágil (2-4 semanas)',
        'Funcionalidades essenciais',
        'Validação com usuários reais',
        'Código escalável',
        'Iterações rápidas',
        'Preparação para investimento'
      ],
      benefits: [
        'Validação rápida da ideia',
        'Redução de riscos',
        'Atração de investidores',
        'Base sólida para crescimento'
      ],
      technologies: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL'],
    },
    {
      icon: BarChart3,
      title: 'Sistemas de Controle e Gestão',
      description: 'Dashboards e ferramentas inteligentes para tomada de decisão estratégica',
      fullDescription: 'Desenvolvemos sistemas completos de gestão empresarial com dashboards interativos, relatórios automatizados e acompanhamento de KPIs em tempo real.',
      features: [
        'Dashboards personalizados',
        'Relatórios automáticos',
        'Alertas inteligentes',
        'Integração multiplataforma',
        'Dados em tempo real'
      ],
      benefits: [
        'Visão completa do negócio',
        'Decisões baseadas em dados',
        'Otimização de processos',
        'Aumento da produtividade'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'Power BI', 'D3.js'],
    },
    {
      icon: Workflow,
      title: 'Automatização de Processos',
      description: 'Integrações com n8n para otimizar e automatizar operações empresariais',
      fullDescription: 'Automatizamos processos repetitivos e integramos seus sistemas com n8n, criando workflows inteligentes que economizam tempo e reduzem erros.',
      features: [
        'Workflows personalizados',
        'Integração n8n avançada',
        'Automação de tarefas repetitivas',
        'Conexão entre sistemas',
        'Monitoramento em tempo real',
        'Relatórios de eficiência'
      ],
      benefits: [
        'Redução de custos operacionais',
        'Eliminação de erros manuais',
        'Aumento da produtividade',
        'Processos mais eficientes'
      ],
      technologies: ['n8n', 'Python', 'REST APIs', 'Webhooks', 'Docker'],
    },
    {
      icon: Shield,
      title: 'Sistemas Web Personalizados',
      description: 'Soluções sob medida desenvolvidas para necessidades específicas do negócio',
      fullDescription: 'Criamos sistemas web completos e personalizados que atendem às necessidades exclusivas do seu negócio, desde o planejamento até a implementação.',
      features: [
        'Análise e planejamento detalhado',
        'Desenvolvimento customizado',
        'Arquitetura escalável',
        'Segurança avançada',
        'Testes rigorosos',
        'Manutenção preventiva'
      ],
      benefits: [
        'Solução 100% adaptada',
        'Vantagem competitiva',
        'Escalabilidade garantida',
        'Suporte técnico especializado'
      ],
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      icon: Users,
      title: 'CRM e Automação Comercial',
      description: 'Gestão completa de clientes e automação de funis de vendas',
      fullDescription: 'Implementamos sistemas de CRM que automatizam todo o funil de vendas, desde a prospecção até o pós-venda, com analytics avançados.',
      features: [
        'Gestão de pipeline de vendas',
        'Automação de marketing',
        'Segmentação de clientes',
        'Relatórios de performance',
        'Integração com e-mail e WhatsApp',
        'Mobile first'
      ],
      benefits: [
        'Aumento na taxa de conversão',
        'Melhor relacionamento com clientes',
        'Vendas mais eficientes',
        'Dados centralizados'
      ],
      technologies: ['Salesforce', 'HubSpot', 'React', 'MongoDB', 'Twilio'],
    },
    {
      icon: Star,
      title: 'Integrações API',
      description: 'Conexão entre seus sistemas e ferramentas existentes',
      fullDescription: 'Conectamos todas as suas ferramentas e sistemas através de APIs personalizadas, criando um ecossistema integrado e eficiente.',
      features: [
        'APIs RESTful personalizadas',
        'Documentação completa',
        'Autenticação segura',
        'Monitoramento 24/7',
        'Webhooks em tempo real',
        'Suporte técnico especializado'
      ],
      benefits: [
        'Sistemas conectados',
        'Dados sincronizados',
        'Processos otimizados',
        'Escalabilidade garantida'
      ],
      technologies: ['Node.js', 'Python', 'GraphQL', 'JWT', 'Swagger'],
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Soluções em Desenvolvimento - PORTTO',
            'description': 'Desenvolvimento de sites, sistemas, automações e integrações para empresas',
            'provider': {
              '@type': 'Organization',
              'name': 'PORTTO'
            },
            'areaServed': 'BR',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Soluções em Tecnologia',
              'itemListElement': solutions.map((solution, index) => ({
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': solution.title,
                  'description': solution.description
                }
              }))
            }
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
              Nossas <span className="text-cyan-300">Soluções</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
              Conheça todas as nossas soluções em desenvolvimento e automação para 
              impulsionar seu negócio com tecnologia de ponta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setActiveSolution(index)}
              >
                <div className={`bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 border-2 transition-all duration-300 h-full ${
                  activeSolution === index 
                    ? 'border-cyan-500 shadow-2xl' 
                    : 'border-transparent group-hover:border-cyan-200'
                }`}>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.features.slice(0, 3).map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Solution View */}
{solutions[activeSolution] && (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        key={activeSolution}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-50 to-cyan-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12"
      >
        {/* Armazena a solução ativa em uma variável */}
        {(() => {
          const currentSolution = solutions[activeSolution];
          const SolutionIcon = currentSolution.icon;
          
          return (
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <SolutionIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                      {currentSolution.title}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                  {currentSolution.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-3">
                    {currentSolution.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-white border border-cyan-200 text-cyan-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mr-2" />
                    Funcionalidades Principais
                  </h3>
                  <div className="grid gap-3">
                    {currentSolution.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                      >
                        <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-green-500 mr-2" />
                    Benefícios para seu Negócio
                  </h3>
                  <div className="grid gap-2">
                    {currentSolution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-8 pt-8 border-t border-gray-200 lg:col-span-2"
              >
                <Link 
                  href="/contato"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento para {currentSolution.title}
                </Link>
                <p className="text-gray-600 text-sm mt-3">
                  Respondemos em até 24 horas com uma proposta personalizada
                </p>
              </motion.div>
            </div>
          );
        })()}
      </motion.div>
    </div>
  </section>
)}

      {/* Final CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não encontrou o que precisa?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Desenvolvemos soluções personalizadas para atender necessidades específicas do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Link>
              <a 
                href="https://wa.me/5562985280386"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Rápido
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}