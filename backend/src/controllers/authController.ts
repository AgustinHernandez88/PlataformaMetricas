import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { usuarios } from "../usuarios";

export async function login(req: Request, res: Response) {
  const usuario = typeof req.body.usuario === "string" ? req.body.usuario.trim() : "";
  const password = typeof req.body.password === "string" ? req.body.password : "";
  const encontrado = usuarios.find((item) => item.usuario === usuario);
  if (!encontrado || !(await bcrypt.compare(password, encontrado.passwordHash))) return res.status(401).json({ ok: false, mensaje: "Usuario o contraseña incorrectos" });
  const token = jwt.sign({ id: encontrado.id, cliente: encontrado.cliente, nombre: encontrado.nombre }, env.jwtSecret, { expiresIn: "12h" });
  return res.json({ ok: true, token, nombre: encontrado.nombre });
}
