import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import type { DashboardData } from "../types/dashboard";
import Navbar from "../components/Navbar";
import MetricGrid from "../components/MetricGrid";
import DashboardChart from "../components/DashboardChart";
import DataTable from "../components/DataTable";
import Footer from "../components/Footer"; // 1. Importamos el Footer

export default function Dashboard() { 
  const [data, setData] = useState<DashboardData>(); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  useEffect(() => { 
    api.get<DashboardData>("/dashboard")
      .then((result) => setData(result.data))
      .catch((requestError) => { 
        if (requestError.response?.status === 401) { 
          localStorage.removeItem("token"); 
          navigate("/", { replace: true }); 
        } else setError(requestError.response?.data?.mensaje ?? "No fue posible cargar el dashboard."); 
      }); 
  }, [navigate]); 

  function logout() { 
    localStorage.removeItem("token"); 
    navigate("/", { replace: true }); 
  } 

  if (error) return <main className="loading"><div className="alert">{error}</div></main>; 
  if (!data) return <main className="loading">Cargando métricas…</main>; 

  const timestamp = data.kpis.ultimaLectura && Object.entries(data.kpis.ultimaLectura).find(([key]) => /timestamp|fecha|date|time/i.test(key))?.[1]; 

  return (
    <main className="page">
      <Navbar nombre={data.cliente} onLogout={logout}/>
      <div className="content">
        <section className="hero">
          <div>
            <h1>{data.cliente}</h1>
            <p>{data.metadata.Gateway ?? data.metadata["Device Type"] ?? "Panel de métricas"}</p>
          </div>
          <div className="timestamp">
            Última lectura<strong>{timestamp ? String(timestamp) : "Sin datos"}</strong>
          </div>
        </section>
        <MetricGrid total={data.kpis.totalRegistros} averages={data.kpis.promedios} maximums={data.kpis.maximos}/>
        <DashboardChart columns={data.columnas} rows={data.registros}/>
        <DataTable columns={data.columnas} rows={data.registros}/>
      </div>

      {/* 2. Añadimos el Footer aquí al final de la página */}
      <Footer />
    </main>
  ); 
}
