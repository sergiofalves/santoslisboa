'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Hero() {

    const artists = ["a", "b", "c"];

    return (
        <Stack spacing={2} style={{
            minHeight: "200px",
            backgroundImage: "url('/festas-de-Lisboa-2026.png')",
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Typography sx={{ maxWidth: '50%' }} variant="h1">Organiza-te e Participa Nas Festas de Lisboa 2026</Typography>
            {/* <Autocomplete
                disablePortal
                options={artists}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Artista" />}
            /> */}
        </Stack>
    );
}

export default Hero;