import fs from "fs";
import { parse } from "csv-parse/sync";

export function leerCSV(ruta: string) {

    const contenido = fs.readFileSync(ruta, "utf-8");

    const registros = parse(contenido, {

        delimiter: "\t",

        relax_column_count: true,

        skip_empty_lines: true

    });

    return registros;

}