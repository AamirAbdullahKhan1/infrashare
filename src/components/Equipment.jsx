import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pinImage from '../images/map.png'; // Adjust path to your image

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([22.5937, 78.9629], 5); // Centering map on India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define custom pin icon
    const customIcon = L.icon({
      iconUrl: pinImage, // Path to your custom image
      iconSize: [25, 40], // Control the size of the image
      iconAnchor: [12, 40], // Anchor to make sure it points correctly
      popupAnchor: [0, -40], // Popup position adjustment
    });

    const stateCapitals = [
      {
        name: 'Delhi',
        lat: 28.6139,
        lon: 77.209,
        info: 'Equipment: 20, Labs: 5, Incubation Centers: 2',
      },
      {
        name: 'Mumbai',
        lat: 19.076,
        lon: 72.8777,
        info: 'Equipment: 15, Labs: 4, Incubation Centers: 3',
      },
      // Add more state capitals here
    ];

    stateCapitals.forEach((state) => {
      const marker = L.marker([state.lat, state.lon], { icon: customIcon }).addTo(map);
      marker.bindPopup(`
        <strong>${state.name}</strong><br>
        ${state.info}
      `);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 w-full text-center bg-white py-5 z-10">
        <h2 className="text-3xl font-bold mb-3 text-gray-800">Explore Research Facilities Across India</h2>
        <p className="text-lg text-gray-600">
          Hover over the pins to see the equipment availability, labs, and incubation centers in each state.
        </p>
      </div>
      <div id="map" className="absolute inset-0 z-0"></div>
    </div>
  );
};

export default MapComponent;
