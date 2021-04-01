import { createMuiTheme } from "@material-ui/core";
import { Dir } from "./../app/layout/Direction/types";
import { typography } from "./typography";
import { palette } from "./palette";

export const theme = (dir: Dir) =>
  createMuiTheme({
    palette,
    typography: typography(dir),
    direction: dir,
  });
