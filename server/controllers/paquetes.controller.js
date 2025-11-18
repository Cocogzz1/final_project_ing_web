// server/controllers/paquetes.controller.js
const Paquete = require("../models/paquete.model");

// POST /api/paquetes
exports.crearPaquete = async (req, res) => {
  try {
    const nuevo = await Paquete.create(req.body);
    res.json(nuevo);
  } catch (err) {
    console.error("Error creando paquete:", err.message);
    res.status(500).json({ error: "Error creando paquete" });
  }
};

// GET /api/paquetes
exports.obtenerPaquetes = async (req, res) => {
  try {
    const paquetes = await Paquete.find().sort({ createdAt: -1 });
    res.json(paquetes);
  } catch (err) {
    console.error("Error obteniendo paquetes:", err.message);
    res.status(500).json({ error: "Error obteniendo paquetes" });
  }
};

// GET /api/paquetes/:numeroGuia
exports.obtenerPaquetePorNumeroGuia = async (req, res) => {
  try {
    const { numeroGuia } = req.params;
    const paquete = await Paquete.findOne({ numeroGuia });

    if (!paquete) {
      return res.status(404).json({ error: "Paquete no encontrado" });
    }

    res.json(paquete);
  } catch (err) {
    console.error("Error buscando por guía:", err.message);
    res.status(500).json({ error: "Error buscando paquete" });
  }
};

// PUT /api/paquetes/:id/estado
exports.actualizarEstadoPaquete = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    const paquete = await Paquete.findByIdAndUpdate(
      id,
      { estado },
      { new: true }
    );

    if (!paquete) {
      return res.status(404).json({ error: "Paquete no encontrado" });
    }

    res.json(paquete);
  } catch (err) {
    console.error("Error actualizando estado:", err.message);
    res.status(500).json({ error: "Error actualizando estado" });
  }
};
