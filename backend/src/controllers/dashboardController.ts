import path from "path";

import { leerCSV } from "../utils/csvReader";

import { AuthRequest } from "../middleware/authMiddleware";

import { Response } from "express";

export function obtenerDashboard(
    req: AuthRequest,
    res: Response
) {

    const cliente = req.usuario.cliente;

    const ruta = path.join(

        process.cwd(),

        "data",

        "clientes",

        cliente,

        "historico.csv"

    );

    try {

        const datos = leerCSV(ruta);

        return res.json({

            ok: true,

            filas: datos.length,

            datos

        });

    }

    catch {

        return res.status(404).json({

            ok: false,

            mensaje: "CSV no encontrado"

        });

    }

}