/** Representa un producto y su cantidad dentro del carrito. */
export interface ItemCarrito {
  precio: number;
  cantidad: number;
  descuento?: number;
}

/**
 * Calcula el total del carrito, aplicando los descuentos y redondeando a dos decimales.
 * @throws Error si algún producto tiene una cantidad negativa.
 */
export function calcularTotal(items: ItemCarrito[]): number {
  let total = 0;

  for (const item of items) {
    if (item.cantidad < 0) {
      throw new Error("Cantidad inválida");
    }

    total += item.precio * item.cantidad * (1 - (item.descuento ?? 0));
  }

  return Math.round(total * 100) / 100;
}
