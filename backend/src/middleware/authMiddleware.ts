import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwt";

export interface AuthRequest extends Request {
    usuario?: any;
}

export function verificarToken(
    req: AuthRequest,
    res: Response,
    next: NextFunction
) {

    const auth = req.headers.authorization;

    if (!auth) {
        return res.status(401).json({
            ok: false,
            mensaje: "Token no enviado"
        });
    }

    const token = auth.replace("Bearer ", "");

    try {

        const payload = jwt.verify(token, JWT_SECRET);

        req.usuario = payload;

        next();

    } catch {

        return res.status(401).json({
            ok: false,
            mensaje: "Token inválido"
        });

    }

}