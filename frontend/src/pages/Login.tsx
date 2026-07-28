import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../services/api";
import Footer from "../components/Footer"; // 1. Importamos el Footer

export default function Login() { 
  const [usuario, setUsuario] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  async function submit(event: FormEvent) { 
    event.preventDefault(); 
    setError(""); 
    setLoading(true); 
    try { 
      const { data } = await api.post("/auth/login", { usuario, password }); 
      localStorage.setItem("token", data.token); 
      navigate("/dashboard", { replace: true }); 
    } catch (requestError) { 
      setError(
        axios.isAxiosError(requestError) && !requestError.response 
          ? "No se pudo conectar al backend. Inícialo en el puerto 3333." 
          : "Usuario o contraseña incorrectos."
      ); 
    } finally { 
      setLoading(false); 
    } 
  } 

  return (
    <main className="login">
      <form className="login-card" onSubmit={submit}>
        <div className="brand">
          <img 
            src="/images/Logo.png" 
            alt="Logo de la empresa" 
            style={{ maxHeight: "48px", width: "auto" }}
          />
        </div>
        
        <h1>Bienvenido</h1>
        <p className="muted">Ingresa para ver tus métricas y registros históricos.</p>
        
        <label className="field">
          Usuario
          <input 
            autoComplete="username" 
            value={usuario} 
            onChange={(event) => setUsuario(event.target.value)} 
            required
          />
        </label>
        
        <label className="field">
          Contraseña
          <input 
            autoComplete="current-password" 
            type="password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            required
          />
        </label>
        
        {error && <p className="error">{error}</p>}
        
        <button className="primary" disabled={loading}>
          {loading ? "Ingresando…" : "Ingresar"}
        </button>
        
        <p className="muted hint">
          Demo: <strong>demo</strong> / <strong>demo1234</strong>
        </p>
      </form>

      {/* 2. Añadimos el Footer aquí */}
      <Footer />
    </main>
  ); 
}
