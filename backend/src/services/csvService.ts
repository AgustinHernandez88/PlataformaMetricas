import fs from "node:fs";
import path from "node:path";
import { env } from "../config/env";

export function obtenerRutaCSV(cliente: string) {
  // El identificador viene de un JWT firmado, nunca del navegador.
  const ruta = path.resolve(env.csvRoot, cliente, "historico.csv");
  if (!ruta.startsWith(`${env.csvRoot}${path.sep}`)) throw new Error("Cliente inválido");
  return ruta;
}
export function leerCSVCliente(cliente: string) { return fs.readFileSync(obtenerRutaCSV(cliente), "utf8"); }
