"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");

    if (carritoGuardado) {
      try {
        setCarrito(JSON.parse(carritoGuardado));
      } catch (error) {
        console.error("Error al leer el carrito:", error);
        setCarrito([]);
      }
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const productoExiste = carritoActual.find(
        (item) => item.id === producto.id,
      );

      if (productoExiste) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((item) => item.id !== id),
    );
  };

  const aumentarCantidad = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item,
      ),
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito((carritoActual) =>
      carritoActual
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item,
        )
        .filter((item) => item.cantidad > 0),
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const cantidadTotal = carrito.reduce(
    (total, item) => total + item.cantidad,
    0,
  );

  const totalCarrito = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        aumentarCantidad,
        disminuirCantidad,
        vaciarCarrito,
        cantidadTotal,
        totalCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
