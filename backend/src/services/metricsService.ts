import { RegistroCSV } from "../utils/parser";
export interface KPIs { totalRegistros: number; ultimaLectura: RegistroCSV | null; promedios: Record<string, number>; maximos: Record<string, number>; }
export function calcularKPIs(registros: RegistroCSV[], columnas: string[]): KPIs {
  const promedios: Record<string, number> = {}, maximos: Record<string, number> = {};
  for (const column of columnas) {
    const values = registros.map((row) => row[column]).filter((value): value is number => typeof value === "number");
    if (!values.length) continue;
    promedios[column] = Number((values.reduce((a, b) => a + b, 0) / values.length).toFixed(2));
    maximos[column] = Math.max(...values);
  }
  return { totalRegistros: registros.length, ultimaLectura: registros.at(-1) ?? null, promedios, maximos };
}
