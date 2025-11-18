// server/routes/paquetes.routes.js
const express = require("express");
const router = express.Router();
const {
  crearPaquete,
  obtenerPaquetes,
  obtenerPaquetePorNumeroGuia,
  actualizarEstadoPaquete,
} = require("../controllers/paquetes.controller");

// Crear paquete
router.post("/", crearPaquete);

// Listar todos
router.get("/", obtenerPaquetes);

// Buscar por número de guía  GET /api/paquetes/12345
router.get("/:numeroGuia", obtenerPaquetePorNumeroGuia);

// Actualizar solo el estado   PUT /api/paquetes/ID/estado
router.put("/:id/estado", actualizarEstadoPaquete);

module.exports = router;
