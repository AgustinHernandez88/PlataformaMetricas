import { Router } from "express";

import { verificarToken } from "../middleware/authMiddleware";

import { obtenerDashboard } from "../controllers/dashboardController";

const router = Router();

router.get(

    "/",

    verificarToken,

    obtenerDashboard

);

export default router;