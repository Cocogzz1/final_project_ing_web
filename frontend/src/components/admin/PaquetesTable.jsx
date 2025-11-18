import { usePackages } from "../../state/PackagesContext";

export default function PaquetesTable() {
  const { paquetes, loading, error, cambiarEstado } = usePackages();

  const handleCambiarEstado = (id) => {
    const nuevo = prompt("Nuevo estado (En ruta, Entregado, etc.):");
    if (nuevo) cambiarEstado(id, nuevo);
  };

  if (loading) return <p>Cargando paquetes...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b">
          <th className="text-left py-2">Número de guía</th>
          <th className="text-left py-2">Remitente</th>
          <th className="text-left py-2">Destinatario</th>
          <th className="text-left py-2">Estado</th>
          <th className="text-left py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {paquetes.map((p) => (
          <tr key={p._id} className="border-b">
            <td className="py-1">{p.numeroGuia}</td>
            <td className="py-1">{p.remitente?.nombre}</td>
            <td className="py-1">{p.destinatario?.nombre}</td>
            <td className="py-1">{p.estado}</td>
            <td className="py-1">
              <button
                onClick={() => handleCambiarEstado(p._id)} 
                className="text-blue-600 underline"
              >
                Cambiar estado
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

