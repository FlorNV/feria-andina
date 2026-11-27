# Comparativa M1 · calcularTotal

## Herramientas usadas

- Herramienta A: Copilot
- Herramienta B: Antigravity

## Comparación

| Criterio                             | Herramienta A                                                                                                                                                        | Herramienta B                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tiempo hasta una versión aceptable   | 2 turnos: planeó, hizo una única pregunta de alcance y pasó directo a la implementación.                                                                             | 2 turnos, pero con 3 aclaraciones previas (configuración, ruta/nombres y validaciones), actualización del plan y un reintento de instalación antes de la versión aceptable.                                                                                                                        |
| Correcciones necesarias              | Reintentó `npm install` y lo ejecutó dentro de `web/`; después descartó el `package-lock.json` generado en la raíz. No agregó `tsconfig.json` ni script `typecheck`. | Confirmó crear `package.json`, `tsconfig.json` e instalar `typescript`; preguntó por la carpeta `carrito/` y el nombre camelCase (fuera de la convención) y por validar precio, descuento y valores no finitos. El `npm install` quedó bloqueado en el sandbox: se canceló y se volvió a ejecutar. |
| Tests (¿pasan? ¿cubren casos borde?) | Pasaron 3 tests cubriendo los casos borde que se especificaron (carrito vacío, descuento y cantidad negativa).                                                       | Pasaron 5 tests; además de los que se pidieron cubre múltiples ítems, el redondeo de `1.005` a `1.01`, `NaN` en cantidad, precio negativo y descuentos `-0.1` y `1.2`.                                                                                                                             |
| Fidelidad a AGENTS.md                | Respeta español, documentación y tipos sin `any`, pero omite `tsconfig.json` y `npm run typecheck`. Agrega Vitest recién tras pedir confirmación.                    | Respeta español, documentación, modo estricto y `typecheck`, y pregunta antes de agregar dependencias. Se aparta de la convención de carpetas y de nombres kebab-case (con confirmación previa).                                                                                                   |

## Qué acepté, qué corregí y por qué

De Copilot acepté la función porque es simple y hace exactamente lo que se pidió: definir el ítem, tomar el descuento como 0 si no viene, redondear a dos decimales y lanzar Cantidad inválida si la cantidad es negativa. Corregí la falta de `tsconfig.json` y del script `typecheck`, especificados AGENTS.md, y borré el `package-lock.json` creado en la raíz para no mezclar entre `api/` y `web/`.

De Antigravity acepté su configuración de TypeScript con typecheck (detecta errores antes), que la función no modifique la lista (readonly) y sus tests extra con decimales difíciles y valores como `NaN`/`Infinity`, porque en un carrito real pueden aparecer.

## Un caso borde que el prompt no contemplaba

Los decimales a veces se redondean mal: 1.005 se redondea a 1 en vez de 1.01. El prompt no decía cómo manejar eso. Tampoco qué hacer si la cantidad no es un número normal (NaN o Infinity), si el descuento está fuera de 0 a 1 o si el precio es negativo: Copilot lo deja pasar y Antigravity devuelve un error.

## Para qué tarea usaría cada herramienta

Copilot: conviene para cambios chicos en un proyecto ya armado y con instrucciones claras. Hace lo mínimo de forma rápida.

Antigravity: conviene para empezar un proyecto desde cero (crear `package.json`, `tsconfig.json`, instalar dependencias) o cuando hay muchas decisiones. Pregunta antes y explica las opciones, pero lleva más tiempo; conviene darle un alcance claro para que no agregue cosas que no se pidieron.
