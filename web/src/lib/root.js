import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
// import * as fonts from "../fonts"

// const TTSupermolot = {
//   fontFamily: "TTSupermolot-Regular",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 400,
//   src: `
//     local('TTSupermolot-Regular'),
//     url(${fonts.TTSupermolotRegular}) format('opentype')
//   `,
// }

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#dbe6df",
      main: "#80b09c",
      dark: "#244c5a",
    },
    error: { main: "#b12029" },
    info: { main: "#004877" },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    subtitle1: {
      fontFamily: "TTSupermolot-Regular",
      fontWeight: 700,
      fontSize: "1.6rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: "TTSupermolot-Regular",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.3,
      letterSpacing: "0.00938em",
    },
    button: {
      fontFamily: "TTSupermolot-Regular",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.3,
      letterSpacing: "0.00938em",
    },
  },
})

export default ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
