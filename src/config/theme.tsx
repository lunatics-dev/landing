import { esES } from '@material-ui/core/locale';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
  {
    palette: {
      type: 'dark',
      background: {
        default: '#303030',
        paper: '#F5F5F5',
      },
      primary: {
        main: '#808080',
      },
      secondary: {
        main: '#EC6D0E',
      },
      success: {
        main: '#22B179',
      },
      error: {
        main: '#FD3838',
      },
      text: {
        primary: '#22B179',
        secondary: '#00000',
      },
    },
    typography: {
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      fontSize: 16,
    },
  },
  esES,
);

export default theme;
