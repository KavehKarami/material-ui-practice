export type Dir = "ltr" | "rtl";

export interface DirectionProps {
  children: JSX.Element;
  dir: Dir;
}
