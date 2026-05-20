'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import EventCard from '../cards/eventCard';

const markerIcon = L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 34" width="32" height="48">
        <path fill="#1b4332" stroke="rgba(255,255,255,0.7)" stroke-width="0.8"
            d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 21 9 21s9-14.25 9-21c0-4.97-4.03-9-9-9z"/>
        <circle fill="white" cx="12" cy="9" r="3.5"/>
    </svg>`,
    className: '',
    iconSize: [32, 48],
    iconAnchor: [16, 48],
    popupAnchor: [0, -48],
});

const placeCoordinates: Record<string, [number, number]> = {
    'Festas de Oeiras - JARDIM MUNICIPAL DE OEIRAS                (PS - MIRAFLORES OS QUE SÃO ESTAO AI A DIZER)': [38.689945220947266, -9.314647674560547],
    'Tires (21h45)': [38.7214, -9.3364],
    'Arraial de Benfica          by                           SUPER BOCK': [38.748844146728516, -9.202338218688965],
    'Arraial Belém': [38.6967, -9.2064],
    'Arraial Campo Pequeno (Avenidas Novas)\n(22h)': [38.7423, -9.1447],
    'Arraial Praça de Londres (Areeiro)': [38.741180419921875, -9.137385368347168],
    'MONSANTOS OPEN AIR (BILHETE PAGO)': [38.7265, -9.1834],
    'Arraial da Mouraria (Largo da Rosa)': [38.7160, -9.1350],
    'Arraial do Magalhães (Largo do Salvador, Alfama)': [38.7126, -9.1306],
    'Santos (Terrapleno de Santos)': [38.7058, -9.1557],
    'Arraial dos Combatentes (Rua Possidónio da Silva nº206)': [38.71269607543945, -9.1724],
    'Arraial da Fonte Santa                             (Rua Possidónio da Silva)': [38.7062, -9.166760444641113],
    'Arraial da Praça da Alegria            by                     SUPER BOCK': [38.7176, -9.1450],
    'Arraial de São Miguel\n(Largo de São\nMiguel, Alfama)': [38.7118, -9.1298],
    'Arraial da Bica': [38.7083, -9.1465],
    'Arraial Maritimo Lisboa Clube (Bica)                    by                     SUPER BOCK': [38.7078, -9.1466],
    'Arraial da Misericórdia (Miradouro São Pedro de Alcântara)': [38.7146110534668, -9.14486312866211],
    'Santos à Campolide                 by                                  SUPER BOCK': [38.7305, -9.1633],
    'Vila Berta (Graça)': [38.7171, -9.1293],
    'Arraial de São Vicente (Largo da Graça)': [38.71737289428711, -9.129920959472656],
    'Arraial de Alcântara (Rua da Cascalheira Alcântara)': [38.707576751708984, -9.174691200256348],
    'Arraial Ginásio Alto do Pina (Penha de França)                 by                     SUPER BOCK': [38.7323, -9.1287],
    'Arraiais  Alvalade': [38.7523, -9.1418],
    'Campo de Ourique  (Bombeiros Voluntários de Campo de Ourique)                   by                         SUPER BOCK': [38.7186, -9.1678],
    'Romaria de Santo Amaro (Alto de Santo Amaro, Alcântara)': [38.7032, -9.1824],
};

type Event = { place: string; artist: string; day: Date; dayPT: string };

export default function Map({ events }: { events: Event[] }) {
    const byPlace = events.reduce<Record<string, { coords?: [number, number]; artists: Event[] }>>(
        (acc, ev) => {
            if (!acc[ev.place]) acc[ev.place] = { coords: placeCoordinates[ev.place], artists: [] };
            acc[ev.place].artists.push(ev);
            return acc;
        }, {}
    );

    return (
        <div style={{ height: '550px', width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(27,67,50,0.12)' }}>
            <MapContainer
                center={[38.73925304694364, -9.153737930193902]}
                zoom={12.5}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {Object.entries(byPlace).map(([place, { coords, artists }]) => {
                    if (!coords) return null;
                    return (
                        <Marker key={place} position={coords} icon={markerIcon} title={place} alt={`Eventos em ${place}`}>
                            <Popup maxWidth={300} className="event-popup">
                                {artists.map((ev, i) => (
                                    <React.Fragment key={i}>
                                        {i > 0 && (
                                            <div style={{ height: 1, background: '#ddd8cc' }} />
                                        )}
                                        <EventCard
                                            place={ev.place}
                                            artist={ev.artist}
                                            day={ev.day}
                                            dayPT={ev.dayPT}
                                        />
                                    </React.Fragment>
                                ))}
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
}
