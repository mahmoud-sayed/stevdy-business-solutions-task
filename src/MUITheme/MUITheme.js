import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xl1: 1800,
      xl2: 2000,
      xl3: 2100,
      xl4: 2200,
      xl5: 2300,
      xl6: 2400,
      xl7: 2500,
      xl8: 2650,

    },
  },
  colors: {
    white: '#fff',
    deepOrange: '#FF6057',
    textColor: '#3B3A3A',
    textColor2: '#8F8F8F',
    startColor: '#CB48F9'
  }
});
export default theme;