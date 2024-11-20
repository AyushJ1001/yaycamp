import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useEffect } from "react";

export default function Map({
  position,
  setPosition,
}: {
  position: { latitude: number; longitude: number };
  setPosition: (position: { latitude: number; longitude: number }) => void;
}) {
  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setPosition({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location:", error);
        // Default position if geolocation fails
        setPosition({ latitude: 51.505, longitude: -0.09 });
      },
    );
  }, []);

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setPosition({
          latitude: e.latlng.lat,
          longitude: e.latlng.lng,
        });
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={new LatLng(position.latitude, position.longitude)} />
    );
  }

  if (!position) {
    return (
      <div className="h-[400px] w-full rounded-md border">Loading map...</div>
    );
  }

  return (
    <div className="h-[400px] w-full rounded-md border">
      <MapContainer
        center={[position.latitude, position.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", borderRadius: "6px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
