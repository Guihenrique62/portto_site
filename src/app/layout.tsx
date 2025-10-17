import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: {
    default: 'PORTTO - Desenvolvimento de Sites, Sistemas e Automações',
    template: '%s | PORTTO'
  },
  description: 'Criamos sistemas, sites e automações inteligentes para sua empresa crescer. Desenvolvimento web, automação com n8n, chatbots e sistemas personalizados.',
  keywords: [
    'desenvolvimento de sites',
    'automação de processos',
    'sistemas web',
    'n8n',
    'chatbots',
    'desenvolvimento mvp',
    'sistemas gestão',
    'automação comercial',
    'desenvolvimento software'
  ].join(', '),
  authors: [{ name: 'PORTTO' }],
  creator: 'PORTTO',
  publisher: 'PORTTO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portto.dev.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://portto.dev.br',
    title: 'PORTTO - Desenvolvimento de Sites, Sistemas e Automações',
    description: 'Criamos sistemas, sites e automações inteligentes para sua empresa crescer',
    siteName: 'PORTTO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PORTTO - Soluções em Tecnologia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PORTTO - Desenvolvimento de Sites, Sistemas e Automações',
    description: 'Criamos sistemas, sites e automações inteligentes para sua empresa crescer',
    images: ['/og-image.jpg'],
    creator: '@portto',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Adicione aqui quando tiver
    // google: 'seu-codigo-verificacao-google',
    // yandex: 'seu-codigo-verificacao-yandex',
    // yahoo: 'seu-codigo-verificacao-yahoo',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload para recursos críticos */}
        <link
          rel="preload"
          href="/videos/tech-background.mp4"
          as="video"
          type="video/mp4"
        />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'PORTTO',
              'alternateName': 'PORTTO Tecnologia',
              'url': 'https://portto.dev.br',
              'logo': 'https://portto.dev.br/logo.png',
              'description': 'Desenvolvimento de sites, sistemas e automações para empresas',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Sua Cidade',
                'addressRegion': 'SE',
                'addressCountry': 'BR'
              },
              'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+55-62-98528-0386',
                'contactType': 'customer service',
                'areaServed': 'BR',
                'availableLanguage': 'pt-BR'
              },
              'sameAs': [
                'https://www.linkedin.com/company/portto',
                'https://www.instagram.com/portto'
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}