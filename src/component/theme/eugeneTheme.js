import { createMuiTheme } from "@material-ui/core/styles";

export const eugeneTheme = createMuiTheme({
  typography: {
    fontFamily: "Raleway, Arial",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
});
