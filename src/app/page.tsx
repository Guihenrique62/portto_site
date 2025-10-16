'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  MessageCircle, 
  Rocket, 
  BarChart3, 
  Workflow,
  Shield,
  Star,
  Users 
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section 1 - Hero com Video */}
      <HeroSection />
      
      {/* Section 2 - Estatísticas */}
      <StatsSection />
      
      {/* Section 3 - Nossas Soluções */}
      <SolutionsSection />
      
      {/* Section 4 - Desenvolvimento Completo */}
      <DevelopmentSection />
      
      {/* Section 5 - Atendimento Exclusivo */}
      <ExclusiveSection />
    </div>
  )
}

// Section 1 - Hero com Video
function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video de Fundo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/tech-background.mp4" type="video/mp4" />
          {/* Fallback image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900" />
        </video>
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
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
        >
          Criamos <span className="font-semibold text-cyan-300">sistemas, sites e automações</span> 
          <br />para sua empresa crescer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Conheça nossas soluções
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 2 - Estatísticas
function StatsSection() {
  const stats = [
    { number: '300%', text: 'Aumento no tráfego orgânico' },
    { number: '40%', text: 'Redução de custos operacionais' },
    { number: '2.5x', text: 'Mais leads qualificados' },
    { number: '24/7', text: 'Automação funcionando' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Como um sistema bem feito transforma negócios
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
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

// Section 3 - Nossas Soluções
function SolutionsSection() {
  const solutions = [
    {
      icon: Globe,
      title: 'Desenvolvimento de Sites',
      description: 'Sites modernos, responsivos e otimizados para conversão'
    },
    {
      icon: MessageCircle,
      title: 'Automatização de Chats',
      description: 'Chatbots inteligentes para atendimento 24/7'
    },
    {
      icon: Rocket,
      title: 'Sistemas MVP',
      description: 'Desenvolvimento ágil do seu produto mínimo viável'
    },
    {
      icon: BarChart3,
      title: 'Sistemas de Controle e Gestão',
      description: 'Dashboards e ferramentas para tomada de decisão'
    },
    {
      icon: Workflow,
      title: 'Automatização de Processos',
      description: 'Integrações com n8n para otimizar operações'
    },
    {
      icon: Shield,
      title: 'Sistemas Web Personalizados',
      description: 'Soluções sob medida para necessidades específicas'
    },
    {
      icon: Users,
      title: 'CRM e Automação Comercial',
      description: 'Gestão de clientes e automação de vendas'
    },
    {
      icon: Star,
      title: 'Integrações API',
      description: 'Conectamos seus sistemas e ferramentas'
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossas Soluções
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta para impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 group-hover:border-cyan-200 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Section 4 - Desenvolvimento Completo
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Desenvolvimento completo para o seu negócio
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Na PORTTO, não apenas criamos sistemas - construímos <span className="font-semibold text-cyan-600">soluções que resolvem problemas reais</span>. Cada linha de código é pensada para trazer resultados mensuráveis para sua empresa.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Combinamos <span className="font-semibold text-blue-600">tecnologia de ponta</span> com 
              <span className="font-semibold text-purple-600"> entendimento de negócios</span> para entregar 
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
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" />
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
              <div className="space-y-6">
                {[
                  { percent: '95%', text: 'Projetos entregues no prazo' },
                  { percent: '100%', text: 'Clientes satisfeitos com o suporte' },
                  { percent: '40%', text: 'Redução média de custos operacionais' }
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
                    <span className="text-gray-700 text-right">{item.text}</span>
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

// Section 5 - Atendimento Exclusivo
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Cliente PORTTO é atendido com exclusividade
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Nosso compromisso é ir <span className="font-semibold text-cyan-600">além da simples prestação de serviços online</span>; 
            estamos aqui para ser seu <span className="font-semibold text-blue-600">impulsionador na gestão do seu negócio</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">O que isso significa para você?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                'Parceria real no crescimento do seu negócio',
                'Soluções que se adaptam às suas necessidades',
                'Suporte técnico e estratégico integrado'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
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