// src/state/PackagesContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import {
  crearPaquete as crearPaqueteApi,
  obtenerPaquetes,
  actualizarEstadoPaquete,
} from "../services/api";

const ESTADOS = ["En bodega", "En ruta", "Entregado"];

const PackagesContext = createContext();

export function PackagesProvider({ children }) {
  const [paquetes, setPaquetes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔄 Cargar paquetes del backend al entrar al admin
  const cargarPaquetes = async () => {
    try {
      setLoading(true);
      const res = await obtenerPaquetes();
      setPaquetes(res.data); // tu API debe devolver un array de paquetes
      setError("");
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar los paquetes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPaquetes();
  }, []);

  // ➕ Esta es la que usa tu PaqueteForm
  const crearPaquete = async (nuevo) => {
    try {
      setLoading(true);
      const res = await crearPaqueteApi(nuevo);
      setPaquetes((prev) => [...prev, res.data]);
      setError("");
    } catch (err) {
      console.error(err);
      setError("No se pudo crear el paquete.");
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Cambiar estado de un paquete (para la tabla)
  const cambiarEstado = async (id, nuevoEstado) => {
    try {
      setLoading(true);
      const res = await actualizarEstadoPaquete(id, nuevoEstado);
      const actualizado = res.data;

      setPaquetes((prev) =>
        prev.map((p) => (p._id === actualizado._id ? actualizado : p))
      );
      setError("");
    } catch (err) {
      console.error(err);
      setError("No se pudo actualizar el estado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PackagesContext.Provider
      value={{
        paquetes,
        loading,
        error,
        crearPaquete,   // 👈 el mismo nombre que usas en PaqueteForm
        cambiarEstado,
        ESTADOS,
      }}
    >
      {children}
    </PackagesContext.Provider>
  );
}

export function usePackages() {
  return useContext(PackagesContext);
}
