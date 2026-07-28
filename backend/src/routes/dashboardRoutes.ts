import { Router } from "express";
import { obtenerDashboard } from "../controllers/dashboardController";
import { verificarToken } from "../middleware/authMiddleware";
const router = Router(); router.get("/", verificarToken, obtenerDashboard); export default router;
