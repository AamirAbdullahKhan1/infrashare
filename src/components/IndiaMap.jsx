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
      iconSize: [40, 40], // Control the size of the image
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
        name: 'Chennai',
        lat: 13.0827,
        lon: 80.2707,
        info: 'Equipment: 1123, Labs: 549, Incubation Centers: 58',
      },
      {
        name: 'Mumbai',
        lat: 19.076,
        lon: 72.8777,
        info: 'Equipment: 15, Labs: 4, Incubation Centers: 3',
      },
      {
        name: 'Banglore',
        lat: 12.9716,
        lon: 77.5946,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Kolkata',
        lat: 22.5726,
        lon: 88.3639,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Hyderabad',
        lat: 17.3850,
        lon: 78.4867,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Gandhinagar',
        lat: 23.2156,
        lon: 72.6369,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Jaipur',
        lat: 26.9124,
        lon: 75.7873,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Bhopal',
        lat: 23.2599,
        lon: 77.4126,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Lucknow',
        lat: 26.8467,
        lon: 80.9462,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Patna',
        lat: 25.5941,
        lon: 85.1376,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Bhubaneswar',
        lat: 20.2961,
        lon: 85.8245,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Thiruvananthapuram',
        lat: 8.5241,
        lon: 76.9366,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Panaji',
        lat: 15.4909,
        lon: 73.8278,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Raipur',
        lat: 21.2514,
        lon: 81.6296,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Ranchi',
        lat: 23.3441,
        lon: 85.3096,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Imphal',
        lat: 24.8170,
        lon: 93.9368,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Shillong',
        lat: 25.5788,
        lon: 91.8933,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Aizawl',
        lat: 23.7271,
        lon: 92.7176,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Kohima',
        lat: 25.6647,
        lon: 94.1086,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Itanagar',
        lat: 27.0844,
        lon: 93.6053,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Agartala',
        lat: 23.8315,
        lon: 91.2868,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Dispur',
        lat: 26.1445,
        lon: 91.7362,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Gangtok',
        lat: 27.3389,
        lon: 88.6065,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Shimla',
        lat: 31.1048,
        lon: 77.1734,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Srinagar',
        lat: 34.0837,
        lon: 74.7973,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Chandigarh',
        lat: 30.7333,
        lon: 76.7794,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Amaravati',
        lat: 16.5735,
        lon: 80.3575,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Dehradun',
        lat: 30.3165,
        lon: 78.0322,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
      },
      {
        name: 'Puducherry',
        lat: 11.9416,
        lon: 79.8083,
        info: 'Equipment: 2400, Labs: 780, Incubation Centers: 76',
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
