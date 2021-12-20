import { createTheme } from "@material-ui/core/styles";
import { customStyle } from "./compStyleOverride";

// assets
// import colors from "assets/scss/_themes-vars.module.scss";

// // project imports
// import componentStyleOverrides from "./compStyleOverride";
import { palette } from "./palette";
import { typography } from "./typography";

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */
// export function themes() {
// return
export const theme = createTheme({
  direction: "ltr",
  palette: palette,
  mixins: {
    toolbar: {
      minHeight: "48px",
      padding: "16px",
      "@media (min-width: 600px)": {
        minHeight: "48px",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: typography,
  overrides: customStyle,
});
// }

// export default themes;
