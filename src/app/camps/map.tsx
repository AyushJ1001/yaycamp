"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return <Marker position={new LatLng(latitude, longitude)} />;
  }

  return (
    <div className="h-[400px] w-full rounded-md border">
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "6px",
        }}
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
