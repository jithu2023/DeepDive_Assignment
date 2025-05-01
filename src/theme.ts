// src/theme.ts
import { createTheme } from '@mui/material/styles';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const theme = createTheme({
  typography: {
    fontFamily: geist.style.fontFamily,
  },
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#FFD700', contrastText: '#000' },
    background: { default: '#fff' },
  },
});
