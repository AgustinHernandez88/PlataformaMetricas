export type RegistroCSV = Record<string, string | number | null>;
export interface CSVParseado { metadata: Record<string, string>; columnas: string[]; registros: RegistroCSV[]; }

const aliases = ["timestamp", "fecha", "date", "datetime", "time"];
function numberOrText(value: string): string | number | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const normalised = trimmed.replace(/\.(?=\d{3}(?:\D|$))/g, "").replace(",", ".");
  const numeric = Number(normalised);
  return Number.isFinite(numeric) && /^[+-]?[\d.,]+$/.test(trimmed) ? numeric : trimmed;
}
export function parsearCSV(contenido: string): CSVParseado {
  const lines = contenido.split(/\r?\n/).filter((line) => line.trim());
  const delimiter = lines.find((line) => line.includes("\t"))?.includes("\t") ? "\t" : ",";
  const rows = lines.map((line) => line.split(delimiter).map((value) => value.trim().replace(/^"|"$/g, "")));
  const headerIndex = rows.findIndex((row) => row.some((cell) => aliases.includes(cell.toLowerCase().replace(/[ _-]/g, ""))));
  if (headerIndex < 0) throw new Error("No se encontró una columna de fecha u hora en el CSV");
  const metadata: Record<string, string> = {};
  rows.slice(0, headerIndex).forEach((row) => { if (row.length >= 2 && row[0] && row[1]) metadata[row[0]] = row[1]; });
  const columnas = rows[headerIndex];
  const registros = rows.slice(headerIndex + 1).filter((row) => row.some(Boolean)).map((row) => Object.fromEntries(columnas.map((column, index) => [column, numberOrText(row[index] ?? "")]))) as RegistroCSV[];
  return { metadata, columnas, registros };
}
