// server/models/paquete.model.js
const mongoose = require("mongoose");

const PaqueteSchema = new mongoose.Schema(
  {
    numeroGuia: { type: String, required: true, unique: true },
    remitente: {
      nombre: String,
      direccion: String,
      telefono: String,
    },
    destinatario: {
      nombre: String,
      direccion: String,
      telefono: String,
    },
    dimensiones: {
      alto: Number,
      ancho: Number,
      largo: Number,
      peso: Number,
    },
    estado: { type: String, default: "En bodega" },
    ultimaUbicacion: {
      lat: Number,
      lng: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Paquete", PaqueteSchema);
