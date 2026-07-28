import { LogOut } from "lucide-react";

export default function Navbar({ nombre, onLogout }: { nombre: string; onLogout: () => void }) { 
  return (
    <header className="nav">
      <div className="brand">
        {/* Aquí debe ir la imagen de tu logo */}
        <img 
          src="/images/Logo.png" 
          alt="Logo" 
          style={{ height: "36px", width: "auto", objectFit: "contain" }}
        />
        <div>
          <h1 className="nav-title">Plataforma de Métricas</h1>
          <p className="nav-subtitle">Monitor energético</p>
        </div>
      </div>

      <div className="nav-right">
        <span className="user-name">{nombre}</span>
        <button className="logout" onClick={onLogout}>
          <LogOut size={16}/> Salir
        </button>
      </div>
    </header>
  ); 
}
