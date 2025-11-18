import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// FIX para los íconos en Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).toString(),
  iconUrl: new URL(
    "leaflet/dist/images/marker-icon.png",
    import.meta.url
  ).toString(),
  shadowUrl: new URL(
    "leaflet/dist/images/marker-shadow.png",
    import.meta.url
  ).toString(),
});

const mockRepartidores = [
  { id: 1, nombre: "Repartidor Bogotá", lat: 4.710989, lng: -74.07209 },
  { id: 2, nombre: "Repartidor Armenia", lat: 4.441931, lng: -75.242438 },
  { id: 3, nombre: "Repartidor Cali", lat: 3.43722, lng: -76.5225 },
];

export default function MapaRepartidores() {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-md mt-4">
      <MapContainer
        center={[4.710989, -74.07209]}
        zoom={6}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mockRepartidores.map((r) => (
          <Marker key={r.id} position={[r.lat, r.lng]}>
            <Popup>
              <strong>{r.nombre}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
