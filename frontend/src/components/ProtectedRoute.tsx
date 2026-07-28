import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: React.ReactElement }) { return localStorage.getItem("token") ? children : <Navigate to="/" replace />; }
