import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export default function Login() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("");

    const [password, setPassword] = useState("");

    async function ingresar() {

        try {

            const res = await api.post("/auth/login", {

                usuario,

                password

            });

            localStorage.setItem("token", res.data.token);

            navigate("/dashboard");

        }

        catch {

            alert("Usuario o contraseña incorrectos");

        }

    }

    return (

        <div className="h-screen flex justify-center items-center bg-slate-900">

            <div className="bg-slate-800 rounded-xl p-10 w-96">

                <h1 className="text-3xl font-bold text-white mb-8">

                    Plataforma de Métricas

                </h1>

                <input

                    className="w-full p-3 rounded mb-4"

                    placeholder="Usuario"

                    value={usuario}

                    onChange={(e)=>setUsuario(e.target.value)}

                />

                <input

                    type="password"

                    className="w-full p-3 rounded mb-6"

                    placeholder="Contraseña"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                />

                <button

                    onClick={ingresar}

                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"

                >

                    Ingresar

                </button>

            </div>

        </div>

    );

}