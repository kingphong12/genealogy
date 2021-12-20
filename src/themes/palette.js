/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 *
 */

// import primary from "@material-ui/core/colors/primary";
// export default function themePalette(theme) {
// return
export const palette = {
  // mode: theme.customization.navType,
  common: {
    black: "#000000",
  },
  primary: {
    light: "#42a5f5",
    main: "#1976d2",
    dark: "#1565c0",
    200: "#90caf9",
    800: "#1565c0",
  },
  secondary: {
    light: "#ba68c8",
    main: "#9c27b0",
    dark: "#7b1fa2",
    200: "#f48fb1",
    800: "#ad1457",
  },
  error: {
    light: "#ef5350",
    main: "#d32f2f",
    dark: "#c62828",
  },
  orange: {
    light: "#ffac33",
    main: "#ff9800",
    dark: "#b26a00",
  },
  warning: {
    light: "#ff9800",
    main: "#ED6C02",
    dark: "#e65100",
  },
  success: {
    light: "#4caf50",
    200: "#a5d6a7",
    main: "#2e7d32",
    dark: "#1b5e20",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    900: "#212121",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    dark: "rgba(0, 0, 0, 0.9)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "#f5f5f5",
  },
  background: {
    paper: "#e3f2fd",
    default: "#fff",
  },
};
// }
