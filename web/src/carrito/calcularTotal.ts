/**
 * Representa un ítem dentro del carrito de compras.
 */
export interface ItemCarrito {
  /** Precio unitario del producto (número finito mayor o igual a 0). */
  precio: number;
  /** Cantidad de unidades del producto (número finito mayor o igual a 0). */
  cantidad: number;
  /** Descuento proporcional aplicado al ítem, en el rango de 0 a 1. */
  descuento?: number;
}

/**
 * Calcula el total de una lista de ítems del carrito aplicando descuentos
 * individuales y redondeando el resultado final a 2 decimales.
 *
 * @param items Lista de ítems del carrito.
 * @returns Total acumulado redondeado a 2 decimales.
 * @throws {Error} Si alguna cantidad es negativa o no finita ("Cantidad inválida").
 * @throws {Error} Si algún precio es negativo o no finito ("Precio inválido").
 * @throws {Error} Si algún descuento está fuera del rango [0, 1] o no es finito ("Descuento inválido").
 */
export function calcularTotal(items: readonly ItemCarrito[]): number {
  let total = 0;

  for (const item of items) {
    if (!Number.isFinite(item.cantidad) || item.cantidad < 0) {
      throw new Error('Cantidad inválida');
    }

    if (!Number.isFinite(item.precio) || item.precio < 0) {
      throw new Error('Precio inválido');
    }

    const descuento = item.descuento ?? 0;
    if (!Number.isFinite(descuento) || descuento < 0 || descuento > 1) {
      throw new Error('Descuento inválido');
    }

    total += item.precio * item.cantidad * (1 - descuento);
  }

  const redondeado = Math.round(total * 100 * (1 + Number.EPSILON)) / 100;
  return redondeado === 0 ? 0 : redondeado;
}
