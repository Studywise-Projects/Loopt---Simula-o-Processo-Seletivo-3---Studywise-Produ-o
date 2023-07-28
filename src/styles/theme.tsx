import { createTheme } from '@mui/material';
import '@fontsource/open-sans';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'sans-serif',
      'BlinkMacSystemFont',
    ].join(','),
  },
});

export { theme };
