import type { Foto } from "../types"
import { useStore } from "../store/store"
import Paginacion from "./Paginacion"



export default function Resultados() {
  const resultados = useStore((state) => state.resultados)

  const entrada = useStore((state) => state.entrada)

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

        {resultados && resultados.length > 0 ? (
          resultados.map((foto: Foto) => (
            <div
              key={foto.id}
              className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-cyan-500/10 transition"
            >
              <img
                src={foto.urls.small}
                alt={foto.alt_description}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 space-y-2">
                <h3 className="font-bold text-lg text-zinc-50">
                  {foto.user.name}
                </h3>

                <p className="text-zinc-400 text-sm">
                  {foto.description || foto.alt_description || "Sin descripción"}
                </p>
              </div>
            </div>
          ))
        ) : (
          entrada ? (<p className="text-center col-span-3 text-zinc-400"> No se encontraron resultados</p>) : (null)
        )}

      </div>
      {resultados && resultados.length > 0 && <Paginacion />}


    </div>
  )
}

