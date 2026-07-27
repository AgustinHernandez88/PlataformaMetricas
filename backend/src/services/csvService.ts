import fs from "fs";
import path from "path";

export function obtenerRutaCSV(cliente: string): string {

    return path.join(

        process.cwd(),

        "data",

        "clientes",

        cliente,

        "historico.csv"

    );

}

export function existeCSV(cliente: string): boolean {

    return fs.existsSync(obtenerRutaCSV(cliente));

}