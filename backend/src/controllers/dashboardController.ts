import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import { leerCSVCliente } from "../services/csvService";
import { calcularKPIs } from "../services/metricsService";
import { parsearCSV } from "../utils/parser";
export function obtenerDashboard(req: AuthRequest, res: Response) {
  try {
    const csv = parsearCSV(leerCSVCliente(req.usuario!.cliente));
    return res.json({ ok: true, cliente: req.usuario!.nombre, metadata: csv.metadata, columnas: csv.columnas, kpis: calcularKPIs(csv.registros, csv.columnas), registros: csv.registros });
  } catch (error) { return res.status(404).json({ ok: false, mensaje: error instanceof Error ? error.message : "No fue posible leer los datos" }); }
}
