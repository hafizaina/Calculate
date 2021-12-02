import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: '#0069c0'
    },
    typography: {
        color: '#ffffff'
    },
    text: {
        primary: '#ffffff'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '24px',
        margin: '5px',
        borderRadius: '80px'
      },
    },
    MuiTypography: {
      h2: {
        fontWeight: 600
      }
    }
  },
});
export default theme;