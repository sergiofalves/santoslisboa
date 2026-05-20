import Grid from '@mui/material/Grid';
import EventCard from './eventCard';

type Event = { place: string; artist: string; day: Date; dayPT: string };

export default function EventsList({ events }: { events: Event[] }) {
    return (
        <Grid container spacing={2} component="ul" sx={{ listStyle: 'none', p: 0, m: 0, width: '100%' }}>
            {events.map((event, index) => (
                <Grid key={`${event.place}-${index}`} size={{ xs: 12, sm: 6, md: 4 }} component="li">
                    <EventCard
                        place={event.place}
                        artist={event.artist}
                        day={event.day}
                        dayPT={event.dayPT}
                    />
                </Grid>
            ))}
        </Grid>
    );
}