// src/components/rastreo/FormularioRastreo.jsx
import { useState } from "react";
import { obtenerPaquetePorGuia } from "../../services/api";

export default function FormularioRastreo({ onFound }) {
  const [guia, setGuia] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!guia.trim()) return;

    try {
      setLoading(true);
      const res = await obtenerPaquetePorGuia(guia.trim());
      onFound(res.data);     // 👈 le manda el paquete a PaginaRastreo
      setError("");
    } catch (err) {
      console.error(err);
      onFound(null);
      if (err.response?.status === 404) {
        setError("No se encontró un paquete con ese número de guía.");
      } else {
        setError("Error buscando el paquete.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input
        value={guia}
        onChange={(e) => setGuia(e.target.value)}
        placeholder="Número de guía"
        className="flex-1 border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
        disabled={loading}
      >
        {loading ? "Buscando..." : "Buscar"}
      </button>
      {error && <p className="text-red-500 text-sm ml-2">{error}</p>}
    </form>
  );
}

