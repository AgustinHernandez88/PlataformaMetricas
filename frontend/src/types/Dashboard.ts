export type Row = Record<string, string | number | null>;
export interface DashboardData { ok: true; cliente: string; metadata: Record<string, string>; columnas: string[]; kpis: { totalRegistros: number; ultimaLectura: Row | null; promedios: Record<string, number>; maximos: Record<string, number>; }; registros: Row[]; }
