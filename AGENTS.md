# Feria Andina · instrucciones para agentes de IA

## Contexto

- Plataforma de comercio entre cooperativas, productores y compradores andinos.
- Dominio en español: producto, pedido, cooperativa, productor.

## Stack

- Front: React + TypeScript + Redux Toolkit (carpeta `web/`).
- Back: Node + Express + PostgreSQL (carpeta `api/`).
- Versión objetivo de Node: 20 LTS (registrar en `.nvmrc` cuando se agregue).
- Repositorio: `FlorNV/feria-andina` (privado), rama `main`, remoto `origin` por HTTPS.

## Estructura

Convención para archivos nuevos; no mover ni crear carpetas sin permiso:

- `web/src/components/`: componentes reutilizables.
- `web/src/features/`: módulos por dominio (producto, pedido, cooperativa).
- `web/src/store/`: configuración de Redux Toolkit.
- `api/src/routes/`: rutas Express.
- `api/src/controllers/`: manejo de requests y responses.
- `api/src/services/`: lógica de negocio.
- `api/src/models/`: modelos o esquemas de datos.
- `api/migrations/`: migraciones de PostgreSQL.

## Comandos

- Cada workspace (`web/`, `api/`) tiene su propio `package.json`; instalar dependencias con `npm install` dentro de la carpeta correspondiente.
- Desde el workspace: `npm run dev`, `npm run build`, `npm run typecheck`, `npm test`, `npm run lint`.
- Si un script no existe, no inventarlo: avisar antes de agregarlo.

## Variables de entorno

- No leer ni modificar `.env`; ya está excluido por `.gitignore`.
- Documentar variables nuevas en `.env.example` sin valores reales, en el workspace que las use.
- Sugeridas a confirmar: `PORT`, `DATABASE_URL`, `CORS_ORIGIN` (api) y `VITE_API_URL` (web).
- No loguear secretos ni incluirlos en mensajes de error.

## Convenciones

- TypeScript estricto: no usar `any`; usar `unknown` y validación.
- Nombres del dominio en español: producto, pedido, cooperativa, productor.
- Componentes React en PascalCase (`ProductoCard.tsx`); hooks con prefijo `use` (`usePedidos.ts`); el resto de archivos en kebab-case.
- Comentarios y documentación (JSDoc) en español; documentar todos los métodos y funciones.
- Rutas REST en español: `/productos`, `/pedidos`, `/cooperativas`.
- Commits con Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `chore:`, `refactor:`).

## Tests

- Archivos `*.test.ts` o `*.test.tsx` junto al módulo probado.
- Ejecutar `npm test` en el workspace correspondiente.
- El framework se define antes del primer test; no agregar dependencias sin avisar.

## Flujo de trabajo

- `main` es la rama base; trabajar en ramas `feat/...` o `fix/...` y abrir PR con descripción.
- Antes de entregar: pasar `npm run lint`, `npm run typecheck` y `npm test` en los workspaces afectados.

## No hacer

- No agregar dependencias nuevas sin avisar.
- No leer ni modificar archivos `.env`.
- No cambiar la estructura de carpetas.
- No commitear ni pushear cambios sin permiso.
