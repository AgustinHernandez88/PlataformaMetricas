import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

const defaultCsvRoot = path.resolve(__dirname, "../../data/clientes");

export const env = {
  port: Number(process.env.PORT ?? 3333),
  jwtSecret: process.env.JWT_SECRET ?? "solo-desarrollo-cambia-esta-clave",
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:5173",

  csvRoot: process.env.CSV_ROOT
    ? path.resolve(process.env.CSV_ROOT)
    : defaultCsvRoot,
};