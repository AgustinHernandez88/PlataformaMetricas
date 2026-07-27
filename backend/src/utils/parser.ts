import fs from "fs";

export interface RegistroCSV {
    [key: string]: string | number | null;
}

export interface CSVParseado {

    metadata: Record<string, string>;

    columnas: string[];

    registros: RegistroCSV[];

}

export function parsearCSV(ruta: string): CSVParseado {

    const contenido = fs.readFileSync(ruta, "utf8");

    const lineas = contenido
        .split(/\r?\n/)
        .filter(x => x.trim() !== "");

    const metadata: Record<string, string> = {};

    let indiceCabecera = -1;

    // Buscar automáticamente la fila donde empiezan los datos
    for (let i = 0; i < lineas.length; i++) {

        const columnas = lineas[i].split("\t");

        if (columnas.length > 3) {

            indiceCabecera = i;

            break;

        }

        if (columnas.length == 2) {

            metadata[columnas[0]] = columnas[1];

        }

    }

    if (indiceCabecera === -1) {

        throw new Error("No se encontró la cabecera");

    }

    const columnas = lineas[indiceCabecera].split("\t");

    const registros: RegistroCSV[] = [];

    for (let i = indiceCabecera + 1; i < lineas.length; i++) {

        const valores = lineas[i].split("\t");

        const fila: RegistroCSV = {};

        columnas.forEach((columna, index) => {

            const valor = valores[index];

            if (valor === undefined || valor === "") {

                fila[columna] = null;

                return;

            }

            const numero = Number(valor);

            fila[columna] = isNaN(numero) ? valor : numero;

        });

        registros.push(fila);

    }

    return {

        metadata,

        columnas,

        registros

    };

}