import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {

  const {pedido, total} = useQuiosco();

  const comprobarPedido = () => pedido.length === 0;
  console.log(comprobarPedido())

  return (
    <aside className="h-screen p-5 overflow-y-scroll w-72">
      <h1 className="text-4xl font-black">
        Mi Pedido
      </h1>
      <p className="my-5 text-lg">
        Aqui podras ver el resumen y totales
      </p>

      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="text-2xl text-center">
            No hay elementos
          </p>
        ) : (
          pedido.map(producto => (
            <ResumenProducto
              key={producto.id}
              producto={producto}
            />
          ))
        )}
      </div>

      <p className="mt-10 text-xl">
        Total: {''}
        {formatearDinero(total)}
      </p>

      <form action="" className="w-full">
        <div className="mt-5">
          <input
            type="submit"
            className= {` ${comprobarPedido() ?
              'bg-indigo-100':
              'bg-indigo-600 rounded cursor-pointer hover:bg-indigo-800'
            } w-full px-5 py-2 font-bold text-center text-white uppercase`}
            value='Confirmar Pedido'
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </aside>
  )
}
