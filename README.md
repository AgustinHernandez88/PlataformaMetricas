# Plataforma de Métricas

MVP multi-cliente: React/Vite en `frontend` y Express en `backend`.

## Inicio rápido

1. Copia `backend/.env.example` como `backend/.env` y cambia `JWT_SECRET`.
2. Ejecuta `npm install` en la raíz y luego `npm run install:all`.
3. Ejecuta `npm run dev` y abre `http://localhost:5173`. El backend usa el puerto `3333` por defecto para no interferir con otros proyectos locales.
4. Accede con `demo` / `demo1234`.

## Clientes y CSV

Cada usuario tiene un `cliente` en `backend/src/usuarios.ts`. El servidor resuelve internamente el archivo `backend/data/clientes/<cliente>/historico.csv`; el navegador nunca entrega una ruta ni un cliente.

El lector admite TSV o CSV, metadatos opcionales `Clave<TAB>Valor`, y una fila de cabeceras que incluya fecha/hora (`Timestamp`, `Fecha`, `Date` o `Time`). Para añadir un cliente, crea su carpeta y CSV, agrega un usuario con su hash bcrypt y reinicia el backend.

## Producción

El frontend se construye con `npm --prefix frontend run build` y puede desplegarse en Vercel. Define `VITE_API_URL` con la URL HTTPS pública del backend. El backend debe mantenerse en un equipo/VPS accesible por internet (no puede ser leído por Vercel directamente desde una red local) y debe tener `CORS_ORIGIN` con el dominio del frontend.
