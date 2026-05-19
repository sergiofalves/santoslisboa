import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function EventCard({ place, artist, day, dayPT }: { place: string, artist: string, day: Date, dayPT: string }) {
    return (
        <Card sx={{
            minHeight: 300,
            alignContent: "center",
            justifyContent: "center",
            padding: 1
        }}>
            <CardContent>
                <Stack direction="row" spacing={1}>
                    <CelebrationIcon color="action" />
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {artist}
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <PlaceIcon color="action" />
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {place}
                    </Typography>
                </Stack>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {dayPT}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><AssistantDirectionIcon />Direções</Button>
                <Button size="small"><CalendarMonthIcon />Adicionar ao Calendário</Button>
            </CardActions>
        </Card>
    );
}