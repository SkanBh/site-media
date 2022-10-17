import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#5F6368",
    },
    tertiary: {
      main: "#873592",
    },
    quaternary: {
      main: "#D32489",
    },
    quinary: {
      main: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: ["cairo"].join(","),
    title : {
      fontWeight : 'bold', 
      cursor: 'pointer',
      minHeight:'59px',
      maxHeight:'59px',
      lineHeight:'29px',
      overflow:'hidden',
      cursor: 'pointer'
    },
  },


  body: {
    padding: "0px",
    margin: 0,
  },

  ListItemText: {
    color: "#ffffff",
  },
});

export default theme;
