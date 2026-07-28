export interface Usuario { id: number; usuario: string; passwordHash: string; cliente: string; nombre: string; }

// Cambia las cuentas demo por hashes bcrypt propios antes de producción.
// Hash de la contraseña: demo1234
export const usuarios: Usuario[] = [
  { id: 1, usuario: "demo", passwordHash: "$2b$10$ZqyGdzYBHLgo3HCYhkmR3OAqPhJiHSSJ07H7PRY.PKLyvgyG9XjtC", cliente: "demo", nombre: "Cliente Demo" },
];
