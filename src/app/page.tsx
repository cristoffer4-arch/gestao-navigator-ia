export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Navigator IA Imobiliário</h1>
      </div>

      <div className="relative flex place-items-center">
        <h2 className="text-2xl">Bem-vindo ao futuro da gestão imobiliária</h2>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">Hoje</h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Tarefas do dia e sugestões IA personalizadas.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">Leads</h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Gestão eficiente do funil de leads com filtros avançados.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">Imóveis</h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Controle completo da sua carteira imobiliária.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h3 className="mb-3 text-2xl font-semibold">Avaliação & IA</h3>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Relatórios profissionais e assistente IA em português.
          </p>
        </div>
      </div>
    </main>
  )
}