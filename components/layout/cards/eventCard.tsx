'use client';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import PlaceIcon from '@mui/icons-material/Place';
import DirectionsOutlinedIcon from '@mui/icons-material/DirectionsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const placeCoordinates: Record<string, [number, number]> = {
    'Arraial de Benfica          by                           SUPER BOCK': [38.7511, -9.2014],
    'Arraial da Bica': [38.7083, -9.1465],
    'Arraial da Mouraria (Largo da Rosa)': [38.7160, -9.1350],
    'Arraial Belém': [38.6967, -9.2064],
    'Arraial da Misericórdia (Miradouro São Pedro de Alcântara)': [38.7145, -9.1444],
    'Vila Berta (Graça)': [38.7171, -9.1293],
    'Santos (Terrapleno de Santos)': [38.7058, -9.1557],
};

function buildDirectionsUrl(place: string): string {
    const c = placeCoordinates[place];
    return c
        ? `https://www.google.com/maps/dir/?api=1&destination=${c[0]},${c[1]}`
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place + ' Lisboa')}`;
}

function buildGoogleCalendarUrl(artist: string, place: string, date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const dates = `${y}${m}${d}T210000/${y}${m}${d}T235900`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE`
        + `&text=${encodeURIComponent(`${artist} — Festas de Lisboa 2026`)}`
        + `&dates=${dates}`
        + `&location=${encodeURIComponent(`${place}, Lisboa`)}`
        + `&details=${encodeURIComponent(`Concerto das Festas de Lisboa 2026 em ${place}.`)}`;
}

export default function EventCard({
    place,
    artist,
    day,
}: {
    place: string;
    artist: string;
    day: Date;
    dayPT: string;
}) {
    const dayObj = new Date(day);

    return (
        <Card component="article" sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* Top section: grows to fill, no MUI padding quirks */}
            <Stack
                direction="column"
                spacing={1}
                sx={{
                    width: "100%",
                    padding: 2,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <Stack
                    direction="column"
                    spacing={0.5}
                    sx={{
                        width: "100%",
                        justifyContent: "space-evenly",
                        alignItems: "flex-start",
                    }}>
                    <Typography sx={{ fontWeight: "bold", maxWidth: '95%' }} variant="body1" gutterBottom>
                        {artist}
                    </Typography>
                    <Divider sx={{ my: 1, alignSelf: 'stretch' }} />
                </Stack>
                <Stack
                    direction="row"
                    spacing={0.9}
                    sx={{ flex: 1, alignItems: 'center', minHeight: { md: '3rem' } }}
                >
                    <PlaceIcon sx={{ fontSize: 16, flexShrink: 0, color: 'text.secondary' }} aria-hidden="true" />
                    <Typography variant="body2" color="text.secondary">
                        {place}
                    </Typography>
                </Stack>
                {/* Bottom section: buttons, fully controlled padding */}
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Button
                        component="a"
                        href={buildDirectionsUrl(place)}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="primary"
                        size="medium"
                        startIcon={<DirectionsOutlinedIcon />}
                        aria-label={`Direções para ${place}`}
                        sx={{ flex: 1, color: 'inherit !important' }}
                    >
                        Direções
                    </Button>
                    <Button
                        component="a"
                        href={buildGoogleCalendarUrl(artist, place, dayObj)}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        color="primary"
                        size="medium"
                        startIcon={<CalendarMonthOutlinedIcon />}
                        aria-label={`Adicionar ${artist} ao Google Calendar`}
                        sx={{ flex: 1, color: '#FFFFFF !important' }}
                    >
                        Calendário
                    </Button>
                </Stack>
            </Stack>
        </Card>
    );
}