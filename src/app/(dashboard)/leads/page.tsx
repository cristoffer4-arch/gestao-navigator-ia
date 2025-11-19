export default function LeadsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filtrar leads..."
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="space-y-2">
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h3 className="font-semibold">João Silva</h3>
            <p className="text-sm text-gray-600">912 345 678 • Interesse: Apartamento T2</p>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Contato</span>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">WhatsApp</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Ligar</button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Maria Costa</h3>
            <p className="text-sm text-gray-600">913 456 789 • Interesse: Casa T3</p>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Proposta</span>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">WhatsApp</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Ligar</button>
          </div>
        </div>
      </div>
      <button className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg">
        + Novo Lead
      </button>
    </div>
  )
}