'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// Fix for default marker icons in Leaflet with Next.js
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// A small dictionary to map some known places to coordinates in Lisbon
// Ideally, you would have these coordinates in your Google Sheet!
const placeCoordinates: Record<string, [number, number]> = {
    "Arraial de Benfica          by                           SUPER BOCK": [38.7511, -9.2014],
    "Arraial da Bica": [38.7083, -9.1465],
    "Arraial da Mouraria (Largo da Rosa)": [38.7160, -9.1350],
    "Arraial Belém": [38.6967, -9.2064],
    "Arraial da Misericórdia (Miradouro São Pedro de Alcântara)": [38.7145, -9.1444],
    "Vila Berta (Graça)": [38.7171, -9.1293],
    "Santos (Terrapleno de Santos)": [38.7058, -9.1557]
};

export default function Map({ events }: { events: { place: string, artist: string, day: Date, dayPT: string }[] }) {
    return (
        <div style={{ height: '400px', width: '100%', borderRadius: '15px', overflow: 'hidden', border: '1px solid #ccc' }}>
            <MapContainer
                center={[38.7223, -9.1393]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {events.map((event, index) => {
                    const coords = placeCoordinates[event.place];

                    if (!coords) return null; // Skip if we don't know the coordinates

                    return (
                        <Marker key={index} position={coords} icon={customIcon}>
                            <Popup>
                                <strong>{event.place}</strong><br />
                                {event.artist}<br />
                                {event.dayPT}
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </div>
    );
}
