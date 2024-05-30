import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
    <h1 className="text-4xl font-black">Iniciar Sesión</h1>
    <p>Para realizar un pedido debe iniciar sesión</p>
    
    <div className="px-5 py-10 mt-10 bg-white shadow-md">
        <form action="">

            <div className="mb-4">
                <label
                    className="text-slate-800"
                    htmlFor="email"
                >
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="block w-full p-3 mt-2 bg-gray-50"
                    name="email"
                    placeholder="Tu Email"
                />
            </div>
            
            <div className="mb-4">
                <label
                    className="text-slate-800"
                    htmlFor="password"
                >
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    className="block w-full p-3 mt-2 bg-gray-50"
                    name="password"
                    placeholder="Tu Password"
                />
            </div>

            <input
                type="submit"
                value="Iniciar Sesión"
                className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-600 hover:bg-indigo-800 cursos-pointer"
            />
        </form>
    </div>

    <nav className="mt-5">
      <Link to="/auth/register">¿No tienes cuenta? Crea una</Link>
    </nav>
</>
  )
}
