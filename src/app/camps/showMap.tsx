"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), { ssr: false });

export default function ShowMap({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}) {
  return (
    <Map latitude={parseFloat(latitude)} longitude={parseFloat(longitude)} />
  );
}
