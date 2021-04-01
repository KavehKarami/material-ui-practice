import { Dir } from "./../app/layout/Direction/types";
import createTypography from "@material-ui/core/styles/createTypography";
import { palette } from "./palette";

export const typography = (dir: Dir) =>
  createTypography(palette, {
    fontFamily: dir === "ltr" ? "Roboto" : "Arial",
  });
