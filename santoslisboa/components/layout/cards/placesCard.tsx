import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function PacesCard({ place, shows }: { place: string, shows: { artist: string, day: Date, dayPT: string }[] }) {
    return (
        <Card sx={{ minHeight: 300 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {place}
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${place}-panel1-content`}
                        id={`${place}-panel1-header`}
                    >
                        <Typography component="span">Lista de concertos</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {shows.map((show, index) => (
                                <ListItem key={index}>
                                    <Typography variant="h5" component="div">
                                        {show.artist}
                                    </Typography>
                                    <Typography variant="body2">
                                        {show.dayPT}
                                    </Typography>
                                </ListItem>

                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}