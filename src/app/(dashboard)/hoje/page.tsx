export default function HojePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hoje</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Tarefas do Dia</h3>
          <ul className="mt-2 space-y-1">
            <li>• Ligar para João Silva - 14:30</li>
            <li>• Visita ao imóvel na Rua das Flores</li>
            <li>• Seguir up com lead Maria Costa</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">💡 Sugestão IA</h3>
          <p className="text-blue-700 mt-1">
            Com base no seu histórico, considere focar em imóveis T2 nesta zona - alta demanda.
          </p>
        </div>
      </div>
    </div>
  )
}