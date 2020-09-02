import { createMuiTheme } from "@material-ui/core";

export const materialFontTheme = createMuiTheme({
    typography: {
        fontFamily: [
        "Raleway",
        "Avenir Next",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
        ].join(",")
    }
});

export const buttonStyle = {
    position:"fixed",
    bottom: "0",
    zIndex: 5,
    right: "0",
    paddingRight: "0.8rem",
    paddingBottom: "1rem",
    color: "#0075FF"
};