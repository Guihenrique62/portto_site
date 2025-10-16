'use client'

import { motion } from 'framer-motion'
import { 
  Globe, MessageCircle, Rocket, BarChart3, 
  Workflow, Shield, Star, Users, CheckCircle,
  ArrowRight, Play
} from 'lucide-react'

// Adicione isso no início do arquivo para Structured Data da página
const pageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'PORTTO - Desenvolvimento de Sites, Sistemas e Automações',
  'description': 'Criamos sistemas, sites e automações inteligentes para sua empresa crescer',
  'url': 'https://portto.dev.br',
  'mainEntity': {
    '@type': 'Organization',
    'name': 'PORTTO'
  }
}

export default function Home() {
  return (
    <>
      {/* Structured Data para a página */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section com melhor semântica */}
        <header role="banner">
          <HeroSection />
        </header>

        {/* Conteúdo principal */}
        <main role="main">
          {/* Section 2 - Estatísticas */}
          <section aria-labelledby="stats-heading">
            <StatsSection />
          </section>
          
          {/* Section 3 - Nossas Soluções */}
          <section aria-labelledby="solutions-heading">
            <SolutionsSection />
          </section>
          
          {/* Section 4 - Desenvolvimento Completo */}
          <section aria-labelledby="development-heading">
            <DevelopmentSection />
          </section>
          
          {/* Section 5 - Atendimento Exclusivo */}
          <section aria-labelledby="exclusive-heading">
            <ExclusiveSection />
          </section>
        </main>
      </div>
    </>
  )
}

