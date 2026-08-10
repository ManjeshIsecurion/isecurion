"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "@iconify/react";

const location: {
  city: string;
  address: string;
  position: [number, number];
} = {
  city: "Bengaluru",
  address:
    "2nd Floor, 670, 6th Main Road, Opp. Elita Promenade, RBI Layout, JP Nagar 7th Phase, Bengaluru, Karnataka 560078",
  position: [12.9063, 77.5857],
};

const customIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 260px;
      transform: translateX(-50%);
    ">
      <div style="
        background: white;
        padding: 8px 12px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        margin-bottom: 4px;
        text-align: center;
        white-space: nowrap;
      ">
        <div style="
          font-size: 13px;
          font-weight: 600;
          color: #7D70F0;
          line-height: 1.3;
        ">
          ISECURION Technology<br/>& Consulting Pvt
        </div>
      </div>

      <svg width="34" height="46" viewBox="0 0 34 46" style="filter: drop-shadow(0 3px 4px rgba(0,0,0,0.3));">
        <path
          d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 29 17 29s17-16.25 17-29C34 7.6 26.4 0 17 0z"
          fill="#7D70F0"
        />
        <circle cx="17" cy="17" r="6" fill="white" />
      </svg>
    </div>
  `,
  iconSize: [0, 0],
  iconAnchor: [0, 46],
});

export default function LocationMap() {
  return (
    <div className="relative h-[450px] lg:h-full w-full rounded-2xl overflow-hidden z-10">
      <a
        href="https://www.google.com/maps/search/?api=1&query=ISECURION+Technology+%26+Consulting+Pvt+Ltd+Bangalore"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 left-3 z-[1000] flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md text-sm font-medium text-[#1a73e8] hover:bg-gray-50"
      >
        Open in Maps
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14L21 3" />
        </svg>
      </a>

      <MapContainer
        center={location.position}
        zoom={16}
        scrollWheelZoom={false}
        zoomControl={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
        />

        <ZoomControl position="bottomright" />

        <Marker position={location.position} icon={customIcon}>
          <Popup>
            <div className="min-w-[240px]">
              <h3 className="text-base font-semibold">
                ISECURION Technology & Consulting Pvt Ltd
              </h3>

              <p className="mt-2 text-sm leading-5 text-gray-600">
                2nd Floor, 670, 6th Main Road,
                <br />
                Opp. Elita Promenade,
                <br />
                RBI Layout, JP Nagar 7th Phase,
                <br />
                Bengaluru, Karnataka 560078
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=ISECURION+Technology+%26+Consulting+Pvt+Ltd+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex mt-1 items-center gap-2 text-sm font-semibold text-[#7D70F0]"
              >
                Get Directions
                <span>
                  <Icon icon="ep:right" />
                </span>
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
