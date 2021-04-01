import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { DirectionProps } from "./types";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function Direction(props: DirectionProps) {
  if (props.dir === "ltr") {
    return props.children;
  }
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

export default Direction;
