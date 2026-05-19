import Stack from '@mui/material/Stack';
import PlacesCard from './placesCard';
import { Grid } from '@mui/material';

interface PlacesListProps {
    events: { place: string; shows: { artist: string; day: Date; dayPT: string }[] }[];
}

function PlacesList({ events }: PlacesListProps) {
    return (
        <Grid container spacing={2}>

            {
                events.map((event) => (
                    <Grid key={event.place} size={{ xs: 12, sm: 6, md: 4 }}>
                        <PlacesCard place={event.place} shows={event.shows} />
                    </Grid>
                ))
            }
        </Grid >
    );
}

export default PlacesList;