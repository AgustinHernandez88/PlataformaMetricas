import express from "express";
import cors from "cors";
import { env } from "./config/env";
import authRoutes from "./routes/authRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

const app = express();

app.use(
  cors({
    origin: env.corsOrigin.split(",").map((item) => item.trim()),
  })
);

app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_, res) => {

res.json({

ok:true

});

});

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;