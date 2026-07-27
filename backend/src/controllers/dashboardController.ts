import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";

import { obtenerRutaCSV } from "../services/csvService";

import { parsearCSV } from "../utils/parser";

export function obtenerDashboard(

    req:AuthRequest,

    res:Response

){

    const cliente=req.usuario.cliente;

    const ruta=obtenerRutaCSV(cliente);

    try{

        const csv=parsearCSV(ruta);

        return res.json({

            ok:true,

            metadata:csv.metadata,

            filas:csv.mediciones.length

        });

    }

    catch{

        return res.status(404).json({

            ok:false,

            mensaje:"No existe CSV"

        });

    }

}