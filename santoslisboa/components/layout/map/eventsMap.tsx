"use client";
import dynamic from 'next/dynamic';
import { Box, Typography } from '@mui/material';

// Dynamically import the Map component so it only loads in the browser (Leaflet needs 'window')
const DynamicMap = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => <Box sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography>A carregar o mapa...</Typography></Box>
});

function EventsMap({ events }: { events: { place: string, artist: string, day: Date, dayPT: string }[] }) {
    return (
        <DynamicMap events={events} />
    );
}

export default EventsMap;