'use client';

import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EventsMap from './map/eventsMap';
import EventsList from './cards/eventsList';

type Event = { place: string; artist: string; day: Date; dayPT: string };

function isSameDay(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate();
}

export default function HomeClient({
    allShows,
    uniqueDays,
    defaultSelectedIndex,
}: {
    allShows: Event[];
    uniqueDays: Date[];
    defaultSelectedIndex: number;
}) {
    const [selectedDate, setSelectedDate] = React.useState<Dayjs>(
        dayjs(uniqueDays[defaultSelectedIndex])
    );
    const [viewMode, setViewMode] = React.useState<'map' | 'list'>('map');

    const minDate = dayjs(uniqueDays[0]);
    const maxDate = dayjs(uniqueDays[uniqueDays.length - 1]);

    // Build a Set of YYYY-MM-DD strings
    const validDaySet = React.useMemo(
        () => new Set(uniqueDays.map(d => dayjs(d).format('YYYY-MM-DD'))),
        [uniqueDays]
    );

    const selectedDay = selectedDate.toDate();
    const selectedEvents = allShows.filter(ev => isSameDay(new Date(ev.day), selectedDay));
    const eventCount = selectedEvents.length;

    const dayLabel = selectedDay.toLocaleDateString('pt-PT', {
        weekday: 'long', day: 'numeric', month: 'long',
    });

    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                px: { xs: '1.25rem', sm: '8vw' },
                pb: 8,
            }}>

            {/* Day Picker */}
            <Box component="section" aria-labelledby="day-picker-label">
                <DatePicker
                    label="Escolhe um dia"
                    value={selectedDate}
                    onChange={v => v && setSelectedDate(v)}
                    minDate={minDate}
                    maxDate={maxDate}
                    shouldDisableDate={d => !validDaySet.has(d.format('YYYY-MM-DD'))}
                    slotProps={{
                        textField: {
                            id: 'event-date',
                            size: 'small',
                        },
                    }}
                />
            </Box>

            {/* Day header + view toggle */}
            <Stack
                direction="column"
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "flex-start",
                    width: '100%',
                }}
            >
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", sm: "center" },
                        width: '100%',
                    }}
                >

                    <Typography variant="h2" component="h2">{dayLabel}</Typography>

                    {eventCount > 0 && (
                        <ToggleButtonGroup
                            value={viewMode}
                            exclusive
                            onChange={(_, v) => v && setViewMode(v)}
                            aria-label="Modo de visualização"
                            size="small"
                            sx={{ height: 'fit-content' }}
                        >
                            <ToggleButton value="map" aria-label="Ver em mapa">
                                <MapOutlinedIcon fontSize="medium" sx={{ mr: 0.75 }} />
                                Mapa
                            </ToggleButton>
                            <ToggleButton value="list" aria-label="Ver em lista">
                                <ListOutlinedIcon fontSize="medium" sx={{ mr: 0.75 }} />
                                Lista
                            </ToggleButton>
                        </ToggleButtonGroup>
                    )}
                </Stack>

                <Typography
                    id="event-count"
                    variant="body2"
                    color="text.secondary"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {eventCount === 0
                        ? ''
                        : `${eventCount} ${eventCount === 1 ? 'evento' : 'eventos'}`}
                </Typography>
            </Stack>


            {/* Content */}
            {
                eventCount === 0 ? (
                    <Box role="status" sx={{ textAlign: 'center', py: 8 }}>
                        <Typography variant="h6" color="text.secondary">Sem eventos neste dia.</Typography>
                    </Box>
                ) : viewMode === 'map' ? (
                    <EventsMap events={selectedEvents} />
                ) : (
                    <EventsList events={selectedEvents} />
                )
            }
        </Stack >
    );
}
