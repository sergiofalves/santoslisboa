import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import heroImg from '../../public/img/manjerico.png';

export default function Hero() {
    return (
        <Box
            component="header"
            className="hero"
            sx={{
                px: { xs: '1.25rem', sm: '8vw' },
                py: { xs: '1.5rem', sm: '3rem' },
                display: 'flex',
                alignItems: 'center',
                minHeight: { xs: '160px', sm: '220px' }
            }}
        >
            <Box sx={{ width: "100%", backgroundImage: `url(${heroImg.src})`, backgroundSize: "auto 90%", backgroundPosition: "right bottom", backgroundRepeat: "no-repeat" }}>
                <Box sx={{ maxWidth: { xs: '65%', sm: '55%' } }}>
                    <Typography variant="h1" component="h1">
                        Santos Populares de Lisboa
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                        Descobre arraiais, marchas e concertos por toda a cidade
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}