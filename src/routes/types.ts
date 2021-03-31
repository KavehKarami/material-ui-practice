export interface Routes {
  component: () => JSX.Element;
  path: string;
  exact?: boolean;
  name: string;
  isMenu: boolean;
}
