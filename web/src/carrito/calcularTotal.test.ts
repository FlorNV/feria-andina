import { describe, expect, it } from "vitest";
import { calcularTotal } from "./calcularTotal";

describe("calcularTotal", () => {
  it("devuelve cero para un carrito vacío", () => {
    expect(calcularTotal([])).toBe(0);
  });

  it("aplica el descuento y redondea el total a dos decimales", () => {
    expect(calcularTotal([{ precio: 19.99, cantidad: 2, descuento: 0.1 }])).toBe(
      35.98,
    );
  });

  it("lanza un error si alguna cantidad es negativa", () => {
    expect(() => calcularTotal([{ precio: 10, cantidad: -1 }])).toThrowError(
      "Cantidad inválida",
    );
  });
});
