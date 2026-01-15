import { useMemo } from "react"
import { useStore } from "../store/store"

export default function Paginacion() {

    const pagina = useStore((state) => state.pagina)
    const totalPaginas = useStore((state) => state.totalPaginas)
    const establecerPagina = useStore((state) => state.establecerPagina)

    const grupoImagenes = 5

    const grupoActual = Math.floor((pagina - 1) / grupoImagenes)
    console.log("el grupo actual es el numero: ", grupoActual)

    const paginaInicio = grupoActual * grupoImagenes + 1
    console.log("la pagina de inicio del grupo es: ", paginaInicio)

    const paginaFin = Math.min(totalPaginas, paginaInicio + grupoImagenes - 1)
    console.log("la pagina final es: ", paginaFin)

    const numerosPaginas = useMemo(() => {

        const arregloNumerosPaginas: number[] = []

        for (let i = paginaInicio; i <= paginaFin; i++) {
            arregloNumerosPaginas.push(i)

        }
        return arregloNumerosPaginas

    }, [paginaInicio, paginaFin])


    return (
        <div className="flex justify-center items-center gap-4 mt-10">

            {/* Botón anterior */}
            <button
                className="
          px-5 py-2 rounded-lg
          bg-zinc-900 text-zinc-300
          border border-zinc-800
          hover:bg-zinc-800 hover:text-white
          disabled:opacity-40 disabled:cursor-not-allowed
          transition
        "
                onClick={() => {
                    if (pagina > 1) {
                        establecerPagina(pagina - 1)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                }}
                disabled={pagina <= 1}
            >
                Anterior
            </button>

            {paginaInicio > 1 && (
                <button
                    onClick={() => {
                        const nuevaPagina = paginaInicio - 1
                        establecerPagina(nuevaPagina)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="px-2 py-1 bg-gray-400 text-black rounded cursor-pointer"
                >
                    &laquo;
                </button>
            )}

            {numerosPaginas.map((num) => (
                <button
                    key={num}
                    onClick={() => {
                        establecerPagina(num)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}

                    className={`px-3 py-1 rounded cursor-pointer ${num === pagina ? 'bg-blue-600 text-white' : 'bg-gray-600 text-black '} `}
                >
                    {num}
                </button>
            ))}
            {paginaFin < totalPaginas && (
                <button
                    onClick={() => {
                        const nuevaPagina = paginaFin + 1
                        establecerPagina(nuevaPagina)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="px-2 py-1 bg-gray-400 text-black rounded cursor-pointer"
                >
                    &raquo;
                </button>
            )}

            {/* Botón siguiente */}
            <button
                className="
          px-5 py-2 rounded-lg
          bg-cyan-500 text-zinc-950 font-semibold
          hover:bg-cyan-400
          disabled:opacity-40 disabled:cursor-not-allowed
          transition
        "
                onClick={() => {
                    if (pagina < totalPaginas) {
                        establecerPagina(pagina + 1)
                        window.scrollTo({ top: 0, behavior: 'smooth' })

                    }
                }}
                disabled={pagina >= totalPaginas}
            >
                Siguiente
            </button>

        </div>
    )
}
