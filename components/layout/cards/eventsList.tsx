import EventCard from './eventCard';
import { Grid } from '@mui/material';

function EventsList({ events }: { events: { place: string, artist: string, day: Date, dayPT: string }[] }) {
    return (
        <Grid container spacing={3}>
            {
                events.map((event, index) => (
                    <Grid key={`${event.place}-${index}`} size={{ xs: 12, sm: 6, md: 4 }}>
                        <EventCard place={event.place} artist={event.artist} day={event.day} dayPT={event.dayPT} />
                    </Grid>
                ))
            }
        </Grid >
    );
}

export default EventsList;