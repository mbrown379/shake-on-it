import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway",
  },
  palette: {
    primary: {
      main: "#00C244",
    },
    secondary: {
      main: "#C4C4C4",
    },
    error: {
      main: "#EB5757",
    },
    warning: {
      main: "#F2C94C",
    },
    success: {
      main: "#6FCF97",
    },
  },
});

export default theme;