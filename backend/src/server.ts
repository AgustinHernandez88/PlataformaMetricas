import express from "express";
import cors from "cors";
import dashboardRoutes from "./routes/dashboardRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.get("/", (_, res) => {

    res.json({

        mensaje: "API funcionando"

    });

});

app.listen(3000, () => {

    console.log("Servidor iniciado");

});