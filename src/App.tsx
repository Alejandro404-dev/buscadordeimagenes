import FormularioBusqueda from "./components/FormularioBusqueda"
import Resultados from "./components/Resultados"


function App() {


  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50">

      {/* HEADER */}
      <header className="bg-zinc-900 border-b border-zinc-800 p-4">
        <h1 className="text-center text-3xl font-bold tracking-wide">
          Buscador de <span className="text-cyan-400">Imágenes</span>
        </h1>
      </header>

      {/* MAIN */}
      <main className="flex flex-col grow">


        <section className="bg-zinc-900 p-6 border-b border-zinc-800">
          <FormularioBusqueda />
        </section>

        <section className="bg-zinc-950 p-6 grow">
          <Resultados />
        </section>

      </main>

      <footer className="bg-zinc-900 border-t border-zinc-800 p-4 text-center text-zinc-400 text-sm">
        Todos los derechos reservados
      </footer>
    </div>
  )
}

export default App
