import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { usuarios } from "../usuarios";
import { JWT_SECRET } from "../config/jwt";

export const login = (req: Request, res: Response) => {

    const { usuario, password } = req.body;

    const encontrado = usuarios.find(
        u =>
            u.usuario === usuario &&
            u.password === password
    );

    if (!encontrado) {

        return res.status(401).json({

            ok: false,

            mensaje: "Usuario o contraseña incorrectos"

        });

    }

    const token = jwt.sign(

        {

            id: encontrado.id,

            cliente: encontrado.cliente,

            nombre: encontrado.nombre

        },

        JWT_SECRET,

        {

            expiresIn: "24h"

        }

    );

    return res.json({

        ok: true,

        token,

        nombre: encontrado.nombre

    });

}