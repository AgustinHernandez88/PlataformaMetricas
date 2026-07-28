import path from "node:path";
import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: Number(process.env.PORT ?? 3333),
  jwtSecret: process.env.JWT_SECRET ?? "solo-desarrollo-cambia-esta-clave",
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
  csvRoot: path.resolve(process.cwd(), process.env.CSV_ROOT ?? "data/clientes"),
};
