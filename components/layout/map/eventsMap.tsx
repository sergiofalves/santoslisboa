"use client";
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Dynamically import the Map component so it only loads in the browser (Leaflet needs 'window')
const DynamicMap = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => (
        <Box
            role="status"
            aria-label="A carregar o mapa"
            sx={{
                height: 550,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                width: "100%"
            }}
        >
            <Typography color="text.secondary">A carregar o mapa...</Typography>
        </Box>
    ),
});

type Event = { place: string; artist: string; day: Date; dayPT: string };

export default function EventsMap({ events }: { events: Event[] }) {
    return <DynamicMap events={events} />;
}