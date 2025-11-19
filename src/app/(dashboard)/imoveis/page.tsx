export default function ImoveisPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Imóveis</h1>
      <div className="space-y-2">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Apartamento T2 - Porto</h3>
              <p className="text-sm text-gray-600">Rua das Flores, 123 • 85m² • 2 quartos</p>
              <p className="text-lg font-bold text-green-600 mt-1">250.000€</p>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Disponível</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Casa T3 - Lisboa</h3>
              <p className="text-sm text-gray-600">Avenida da Liberdade, 456 • 120m² • 3 quartos</p>
              <p className="text-lg font-bold text-green-600 mt-1">450.000€</p>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Em negociação</span>
          </div>
        </div>
      </div>
      <button className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg">
        + Novo Imóvel
      </button>
    </div>
  )
}