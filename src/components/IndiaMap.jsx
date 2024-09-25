import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Example data for state capitals and their equipment info
const stateCapitals = [
  {
    name: 'Delhi',
    coords: [28.6139, 77.2090],
    info: 'Equipment: 100, Research Labs: 10, Incubation Centers: 5'
  },
  {
    name: 'Mumbai',
    coords: [19.0760, 72.8777],
    info: 'Equipment: 80, Research Labs: 15, Incubation Centers: 4'
  },
  // Add more state capitals here with similar structure
];

const IndiaMap = () => {
  return (
    <div className="w-full h-full py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
        Explore Equipment Availability Across India
      </h2>
      <div className="relative w-full h-[500px] mx-auto max-w-5xl">
        <MapContainer
          center={[20.5937, 78.9629]} // India's central latitude and longitude
          zoom={5}
          className="w-full h-full shadow-lg rounded-lg"
        >
          {/* OpenStreetMap layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Markers for state capitals */}
          {stateCapitals.map((capital, idx) => (
            <Marker key={idx} position={capital.coords}>
              <Popup className="text-sm">
                <h4 className="font-bold text-lg">{capital.name}</h4>
                <p>{capital.info}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default IndiaMap;
