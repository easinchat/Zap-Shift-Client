import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);

  return (
    <div>
      <h2 className="text-4xl font-bold">We are available in 64 districts</h2>
      <div className="w-full h-200 border">
        <MapContainer
          className="w-full h-200 border"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((service, index) => (
            <Marker
              key={index}
              position={[service.latitude, service.longitude]}
            >
              <Popup>
                {service.district} <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {/*  */}
      {/* <div className="border w-full h-200">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-200"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <span className="font-bold text-xl "> {center.district}</span>{" "}
                <br /> Service Areas: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div> */}
    </div>
  );
};

export default Coverage;
