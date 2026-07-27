import { LogOut } from "lucide-react";

export default function Navbar() {

    return (

        <nav className="h-16 bg-slate-800 border-b border-slate-700 flex justify-between items-center px-8">

            <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">

                    <img
                    src={Logo}
                    className="w-12"
                    />

                </div>

                <div>

                    <h1 className="text-white font-bold text-xl">

                        Plataforma de Métricas

                    </h1>

                    <p className="text-slate-400 text-sm">

                        BetterCommerce Analytics

                    </p>

                </div>

            </div>

            <button

                className="flex items-center gap-2 text-white hover:text-red-400"

            >

                <LogOut size={18}/>

                Salir

            </button>

        </nav>

    )

}