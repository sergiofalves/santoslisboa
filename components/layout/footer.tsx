import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                py: 4,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    Desenvolvido por{' '}
                    <Link
                        href="https://sergioalves.eu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ fontWeight: 'bold', textDecoration: 'underline' }}
                    >
                        Sérgio Alves
                    </Link>
                    {' '}• Contribua no{' '}
                    <Link
                        href="https://github.com/sergiofalves/santoslisboa"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ fontWeight: 'bold', textDecoration: 'underline' }}
                    >
                        GitHub
                    </Link>
                </Typography>
                <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 1 }}>
                    Os dados sobre os eventos foram gentilmente compilados e partilhados por{' '}
                    <Link
                        href="https://docs.google.com/spreadsheets/d/1pIPzAs4YmoHYlJvc_9-eivOI3GDvnbZT/edit?gid=421994152#gid=421994152"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ fontWeight: 'bold', textDecoration: 'underline' }}
                    >
                        Bruno Braga
                    </Link>.
                </Typography>
                <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 0.5 }}>
                    Plataforma não oficial. As informações apresentadas provêm de fontes públicas e podem estar sujeitas a alterações ou conter imprecisões.
                </Typography>
            </Container>
        </Box>
    );
}