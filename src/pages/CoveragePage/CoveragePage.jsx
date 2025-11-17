import React, { useRef } from "react";
import SearchBox from "./SearchBox";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const CoveragePage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef();

  return (
    <div>
      <div className="flex flex-col space-y-5">
        <h1 className="text-3xl font-bold">We are available in 64 districts</h1>
        <SearchBox serviceCenters={serviceCenters} mapRef={mapRef} />
      </div>
      <div className="w-full h-[700px] border border-gray-300/50">
        <h3 className="my-5 text-2xl font-medium">
          We deliver almost all over Bangladesh
        </h3>
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoveragePage;
