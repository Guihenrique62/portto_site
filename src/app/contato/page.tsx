'use client'

import { useState } from 'react'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com um serviço de email ou API
    console.log('Dados do formulário:', formData)
    alert('Mensagem enviada com sucesso!')
    setFormData({ nome: '', email: '', mensagem: '' })
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                required
                rows={5}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.mensagem}
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Outras Formas de Contato</h3>
              <p>📧 email@empresa.com</p>
              <p>📞 (11) 99999-9999</p>
              <p>📍 Endereço da empresa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}