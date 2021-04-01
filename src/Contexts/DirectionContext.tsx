import { createContext } from "react";
import { Dir } from "../app/layout/Direction/types";

interface DirCtx {
  dir: Dir;
  setDir: React.Dispatch<React.SetStateAction<"ltr" | "rtl">>;
}

const DirectionContext = createContext<DirCtx>({
  dir: "ltr",
  setDir: () => {},
});

export default DirectionContext;
