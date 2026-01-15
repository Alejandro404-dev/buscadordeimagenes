import { useForm, type SubmitHandler } from "react-hook-form";
import IconoLupa from "./IconoLupa";
import { useStore } from "../store/store";

interface DatosFormulario {
  consulta: string
}


export default function FormularioBusqueda() {

  const { obtenerDatos, establecerEntrada } = useStore()


  const {
    register: register,
    handleSubmit: manejarEnvio,
    reset: reiniciar,

    formState: { errors }
  } = useForm<DatosFormulario>()


  const funcionEnvio: SubmitHandler<DatosFormulario> = (datos) => {

    establecerEntrada(datos.consulta)
    obtenerDatos()
    reiniciar()
  }

  return (

    <form
      onSubmit={manejarEnvio(funcionEnvio)}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar imágenes..."
          className="
        w-96 px-5 py-3 rounded-full
        bg-zinc-800 text-zinc-100
        placeholder-zinc-400
        border border-zinc-700
        focus:outline-none focus:ring-2 focus:ring-cyan-400
      "
          {...register('consulta', {
            required: "Debes incluir una descripción de la imagen"
          })}
        />

        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <IconoLupa className="w-6 h-6 text-zinc-400 hover:text-cyan-400 transition" />
        </button>
      </div>

      {errors.consulta && (
        <p className="text-red-400 text-sm">
          {errors.consulta.message}
        </p>
      )}
    </form>

  )
}
