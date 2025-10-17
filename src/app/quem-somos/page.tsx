'use client'

import { motion } from 'framer-motion'
import {
    Target,
    Heart,
    Shield,
    Rocket,
    Users,
    Award,
    CheckCircle,
    Star,
    Calendar,
    Code,
    Zap,
    Globe,
    Mail,
    Linkedin,
    Github,
    MessageCircle
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

export default function QuemSomos() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const valores = [
        {
            icon: Target,
            title: 'Missão',
            description: 'Transformar ideias em realidade através de tecnologia inovadora, entregando soluções que impulsionam negócios e realizam sonhos.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Heart,
            title: 'Paixão',
            description: 'Amamos o que fazemos. Cada linha de código é escrita com dedicação e entusiasmo pela arte da programação.',
            color: 'from-pink-500 to-rose-500'
        },
        {
            icon: Shield,
            title: 'Confiança',
            description: 'Construímos relações baseadas na transparência e confiabilidade. Seu projeto está em boas mãos.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Rocket,
            title: 'Inovação',
            description: 'Sempre buscamos as melhores tecnologias e metodologias para entregar soluções modernas e eficientes.',
            color: 'from-purple-500 to-indigo-500'
        }
    ]

    const diferencais = [
        {
            icon: Code,
            title: 'Código de Qualidade',
            description: 'Desenvolvemos seguindo as melhores práticas e padrões de mercado.'
        },
        {
            icon: Zap,
            title: 'Alta Performance',
            description: 'Sistemas otimizados para velocidade e melhor experiência do usuário.'
        },
        {
            icon: Shield,
            title: 'Segurança',
            description: 'Priorizamos a segurança dos dados e informações dos nossos clientes.'
        },
        {
            icon: Globe,
            title: 'Tecnologias Modernas',
            description: 'Utilizamos as ferramentas mais atuais e eficientes do mercado.'
        }
    ]

    const estatisticas = [
        { numero: '50+', label: 'Projetos Entregues' },
        { numero: '100%', label: 'Clientes Satisfeitos' },
        { numero: '2+', label: 'Anos de Experiência' },
        { numero: '24/7', label: 'Suporte Disponível' }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'AboutPage',
                        'name': 'Quem Somos - PORTTO',
                        'description': 'Conheça a PORTTO, nossa missão, valores e o desenvolvedor por trás de todos os projetos.',
                        'mainEntity': {
                            '@type': 'Organization',
                            'name': 'PORTTO',
                            'founder': {
                                '@type': 'Person',
                                'name': 'Guilherme Henrique Porto',
                                'jobTitle': 'Desenvolvedor Full Stack',
                                'description': 'Desenvolvedor apaixonado por tecnologia e inovação'
                            },
                            'description': 'Desenvolvimento de sites, sistemas e automações para empresas'
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
                            Quem <span className="text-cyan-300">Somos</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
                            Conheça a história, os valores e a pessoa por trás de cada projeto que transforma ideias em realidade.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Nossa História */}
            <section className="py-16 md:py-24 -mt-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            variants={slideInLeft}
                            initial="hidden"
                            animate={mounted ? "visible" : "hidden"}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Nossa <span className="text-cyan-600">Jornada</span>
                            </h2>
                            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    A <strong>PORTTO</strong> nasceu da paixão por <strong>transformar ideias em realidade</strong>.
                                    Acreditamos que cada projeto é único e carrega consigo sonhos, objetivos e a essência de quem o idealizou.
                                </p>
                                <p>
                                    Nosso propósito vai além de simplesmente escrever código. Estamos aqui para ser
                                    <strong> parceiros no crescimento do seu negócio</strong>, oferecendo soluções tecnológicas
                                    que realmente fazem a diferença.
                                </p>
                                <p>
                                    Trabalhamos com <strong>transparência, confiança e dedicação</strong>, garantindo que
                                    cada detalhe do seu projeto seja tratado com a importância que merece.
                                </p>
                            </div>

                            {/* Estatísticas */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate={mounted ? "visible" : "hidden"}
                                className="grid grid-cols-2 gap-6 mt-8"
                            >
                                {estatisticas.map((estatistica, index) => (
                                    <motion.div
                                        key={estatistica.label}
                                        variants={itemVariants}
                                        className="text-center"
                                    >
                                        <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-1">
                                            {estatistica.numero}
                                        </div>
                                        <div className="text-gray-600 text-sm">
                                            {estatistica.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={slideInRight}
                            initial="hidden"
                            animate={mounted ? "visible" : "hidden"}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
                                <div className="flex items-center mb-6">
                                    <Target className="w-8 h-8 mr-3" />
                                    <h3 className="text-2xl font-bold">Nosso Compromisso</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-cyan-50 leading-relaxed">
                                        <strong>Entendemos que confiar seu projeto a alguém é um ato de coragem.</strong>
                                        Por isso, nos comprometemos a:
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Ouvir atentamente suas necessidades e objetivos',
                                            'Desenvolver soluções personalizadas e eficientes',
                                            'Manter comunicação transparente durante todo o processo',
                                            'Entregar dentro dos prazos combinados',
                                            'Oferecer suporte contínuo pós-entrega'
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <CheckCircle className="w-5 h-5 text-cyan-200 mt-0.5 flex-shrink-0" />
                                                <span className="text-cyan-50">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Nossos Valores */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Nossos <span className="text-cyan-600">Valores</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Princípios que guiam cada decisão e projeto que realizamos
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {valores.map((valor, index) => (
                            <motion.div
                                key={valor.title}
                                variants={itemVariants}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r ${valor.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <valor.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {valor.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {valor.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Fundador - Guilherme Porto */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Quem <span className="text-cyan-600">Coordena</span> Tudo Isso
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Conheça o desenvolvedor por trás de cada projeto e a paixão que move a PORTTO
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                {/* Placeholder para sua foto - substitua pela sua imagem */}
                                <Image
                                    src="/images/guilherme-porto.jpg"
                                    alt="Guilherme Henrique Porto - Desenvolvedor Full Stack"
                                    width={320}
                                    height={320}
                                    className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                                    priority
                                />


                                {/* Elementos decorativos */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                    Guilherme Henrique Porto
                                </h3>
                                <p className="text-cyan-600 font-semibold text-lg mb-4">
                                    Desenvolvedor Full Stack & Fundador da PORTTO
                                </p>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        <strong>Desenvolvedor apaixonado por tecnologia</strong> e por transformar
                                        ideias complexas em soluções simples e eficientes. Com mais de 2 anos de
                                        experiência no mercado, já participei de diversos projetos desafiadores
                                        que me ensinaram a importância de ouvir o cliente e entender suas reais necessidades.
                                    </p>
                                    <p>
                                        Acredito que <strong>cada linha de código carrega um propósito</strong> e
                                        que a tecnologia deve ser uma aliada no crescimento dos negócios. Meu
                                        compromisso é entregar não apenas um produto, mas uma experiência completa
                                        que supere expectativas.
                                    </p>
                                    <p>
                                        Quando não estou programando, estou estudando novas tecnologias,
                                        acompanhando as tendências do mercado e pensando em como podemos
                                        <strong> inovar ainda mais</strong> para ajudar nossos clientes.
                                    </p>
                                </div>
                            </div>

                            {/* Habilidades */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">Habilidades & Especialidades</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        'Desenvolvimento Web',
                                        'Sistemas Responsivos',
                                        'Automação de Processos',
                                        'Integração de APIs',
                                        'UX/UI Design',
                                        'Otimização SEO',
                                        'Gestão de Projetos',
                                        'Arquitetura de Software'
                                    ].map((habilidade, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{habilidade}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Redes Sociais */}
                            <div className="flex space-x-4 pt-4">
                                <a
                                    href="https://linkedin.com/in/guihenriqueporto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/Guihenrique62"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition-colors duration-200"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="mailto:porttodesenvolvimento@gmail.com"
                                    className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-lg transition-colors duration-200"
                                    aria-label="E-mail"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Diferenciais */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Por que Escolher a <span className="text-cyan-600">PORTTO</span>?
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {diferencais.map((diferencial, index) => (
                            <motion.div
                                key={diferencial.title}
                                variants={itemVariants}
                                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <diferencial.icon className="w-6 h-6 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {diferencial.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {diferencial.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Final */}
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
                            Pronto para Transformar sua Ideia?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Vamos conversar sobre seu projeto e como podemos ajudá-lo a alcançar seus objetivos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contato"
                                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Iniciar Projeto
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