import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// fix icons Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url),
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url),
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url),
});

export default function MapaRastreo({ ubicacion }) {
  
  if (
    !ubicacion ||
    ubicacion.lat == null ||
    ubicacion.lng == null
  ) {
    return <p className="text-gray-600">Sin ubicación disponible.</p>;
  }

  const lat = Number(ubicacion.lat);
  const lng = Number(ubicacion.lng);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lng]}>
          <Popup>Última ubicación reportada</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

