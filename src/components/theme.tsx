import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"M PLUS 1p"',
      "sans-serif",
      "Georgia",
      "游明朝",
      "YuMincho",
      '"Noto Serif JP"',
      '"ヒラギノ明朝 ProN W3"',
      '"Hiragino Mincho ProN"',
      "HG明朝E",
      '"ＭＳ Ｐ明朝"',
      '"ＭＳ 明朝"',
      "serif",
    ].join(","),
    fontSize: 14,
    h1: {
      color: "#333333",
      fontSize: "1.8rem",
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    h2: {
      color: "#333333",
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    h3: {
      color: "#333333",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    body1: {
      color: "#333333",
      fontSize: 15,
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    body2: {
      color: "#333333",
      fontSize: 12.5,
      fontWeight: 400,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    button: {
      textTransform: "none",
    },
  },
  palette: {
    text: {
      primary: "#333333",
      secondary: "#ffffff",
    },
    primary: {
      light: "#ffffff",
      main: "#485859",
      dark: "#002884",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff7961",
      main: "#F9A638",
      dark: "#ba000d",
      contrastText: "#485859",
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
    },
    MuiCheckbox: {
      color: "primary",
    },
    MuiRadio: {
      color: "primary",
    },
    MuiSwitch: {
      color: "primary",
    },
  },
});
// theme = responsiveFontSizes(theme);

interface IThemeProps {}
const Theme: React.FC<IThemeProps> = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default Theme;
