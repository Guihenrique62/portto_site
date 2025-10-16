import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Transforme seu Negócio</h1>
          <p className="text-xl mb-8">Soluções inovadoras para seu crescimento</p>
          <Link 
            href="/contato" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Começar Agora
          </Link>
        </div>
      </section>

      {/* Resumo das Seções */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card Quem Somos */}
            <Link href="/quem-somos" className="group">
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">Quem Somos</h3>
                <p>Conheça nossa história, valores e equipe</p>
              </div>
            </Link>

            {/* Card Soluções */}
            <Link href="/nossas-solucoes" className="group">
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">Nossas Soluções</h3>
                <p>Descubra como podemos ajudar seu negócio</p>
              </div>
            </Link>

            {/* Card Depoimentos */}
            <Link href="/depoimentos" className="group">
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">Depoimentos</h3>
                <p>Veja o que nossos clientes dizem</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}