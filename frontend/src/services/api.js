// src/services/api.js
import axios from "axios";

// Cliente base de la API
const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // 🔴 tu backend (index.js usa PORT 5000)
  headers: {
    "Content-Type": "application/json",
  },
});

// ------- Paquetes -------

// POST /api/paquetes
export const crearPaquete = (data) => apiClient.post("/paquetes", data);

// GET /api/paquetes
export const obtenerPaquetes = () => apiClient.get("/paquetes");

// GET /api/paquetes/:guia
export const obtenerPaquetePorGuia = (guia) =>
  apiClient.get(`/paquetes/${guia}`);

// PUT /api/paquetes/:id/estado
export const actualizarEstadoPaquete = (id, estado) =>
  apiClient.put(`/paquetes/${id}/estado`, { estado });

// ------- Repartidores (para el mapa) -------

// GET /api/repartidores
export const obtenerRepartidores = () => apiClient.get("/repartidores");
