'use client'

import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  User,
  Building,
  CheckCircle,
  Star,
  Shield
} from 'lucide-react'
import { useState, useEffect } from 'react'

// Variantes de animação reutilizáveis
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  }
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  }
}

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: '',
    orcamento: '5000-10000'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Garante que as animações só rodem no client
  useEffect(() => {
    setMounted(true)
  }, [])

  const servicos = [
    'Desenvolvimento de Sites',
    'Automatização de Chats',
    'Sistemas MVP',
    'Sistemas de Gestão',
    'Automatização de Processos',
    'Sistemas Personalizados',
    'Outro'
  ]

  const orcamentos = [
    { value: '100-1000', label: 'R$ 100 - R$ 1.000' },
    { value: '1000-5000', label: 'R$ 1.000 - R$ 5.000' },
    { value: '5000-10000', label: 'R$ 5.000 - R$ 10.000' },
    { value: '10000-25000', label: 'R$ 10.000 - R$ 25.000' },
    { value: '25000+', label: 'Acima de R$ 25.000' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Formatando a mensagem para WhatsApp
      const whatsappMessage = `
*NOVO CONTATO - PORTTO*

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa || 'Não informada'}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Serviço de Interesse:* ${formData.servico}
*Orçamento Previsto:* ${orcamentos.find(o => o.value === formData.orcamento)?.label || formData.orcamento}

*Mensagem:*
${formData.mensagem}

---
_Enviado via Site PORTTO_
    `.trim()

      // Formatando a mensagem para email
      const emailSubject = `Novo Contato - ${formData.nome} - ${formData.servico}`
      const emailBody = `
NOVO CONTATO RECEBIDO - PORTTO

DADOS DO CLIENTE:
Nome: ${formData.nome}
Empresa: ${formData.empresa || 'Não informada'}
E-mail: ${formData.email}
Telefone: ${formData.telefone}
Serviço de Interesse: ${formData.servico}
Orçamento Previsto: ${orcamentos.find(o => o.value === formData.orcamento)?.label || formData.orcamento}

MENSAGEM:
${formData.mensagem}

---
Enviado via Formulário do Site PORTTO
    `.trim()

      // Abrir WhatsApp com a mensagem formatada
      const whatsappUrl = `https://wa.me/5562991556834?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, '_blank')

      // Enviar email
      const emailUrl = `mailto:porttodesenvolvimento@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      window.open(emailUrl, '_blank')

      // Simulação de delay para melhor UX
      await new Promise(resolve => setTimeout(resolve, 1000))

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after success
      setTimeout(() => {
        setFormData({
          nome: '',
          empresa: '',
          email: '',
          telefone: '',
          servico: '',
          mensagem: '',
          orcamento: '5000-10000'
        })
        setIsSubmitted(false)
      }, 5000)

    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setIsSubmitting(false)
      // Você pode adicionar um toast de erro aqui
      alert('Erro ao enviar formulário. Tente novamente.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md w-full mx-4 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="w-8 h-8 text-green-500" />
          </motion.div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">Mensagem Enviada!</h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Obrigado pelo seu contato. Nossa equipe entrará em contato em até 24 horas.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-3 text-sm text-gray-500"
          >
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs md:text-sm">Resposta em até 24h</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4" />
              <span className="text-xs md:text-sm">Dados protegidos</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-2">
              Vamos <span className="text-cyan-300">Conversar</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed px-4">
              Pronto para transformar sua ideia em realidade? Nossa equipe está aqui para ajudar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 -mt-8 md:-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
            {/* Contact Form */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 lg:p-12">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center mb-6 md:mb-8"
                >
                  <Send className="w-6 h-6 md:w-8 md:h-8 text-cyan-500 mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Solicite seu Orçamento</h2>
                </motion.div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={mounted ? "visible" : "hidden"}
                >
                  <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="md:col-span-2 lg:col-span-1">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        <User className="w-4 h-4 inline mr-1" />
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm md:text-base text-gray-600 placeholder-gray-500 bg-white"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className="md:col-span-2 lg:col-span-1">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        <Building className="w-4 h-4 inline mr-1" />
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm md:text-base text-gray-600 placeholder-gray-500 bg-white"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="md:col-span-2 lg:col-span-1">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm md:text-base text-gray-600 placeholder-gray-500 bg-white"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="md:col-span-2 lg:col-span-1">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm md:text-base text-gray-600 placeholder-gray-500 bg-white"
                        placeholder="(62) 99155-6834"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="md:col-span-2 lg:col-span-1">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Serviço de Interesse *
                      </label>
                      <select
                        name="servico"
                        required
                        value={formData.servico}
                        onChange={handleChange}
                        className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm md:text-base text-gray-600 bg-white"
                      >
                        <option value="" className="text-gray-500">Selecione um serviço</option>
                        {servicos.map(servico => (
                          <option key={servico} value={servico} className="text-gray-800">{servico}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1">
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Orçamento Previsto
                      </label>
                      <select
                        name="orcamento"
                        value={formData.orcamento}
                        onChange={handleChange}
                        className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm md:text-base text-gray-600 bg-white"
                      >
                        {orcamentos.map(orcamento => (
                          <option key={orcamento.value} value={orcamento.value} className="text-gray-800">
                            {orcamento.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Conte-nos sobre seu projeto *
                    </label>
                    <textarea
                      name="mensagem"
                      required
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none text-sm md:text-base text-gray-600 placeholder-gray-500 bg-white"
                      placeholder="Descreva seu projeto, objetivos, prazos e qualquer informação relevante..."
                    />
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm md:text-base shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              className="space-y-6 md:space-y-8"
            >
              {/* Info Card */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8"
              >
                <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                  Informações de Contato
                </motion.h3>

                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      icon: Phone,
                      iconBg: 'bg-cyan-100',
                      iconColor: 'text-cyan-600',
                      title: 'Telefone',
                      content: '(62) 99155-6834',
                      link: 'https://wa.me/5562991556834',
                      linkText: 'Falar no WhatsApp',
                      linkIcon: MessageCircle,
                      linkColor: 'text-cyan-600 hover:text-cyan-700'
                    },
                    {
                      icon: Mail,
                      iconBg: 'bg-blue-100',
                      iconColor: 'text-blue-600',
                      title: 'E-mail',
                      content: 'porttodesenvolvimento@gmail.com',
                      link: 'mailto:porttodesenvolvimento@gmail.com',
                      linkText: 'Enviar e-mail',
                      linkColor: 'text-blue-600 hover:text-blue-700'
                    },
                    {
                      icon: MapPin,
                      iconBg: 'bg-purple-100',
                      iconColor: 'text-purple-600',
                      title: 'Localização',
                      content: 'Goiânia, GO\nBrasil'
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      className="flex items-start space-x-3 md:space-x-4"
                    >
                      <div className={`w-10 h-10 md:w-12 md:h-12 ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">{item.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line text-xs md:text-sm mt-1">{item.content}</p>
                        {item.link && (
                          <a
                            href={item.link}
                            target={item.link.includes('http') ? '_blank' : undefined}
                            rel={item.link.includes('http') ? 'noopener noreferrer' : undefined}
                            className={`${item.linkColor} text-xs md:text-sm font-medium inline-flex items-center mt-1`}
                          >
                            {item.linkIcon && <item.linkIcon className="w-3 h-3 md:w-4 md:h-4 mr-1" />}
                            {item.linkText}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">Por que escolher a PORTTO?</h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    'Resposta em até 24 horas',
                    'Orçamento sem compromisso',
                    'Consultoria especializada gratuita',
                    'Mais de 50 projetos entregues',
                    'Tecnologias modernas e escaláveis'
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <Star className="w-4 h-4 md:w-5 md:h-5 text-cyan-200 flex-shrink-0 mt-0.5" />
                      <span className="text-cyan-50 text-sm md:text-base leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1 }}
            className="text-white"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Ainda com dúvidas?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              Nossa equipe está pronta para esclarecer todas suas questões e ajudar a encontrar a melhor solução.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="https://wa.me/5562991556834"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 md:py-3 md:px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-sm md:text-base"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}