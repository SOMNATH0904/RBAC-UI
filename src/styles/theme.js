import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A73E8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF5722',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#607D8B',
      disabled: '#B0BEC5',
    },
    action: {
      hover: 'rgba(26, 115, 232, 0.1)',
      selected: 'rgba(26, 115, 232, 0.2)',
      disabled: '#CFD8DC',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#2C3E50',
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.875rem',
      color: '#607D8B',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '8px 16px',
          boxShadow: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '16px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.95rem',
          fontWeight: 500,
          padding: '12px 16px',
        },
        head: {
          backgroundColor: '#F4F6F8',
          fontWeight: 700,
          fontSize: '1rem',
          color: '#2C3E50',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A73E8',
          boxShadow: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: '1rem',
        },
      },
    },
  },
});

export default theme;
