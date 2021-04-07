import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface Routes {
  component: () => JSX.Element;
  path: string;
  exact: boolean;
  name: string;
  isMenu: boolean;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
