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
                <Typography variant="body2" color="text.secondary">
                    Desenvolvido por{' '}
                    <Link
                        href="https://github.com/sergiofalves"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                        Sérgio Alves
                    </Link>
                </Typography>
                <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 1 }}>
                    Não oficial. Os dados apresentados provêm de fontes públicas.
                </Typography>
            </Container>
        </Box>
    );
}