import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        primary: { main: '#1b4332', contrastText: '#ffffff' },
        secondary: { main: '#c9993e', contrastText: '#ffffff' },
        background: { default: '#f4f0e8', paper: '#ffffff' },
        text: { primary: '#1b4332', secondary: '#4a6358', disabled: '#9ab0a5' },
        divider: '#ddd8cc',
    },
    typography: {
        fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        h1: { fontWeight: 700, lineHeight: 1.15, fontSize: "clamp(2.5rem, 5vw, 6rem)" },
        h2: { fontWeight: 600, lineHeight: 1.25, fontSize: "clamp(1.8rem, 4vw, 2.7rem)", textTransform: "capitalize" },
        h3: { fontWeight: 600, lineHeight: 1.3 },
        body1: { lineHeight: 1.6, fontSize: "1.1rem" },
        body2: { lineHeight: 1.5, fontSize: "0.9rem" },
        button: { textTransform: 'none', fontWeight: 600 },
        caption: { color: '#4a6358' },
    },
    shape: { borderRadius: 10 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { textTransform: 'none', fontWeight: 600, borderRadius: 6 },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    border: '1px solid #ddd8cc',
                    boxShadow: '0 1px 4px rgba(27,67,50,0.08)',
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                    '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 4px 16px rgba(27,67,50,0.12)',
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    borderRadius: '6px !important',
                    border: 'none',
                    padding: '7px 14px',
                    color: '#4a6358',
                    '&.Mui-selected': {
                        backgroundColor: '#1b4332',
                        color: '#ffffff',
                        '&:hover': { backgroundColor: '#143526' },
                    },
                    '&:focus-visible': {
                        outline: '3px solid #1b4332',
                        outlineOffset: '2px',
                    },
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    border: '1px solid #ddd8cc',
                    borderRadius: 10,
                    padding: 4,
                    gap: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: { root: { borderColor: '#ddd8cc' } },
        },
        MuiCssBaseline: {
            styleOverrides: { body: { backgroundColor: '#f4f0e8' } },
        },
    },
});