// Section 1 - Hero com SEO melhorado
function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video de Fundo com atributos SEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-label="Vídeo de fundo mostrando tecnologia, robôs e códigos"
          title="Tecnologia PORTTO - Inovação em desenvolvimento"
        >
          <source src="/videos/tech-background.mp4" type="video/mp4" />
          <source src="/videos/tech-background.webm" type="video/webm" />
          {/* Texto alternativo para acessibilidade */}
          <p>Vídeo demonstrativo de tecnologia avançada com elementos de programação e automação</p>
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Conteúdo com heading semântico */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        role="contentinfo"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            PORTTO
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8 leading-relaxed"
          role="heading"
          aria-level={2}
        >
          Criamos <strong className="font-semibold text-cyan-300">sistemas, sites e automações</strong> 
          <br />para sua empresa crescer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a 
            href="/nossas-solucoes" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            aria-label="Conheça nossas soluções em desenvolvimento e automação"
          >
            <Play size={20} />
            Conheça nossas soluções
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 2 - Estatísticas com Schema
function StatsSection() {
  const stats = [
    { 
      number: '300%', 
      text: 'Aumento no tráfego orgânico',
      description: 'Aumento médio no tráfego orgânico para sites desenvolvidos pela PORTTO'
    },
    { 
      number: '40%', 
      text: 'Redução de custos operacionais',
      description: 'Redução média de custos com automação de processos'
    },
    { 
      number: '2.5x', 
      text: 'Mais leads qualificados',
      description: 'Aumento na geração de leads qualificados com sistemas otimizados'
    },
    { 
      number: '24/7', 
      text: 'Automação funcionando',
      description: 'Sistemas de automação funcionando continuamente'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          id="stats-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Resultados Comprovados com Tecnologia
        </motion.h2>

        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
              itemScope
              itemType="https://schema.org/Statistic"
              role="listitem"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <meta itemProp="name" content={stat.text} />
                <div 
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2"
                  itemProp="value"
                >
                  {stat.number}
                </div>
                <div 
                  className="text-gray-600 text-sm md:text-base"
                  itemProp="description"
                >
                  {stat.text}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Section 3 - Soluções com Rich Snippets
function SolutionsSection() {
  const solutions = [
    {
      icon: Globe,
      title: 'Desenvolvimento de Sites',
      description: 'Sites modernos, responsivos e otimizados para SEO e conversão',
      features: ['Otimização SEO', 'Design Responsivo', 'Alta Performance']
    },
    {
      icon: MessageCircle,
      title: 'Automatização de Chats',
      description: 'Chatbots inteligentes para atendimento 24/7 e qualificação de leads',
      features: ['Atendimento 24/7', 'Qualificação de Leads', 'Multiplataforma']
    },
    {
      icon: Rocket,
      title: 'Sistemas MVP',
      description: 'Desenvolvimento ágil do seu produto mínimo viável para validação de mercado',
      features: ['Desenvolvimento Ágil', 'Validação de Mercado', 'Custo Otimizado']
    },
    {
      icon: BarChart3,
      title: 'Sistemas de Controle e Gestão',
      description: 'Dashboards e ferramentas inteligentes para tomada de decisão estratégica',
      features: ['Dashboards Interativos', 'Relatórios Automatizados', 'KPI Tracking']
    },
    {
      icon: Workflow,
      title: 'Automatização de Processos',
      description: 'Integrações com n8n para otimizar e automatizar operações empresariais',
      features: ['Integração n8n', 'Workflows Customizados', 'Otimização de Processos']
    },
    {
      icon: Shield,
      title: 'Sistemas Web Personalizados',
      description: 'Soluções sob medida desenvolvidas para necessidades específicas do negócio',
      features: ['Desenvolvimento Customizado', 'Escalabilidade', 'Manutenção Contínua']
    },
    {
      icon: Users,
      title: 'CRM e Automação Comercial',
      description: 'Gestão completa de clientes e automação de funis de vendas',
      features: ['Gestão de Clientes', 'Automação de Vendas', 'Funil Personalizado']
    },
    {
      icon: Star,
      title: 'Integrações API',
      description: 'Conexão entre seus sistemas e ferramentas existentes',
      features: ['Integração de Sistemas', 'APIs Personalizadas', 'Sincronização de Dados']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="solutions-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossas Soluções em Tecnologia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desenvolvemos soluções completas para impulsionar seu negócio digital
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
              itemScope
              itemType="https://schema.org/Service"
              role="listitem"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 group-hover:border-cyan-200 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3" itemProp="name">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4" itemProp="description">
                  {solution.description}
                </p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <CheckCircle size={12} className="text-cyan-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Section 4 - Desenvolvimento com FAQ Schema
function DevelopmentSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="development-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Desenvolvimento Completo para o Seu Negócio
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Na <strong>PORTTO</strong>, não apenas criamos sistemas - construímos <strong>soluções que resolvem problemas reais</strong>. Cada linha de código é pensada para trazer resultados mensuráveis para sua empresa.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Combinamos <strong>tecnologia de ponta</strong> com 
              <strong> entendimento de negócios</strong> para entregar 
              não apenas um produto, mas uma vantagem competitiva real.
            </p>
            
            <div className="space-y-4">
              {[
                'Desenvolvimento ágil e focado em resultados',
                'Tecnologias modernas e escaláveis',
                'Suporte contínuo e evolução do sistema',
                'Integração com ferramentas existentes'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nossos Resultados</h3>
              <div className="space-y-6">
                {[
                  { percent: '95%', text: 'Projetos entregues no prazo', description: 'Taxa de entrega dentro do prazo acordado' },
                  { percent: '100%', text: 'Clientes satisfeitos com o suporte', description: 'Satisfação no pós-venda e suporte técnico' },
                  { percent: '40%', text: 'Redução média de custos operacionais', description: 'Economia média com automação' }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <span className="text-2xl font-bold text-cyan-600">{item.percent}</span>
                    <div className="text-right">
                      <div className="text-gray-700 font-semibold">{item.text}</div>
                      <div className="text-gray-500 text-sm">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Section 5 - Atendimento com Local Business Schema
function ExclusiveSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="exclusive-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Atendimento Exclusivo PORTTO
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Nosso compromisso é ir <strong>além da simples prestação de serviços online</strong>; 
            estamos aqui para ser seu <strong>parceiro estratégico no crescimento do seu negócio</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Vantagens do Atendimento PORTTO</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                'Parceria real no crescimento do seu negócio',
                'Soluções que se adaptam às suas necessidades',
                'Suporte técnico e estratégico integrado',
                'Desenvolvimento com metodologias ágeis',
                'Transparência total no processo',
                'Resultados mensuráveis e relatórios detalhados'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-white text-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}