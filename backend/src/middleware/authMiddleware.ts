import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { JwtPayload } from "../types/auth";

export interface AuthRequest extends Request { usuario?: JwtPayload; }

export function verificarToken(req: AuthRequest, res: Response, next: NextFunction) {
  const value = req.header("authorization");
  if (!value?.startsWith("Bearer ")) return res.status(401).json({ ok: false, mensaje: "Sesión no enviada" });
  try {
    req.usuario = jwt.verify(value.slice(7), env.jwtSecret) as JwtPayload;
    next();
  } catch { return res.status(401).json({ ok: false, mensaje: "Sesión expirada o inválida" }); }
}
