// src/pages/AdminDashboard.jsx
import PaqueteForm from "../components/admin/PaqueteForm";
import PaquetesTable from "../components/admin/PaquetesTable";
import MapaRepartidores from "../components/admin/MapaRepartidores";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Panel de administración</h1>

      {/* FORMULARIO + TABLA */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Crear / agregar paquetes */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Registrar nuevo paquete</h2>
          <PaqueteForm />
        </section>

        {/* Lista de paquetes */}
        <section className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Paquetes registrados</h2>
          <PaquetesTable />
        </section>
      </div>

      {/* Mapa de repartidores */}
      <section className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-3">Ubicación de repartidores</h2>
        <MapaRepartidores />
      </section>
    </div>
  );
}
