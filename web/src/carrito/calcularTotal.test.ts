import { describe, expect, it } from 'vitest';
import { calcularTotal, type ItemCarrito } from './calcularTotal';

describe('calcularTotal', () => {
  it('devuelve 0 para un carrito vacío', () => {
    expect(calcularTotal([])).toBe(0);
  });

  it('calcula el total de un producto con descuento redondeado a 2 decimales', () => {
    const items: ItemCarrito[] = [
      { precio: 100, cantidad: 2, descuento: 0.25 },
    ];

    expect(calcularTotal(items)).toBe(150);
    expect(
      calcularTotal([{ precio: 99.99, cantidad: 1, descuento: 0.15 }]),
    ).toBe(84.99);
  });

  it('lanza Error("Cantidad inválida") si alguna cantidad es negativa', () => {
    expect(() =>
      calcularTotal([{ precio: 100, cantidad: -1 }]),
    ).toThrowError('Cantidad inválida');

    expect(() =>
      calcularTotal([
        { precio: 50, cantidad: 2 },
        { precio: 30, cantidad: -3, descuento: 0.1 },
      ]),
    ).toThrowError('Cantidad inválida');
  });

  it('combina múltiples productos con y sin descuento y evita imprecisiones de punto flotante', () => {
    const items: ItemCarrito[] = [
      { precio: 0.1, cantidad: 1 },
      { precio: 0.2, cantidad: 1 },
      { precio: 10, cantidad: 1, descuento: 0 },
      { precio: 25, cantidad: 2, descuento: 1 },
    ];

    expect(calcularTotal(items)).toBe(10.3);
    expect(calcularTotal([{ precio: 1.005, cantidad: 1 }])).toBe(1.01);
    expect(calcularTotal([{ precio: 20, cantidad: 0, descuento: 0.5 }])).toBe(0);
  });

  it('lanza Error si el precio o el descuento son inválidos', () => {
    expect(() =>
      calcularTotal([{ precio: -10, cantidad: 1 }]),
    ).toThrowError('Precio inválido');

    expect(() =>
      calcularTotal([{ precio: 100, cantidad: 1, descuento: -0.1 }]),
    ).toThrowError('Descuento inválido');

    expect(() =>
      calcularTotal([{ precio: 100, cantidad: 1, descuento: 1.2 }]),
    ).toThrowError('Descuento inválido');

    expect(() =>
      calcularTotal([{ precio: 100, cantidad: Number.NaN }]),
    ).toThrowError('Cantidad inválida');
  });
});
